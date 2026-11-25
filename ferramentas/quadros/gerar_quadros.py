#!/usr/bin/env python3
"""
Videoteca · 15 QUADROS POR VÍDEO + LEITURA DE LEGENDAS
======================================================
Para cada vídeo da Videoteca:
  1. tira 15 quadros espalhados pelo vídeo e salva a faixa em videoteca/quadros/<número>.jpg
     (é o que a busca por print usa para ficar mais precisa);
  2. lê o texto que aparece na tela (legendas) com OCR;
  3. procura países, cidades e gentílicos no texto e sugere o país de vídeos sem país
     ou com país diferente do catálogo.

Nada no catálogo (data.js) é alterado: as sugestões saem numa planilha para revisão.

Precisa de: Python 3, ffmpeg e tesseract (com os idiomas spa e por).
  Mac:     brew install ffmpeg tesseract tesseract-lang
  Windows: instalar ffmpeg e Tesseract (UB Mannheim) e colocar os dois no PATH
  Linux:   apt install ffmpeg tesseract-ocr tesseract-ocr-spa tesseract-ocr-por

Como rodar (na pasta mundo-marketing):
  # vídeos numa pasta do computador (ex.: Google Drive para computador)
  python3 ferramentas/quadros/gerar_quadros.py --pasta "G:/Meu Drive/Videos UniCPO"
  # ou baixando do Drive pelo link (usa a versão de 16 MB quando existe; apaga depois)
  python3 ferramentas/quadros/gerar_quadros.py --baixar
  # testar com poucos vídeos antes
  python3 ferramentas/quadros/gerar_quadros.py --baixar --limite 5
  # depois, gerar de novo a base da busca por print:
  node ferramentas/gerar-indice-print.js

Saídas:
  videoteca/quadros/<número>.jpg                  faixa com 15 quadros de 120x213
  ferramentas/quadros/saida/legendas.json         texto lido em cada vídeo (para recategorizar)
  ferramentas/quadros/saida/sugestoes-paises.csv  país atual × país sugerido, com o trecho da legenda
O script continua de onde parou: vídeos que já têm faixa e legenda são pulados (use --refazer para refazer).
"""
import argparse, csv, json, os, re, shutil, subprocess, sys, tempfile, unicodedata, urllib.request, http.cookiejar

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
VT = os.path.join(RAIZ, 'videoteca')
SAIDA = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'saida')
N_QUADROS = 15
FW, FH = 120, 213

# ---------- países: nomes, gentílicos e cidades que aparecem nas legendas ----------
PAISES = {
    'Argentina': ['argentina', 'argentino', 'buenos aires', 'cordoba', 'rosario', 'mendoza'],
    'Bolívia': ['bolivia', 'boliviano', 'boliviana', 'la paz', 'santa cruz de la sierra', 'cochabamba', 'sucre'],
    'Brasil': ['brasil', 'brasileno', 'brasilena', 'brasileiro', 'brasileira', 'sao paulo', 'bauru', 'rio de janeiro'],
    'Chile': ['chile', 'chileno', 'chilena', 'santiago de chile', 'valparaiso', 'concepcion', 'antofagasta'],
    'Colômbia': ['colombia', 'colombiano', 'colombiana', 'bogota', 'medellin', 'cali', 'barranquilla', 'cartagena', 'bucaramanga'],
    'Costa Rica': ['costa rica', 'costarricense', 'tico', 'tica', 'san jose de costa rica'],
    'Equador': ['ecuador', 'ecuatoriano', 'ecuatoriana', 'quito', 'guayaquil', 'cuenca', 'manta', 'ambato', 'loja', 'machala', 'portoviejo'],
    'El Salvador': ['el salvador', 'salvadoreno', 'salvadorena', 'san salvador'],
    'Guatemala': ['guatemala', 'guatemalteco', 'guatemalteca'],
    'Haiti': ['haiti', 'haitiano', 'haitiana', 'puerto principe'],
    'Honduras': ['honduras', 'hondureno', 'hondurena', 'tegucigalpa', 'san pedro sula'],
    'México': ['mexico', 'mexicano', 'mexicana', 'guadalajara', 'monterrey', 'cdmx', 'puebla', 'tijuana'],
    'Nicarágua': ['nicaragua', 'nicaraguense', 'managua'],
    'Panamá': ['panama', 'panameno', 'panamena'],
    'Paraguai': ['paraguay', 'paraguayo', 'paraguaya', 'asuncion'],
    'Peru': ['peru', 'peruano', 'peruana', 'lima', 'arequipa', 'trujillo', 'cusco', 'piura', 'chiclayo'],
    'República Dominicana': ['republica dominicana', 'dominicano', 'dominicana', 'santo domingo', 'santiago de los caballeros', 'punta cana'],
    'Uruguai': ['uruguay', 'uruguayo', 'uruguaya', 'montevideo'],
    'Venezuela': ['venezuela', 'venezolano', 'venezolana', 'caracas', 'maracaibo', 'valencia venezuela', 'barquisimeto'],
}
# "Brasil/Bauru/São Paulo" aparecem em quase todo vídeo (é onde fica a UniCPO): só contam se nada mais aparecer
FRACOS = {'Brasil'}
CHAVES = [(p, k) for p, ks in PAISES.items() for k in ks]

def norm(s):
    s = unicodedata.normalize('NFD', s or '')
    return re.sub(r'\s+', ' ', ''.join(c for c in s if unicodedata.category(c) != 'Mn').lower())

def paises_no_texto(txt):
    t = ' ' + re.sub(r'[^a-z0-9 ]', ' ', norm(txt)) + ' '
    achados = {}
    for pais, chave in CHAVES:
        n = len(re.findall(r'(?<= )' + re.escape(chave) + r'(?= )', t))
        if n:
            achados.setdefault(pais, {'n': 0, 'chaves': set()})
            achados[pais]['n'] += n; achados[pais]['chaves'].add(chave)
    return achados

# ---------- catálogo ----------
def ler_catalogo():
    txt = open(os.path.join(VT, 'data.js'), encoding='utf-8').read()
    return json.loads(txt[txt.index('{'):txt.rstrip().rstrip(';').rindex('}') + 1])

def precisa(cmd):
    if not shutil.which(cmd):
        sys.exit('Não encontrei o programa "%s". Veja como instalar no começo deste arquivo.' % cmd)

def duracao(arq):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', arq], capture_output=True, text=True)
    try: return float(out.stdout.strip())
    except ValueError: return 0.0

def extrair(arq, pasta_tmp):
    """15 quadros: pequenos (120x213, preenchendo) para a faixa e grandes (720 de altura) para o OCR"""
    d = duracao(arq)
    if d <= 0: raise RuntimeError('não consegui ler a duração do vídeo')
    peq, gr = [], []
    for i in range(N_QUADROS):
        t = d * (i + .5) / N_QUADROS
        p = os.path.join(pasta_tmp, 'p%02d.png' % i); g = os.path.join(pasta_tmp, 'g%02d.png' % i)
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', '%.2f' % t, '-i', arq, '-frames:v', '1',
                        '-vf', 'scale=%d:%d:force_original_aspect_ratio=increase,crop=%d:%d' % (FW, FH, FW, FH), p], check=True)
        subprocess.run(['ffmpeg', '-v', 'error', '-y', '-ss', '%.2f' % t, '-i', arq, '-frames:v', '1', '-vf', 'scale=-2:720', g], check=True)
        peq.append(p); gr.append(g)
    return peq, gr

def faixa(peq, destino):
    entradas = sum([['-i', p] for p in peq], [])
    subprocess.run(['ffmpeg', '-v', 'error', '-y'] + entradas + ['-filter_complex', 'hstack=inputs=%d' % len(peq), '-q:v', '4', destino], check=True)

def ler_legendas(gr):
    textos = []
    for g in gr:
        out = subprocess.run(['tesseract', g, 'stdout', '-l', 'spa+por', '--psm', '11'], capture_output=True, text=True)
        linhas = [l.strip() for l in out.stdout.splitlines() if len(re.sub(r'[^A-Za-zÀ-ÿ]', '', l)) >= 3]
        textos.append(' '.join(linhas))
    vistos, final = set(), []
    for t in textos:          # legendas se repetem entre quadros; guarda cada trecho uma vez
        if t and t not in vistos: vistos.add(t); final.append(t)
    return final

# ---------- obter o arquivo de vídeo ----------
def arquivo_local(it, pasta, indice):
    nomes = [f['n'] for f in sorted(it['f'], key=lambda f: f.get('mb') or 1e9)]
    for n in nomes:
        if n in indice: return indice[n]
    return None

def baixar(it, pasta_tmp):
    m = it.get('m16') or {}
    fid = m.get('id') or (sorted(it['f'], key=lambda f: f.get('mb') or 1e9)[0].get('id') if it['f'] else None)
    if not fid: return None
    destino = os.path.join(pasta_tmp, 'video.mp4')
    jar = http.cookiejar.CookieJar(); op = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    url = 'https://drive.google.com/uc?export=download&confirm=t&id=' + fid
    with op.open(url, timeout=120) as r, open(destino, 'wb') as f:
        if 'text/html' in (r.headers.get('Content-Type') or ''):
            return None   # o Drive pediu confirmação ou o arquivo não é público
        shutil.copyfileobj(r, f)
    return destino

# ---------- principal ----------
def main():
    ap = argparse.ArgumentParser(description='15 quadros por vídeo + leitura de legendas para a Videoteca')
    fonte = ap.add_mutually_exclusive_group(required=True)
    fonte.add_argument('--pasta', help='pasta com os vídeos (procura em subpastas pelo nome do arquivo)')
    fonte.add_argument('--baixar', action='store_true', help='baixa cada vídeo do Google Drive pelo link')
    fonte.add_argument('--video', help='testar com um arquivo de vídeo só (use junto com --numero)')
    ap.add_argument('--numero', type=int, help='número do vídeo na Videoteca, para --video')
    ap.add_argument('--limite', type=int, default=0, help='processar só os N primeiros vídeos (para testar)')
    ap.add_argument('--refazer', action='store_true', help='refazer vídeos já processados')
    a = ap.parse_args()
    for c in ('ffmpeg', 'ffprobe', 'tesseract'): precisa(c)

    cat = ler_catalogo()
    itens = cat['items']
    if a.video:
        if a.numero is None: sys.exit('Com --video, informe também --numero (o número do vídeo na Videoteca).')
        itens = [it for it in itens if it['v'] == a.numero] or [{'v': a.numero, 'no': os.path.basename(a.video), 'pa': '', 'f': [], 'de': ''}]
    if a.limite: itens = itens[:a.limite]

    os.makedirs(os.path.join(VT, 'quadros'), exist_ok=True); os.makedirs(SAIDA, exist_ok=True)
    arq_leg = os.path.join(SAIDA, 'legendas.json')
    legendas = json.load(open(arq_leg, encoding='utf-8')) if os.path.exists(arq_leg) else {}

    indice = {}
    if a.pasta:
        for raiz, _, arqs in os.walk(a.pasta):
            for n in arqs: indice.setdefault(n, os.path.join(raiz, n))
        print('Arquivos encontrados na pasta: %d' % len(indice))

    feitos = pulados = faltando = 0
    for i, it in enumerate(itens, 1):
        v = it['v']; destino = os.path.join(VT, 'quadros', '%d.jpg' % v)
        if not a.refazer and os.path.exists(destino) and str(v) in legendas:
            pulados += 1; continue
        with tempfile.TemporaryDirectory() as tmp:
            try:
                arq = a.video if a.video else arquivo_local(it, a.pasta, indice) if a.pasta else baixar(it, tmp)
                if not arq:
                    faltando += 1; print('[%d/%d] #%d sem arquivo: %s' % (i, len(itens), v, it.get('no'))); continue
                peq, gr = extrair(arq, tmp)
                faixa(peq, destino)
                legendas[str(v)] = ler_legendas(gr)
                feitos += 1
                print('[%d/%d] #%d ok · %d trechos de legenda' % (i, len(itens), v, len(legendas[str(v)])))
            except Exception as e:
                faltando += 1; print('[%d/%d] #%d erro: %s' % (i, len(itens), v, e))
        if feitos % 10 == 0:
            json.dump(legendas, open(arq_leg, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    json.dump(legendas, open(arq_leg, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)

    # sugestões de país
    por_v = {it['v']: it for it in cat['items']}
    linhas = []
    for sv, trechos in legendas.items():
        it = por_v.get(int(sv), {'v': int(sv), 'no': '', 'pa': ''})
        achados = paises_no_texto(' '.join(trechos))
        fortes = {p: x for p, x in achados.items() if p not in FRACOS}
        escolha = fortes or achados
        if not escolha: continue
        sug = max(escolha, key=lambda p: escolha[p]['n'])
        atual = [norm(p.strip()) for p in (it.get('pa') or '').split('/') if p.strip()]
        if norm(sug) in atual: continue
        trecho = next((t for t in trechos if any(k in norm(t) for k in escolha[sug]['chaves'])), '')
        linhas.append({'video': sv, 'nome': it.get('no', ''), 'pais_atual': it.get('pa') or '(vazio)', 'pais_sugerido': sug,
                       'palavras': ', '.join(sorted(escolha[sug]['chaves'])), 'trecho_da_legenda': trecho[:200]})
    with open(os.path.join(SAIDA, 'sugestoes-paises.csv'), 'w', newline='', encoding='utf-8-sig') as f:
        w = csv.DictWriter(f, fieldnames=['video', 'nome', 'pais_atual', 'pais_sugerido', 'palavras', 'trecho_da_legenda'])
        w.writeheader(); w.writerows(linhas)

    print('\nProcessados: %d · já feitos antes: %d · sem arquivo ou com erro: %d' % (feitos, pulados, faltando))
    print('Sugestões de país: %d (ferramentas/quadros/saida/sugestoes-paises.csv)' % len(linhas))
    print('Próximo passo: node ferramentas/gerar-indice-print.js')

if __name__ == '__main__':
    main()
