#!/usr/bin/env python3
"""Monta os materiais por curso a partir da pasta "MATERIAL CURSOS - OFICIAL" (zip do Drive do comercial).

Uso:  python3 ferramentas/cursos/gerar_cursos.py "caminho/MATERIAL CURSOS - OFICIAL"

O que faz, para cada pasta de turma ativa (as pastas "Z." são ignoradas):
- lê o informativo da turma (estrutura, valores e cronograma de módulos). Quando o PDF é imagem, usa OCR (tesseract);
- copia para assets/cursos/<turma>/ a apresentação completa, a resumida, o informativo e o cronograma (PNG),
  com os PDFs comprimidos para a web (ghostscript);
- copia as matrizes curriculares e o documento informativo comercial para assets/cursos/geral/;
- grava dados/cursos-material.js, que a área "Materiais por curso" lê.

Precisa de: poppler-utils (pdftotext, pdftoppm), tesseract-ocr-por, ghostscript.
Ajustes manuais (OCR que falhou ou divergências) ficam em CORRECOES, abaixo.
"""
import json, os, re, shutil, subprocess, sys, tempfile, unicodedata

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
DEST = os.path.join(RAIZ, 'assets', 'cursos')

# pasta da turma -> nome do curso em dados/cursos.js
CURSO_DA_PASTA = [
    (r'^AOF T3', 'Esp. AOF'),
    (r'3° MOLAR', 'Dipl. Tercer Molar'),
    (r'ALINEADORES', 'Dipl. Alineadores Orto'),
    (r'AOF Step One', 'Dipl. AOF Step One'),
    (r'AOF Step Two', 'Dipl. AOF Step Two'),
    (r'Biomec', 'Dipl. Biomecánica Ortodóncica'),
    (r'Bleafaroplastia|Blefaroplastia', 'Dipl. Blefaroplastia y Lifting de Cejas'),
    (r'Carillas', 'Dipl. Carillas de Resina'),
    (r'Cirurgia Virtual', 'Dipl. Cirugía Virtual Guiada'),
    (r'DDE Endo', 'Dipl. DDE Endo'),
    (r'Implantes para Iniciantes', 'Dipl. Implantes para Iniciantes'),
    (r'Laminados', 'Dipl. Excelencia en Laminados Cerámicos'),
    (r'MASTER IMPLANTE', 'Dipl. Master Implante'),
    (r'MINI IMPLANTES', 'Dipl. Mini Implantes'),
    (r'Master Cirurgia Periodoncia', 'Dipl. Master en Cirugías Plásticas Periodontales y Periimplantarias'),
    (r'Odonto P T', 'Dipl. Odontopediatría'),
    (r'Orto Preventiva', 'Dipl. Ortodoncia Preventiva'),
    (r'Prótese sobre Implantes', 'Dipl. Prótesis sobre Implante'),
    (r'^Dentística T', 'Esp. Dentística'),
    (r'^ENDODON', 'Esp. Endodoncia'),
    (r'^IMPLANTE T', 'Esp. Implante'),
    (r'^ORTODON', 'Esp. Ortodoncia'),
    (r'^Odontopediatria T', 'Esp. Odontopediatría'),
    (r'^Periodoncia T', 'Esp. Periodoncia'),
    (r'^Prótese T', 'Esp. Rehabilitación Oral'),
]
MATRIZ_DO_CURSO = {
    'Esp. AOF': 'Matriz Curricular - AOF.pdf', 'Esp. Dentística': 'Matriz Curricular - Dentística.pdf',
    'Esp. Endodoncia': 'Matriz Curricular - Endodoncia.pdf', 'Esp. Implante': 'Matriz Curricular - Implantología.pdf',
    'Esp. Odontopediatría': 'Matriz Curricular - Odontopediatria.pdf', 'Esp. Ortodoncia': 'Matriz Curricular - Ortodoncia.pdf',
    'Esp. Periodoncia': 'Matriz Curricular - Periodoncia.pdf', 'Esp. Rehabilitación Oral': 'Matriz Curricular - Prótesis Dental.pdf',
}
# o OCR dos informativos de diplomado é imperfeito: valores conferidos à mão contra a imagem
CORRECOES = {
    'T379': dict(inicio='18/01/2027', termino='21/01/2027', carga='48', matricula='197', valor='1.300'),
    'T382': dict(inicio='25/01/2027', termino='29/01/2027', carga='48', matricula='197', valor='1.600'),
    'T398': dict(inicio='01/02/2027', termino='05/02/2027', carga='40', matricula='197', valor='2.400'),
    'T394': dict(inicio='01/03/2027', termino='05/03/2027', carga='60', matricula='197', valor='1.800'),
    'T377': dict(inicio='01/03/2027', termino='05/03/2027', carga='44', matricula='197', valor='1.300'),
    'T385': dict(inicio='08/03/2027', termino='12/03/2027', carga='48', matricula='197', valor='1.300'),
    'T388': dict(inicio='15/03/2027', termino='', carga='60', matricula='197', valor='1.500',
                 conferir='O informativo desta turma diz "01/02 a 05/02/2027" e "Dra Vanessa", diferente da pasta (15/03/2027) e do coordenador (Dr. John). Conferir com o comercial.'),
    'T387': dict(inicio='29/03/2027', termino='02/04/2027', carga='40', matricula='197', valor='1.900'),
    'T392': dict(inicio='05/04/2027', termino='09/04/2027', carga='40', matricula='197', valor='1.300'),
    'T389': dict(inicio='05/04/2027', termino='09/04/2027', carga='60', matricula='197', valor='1.300'),
    'T386': dict(inicio='12/04/2027', termino='16/04/2027', carga='48', matricula='197', valor='1.300'),
    'T395': dict(inicio='19/04/2027', termino='23/04/2027', carga='48', matricula='197', valor='1.300'),
    'T391': dict(inicio='26/04/2027', termino='30/04/2027', carga='60', matricula='197', valor='1.500'),
    'T396': dict(inicio='03/05/2027', termino='07/05/2027', carga='40', matricula='197', valor='1.300'),
    'T393': dict(inicio='10/05/2027', termino='14/05/2027', carga='40', matricula='197', valor='1.800'),
    'T399': dict(inicio='24/05/2027', termino='29/05/2027', carga='44', matricula='197', valor='1.800'),
    'T397': dict(inicio='19/07/2027', termino='23/07/2027', carga='40', matricula='197', valor='1.900'),
    'BLEFARO': dict(inicio='30/11/2026', termino='', carga='', matricula='', valor='',
                    conferir='Sem informativo com valores na pasta desta turma.'),
}

def slug(s):
    s = unicodedata.normalize('NFD', s).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def texto_pdf(arq):
    t = subprocess.run(['pdftotext', '-layout', arq, '-'], capture_output=True, text=True).stdout
    if len(t.split()) >= 20: return t
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(['pdftoppm', '-r', '200', '-png', arq, os.path.join(tmp, 'p')], check=True)
        return ''.join(subprocess.run(['tesseract', os.path.join(tmp, p), '-', '-l', 'por', '--psm', '6'],
                                      capture_output=True, text=True).stdout for p in sorted(os.listdir(tmp)))

def comprimir(orig, dest):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    if os.path.exists(dest) and os.path.getmtime(dest) >= os.path.getmtime(orig): return
    r = subprocess.run(['gs', '-q', '-dNOPAUSE', '-dBATCH', '-dSAFER', '-sDEVICE=pdfwrite', '-dPDFSETTINGS=/ebook',
                        '-dColorImageResolution=150', '-sOutputFile=' + dest, orig])
    if r.returncode or not os.path.exists(dest) or os.path.getsize(dest) >= os.path.getsize(orig):
        shutil.copyfile(orig, dest)   # se não comprimir, usa o original

def ler_esp(t):
    g = lambda p: (re.search(p, t) or [None, ''])[1].strip()
    return dict(periodicidade=g(r'Tipo:\s*(\S+)'), inicio=g(r'Início:\s*(\S+)'), termino=g(r'Término:\s*(\S+)'),
                modulos=g(r'Módulos:\s*(\d+)'), duracao=g(r'Duração:\s*(\d+) Meses'), carga=g(r'Carga Horária:\s*(\d+)'),
                matricula=g(r'Matrícula:\s*\$\s*([\d.,]+)'), mensalidade=g(r'pontualidade:\s*\$\s*([\d.,]+)').replace(',00', ''),
                mensalidade_cheia=g(r'Mensalidade cheia:\s*\$\s*([\d.,]+)').replace(',00', ''),
                total=g(r'com desconto\):\s*\$\s*([\d.,]+)').replace(',00', ''), total_cheio=g(r'Valor total \(cheio\):\s*\$\s*([\d.,]+)').replace(',00', ''),
                cronograma=[list(m) for m in re.findall(r'Módulo (\d+)\s+(\d\d/\d\d/\d{4})\s+(\d\d/\d\d/\d{4})', t)])

def main(origem):
    turmas, gerais = [], {}
    for pasta in sorted(os.listdir(origem)):
        cam = os.path.join(origem, pasta)
        if not os.path.isdir(cam) or pasta.startswith('Z') or pasta == 'MATRIZES CURRICULARES': continue
        curso = next((c for p, c in CURSO_DA_PASTA if re.search(p, pasta, re.I)), None)
        if not curso: print('sem curso para a pasta:', pasta); continue
        arqs = os.listdir(cam)
        m = re.search(r'T(\d{2,3})', pasta); codigo = 'T' + m.group(1) if m else 'BLEFARO'
        if 'PONTO 2' in ' '.join(arqs).upper() or '.  2' in pasta: codigo += '-2'
        pdfs = [a for a in arqs if a.lower().endswith('.pdf')]
        resumido = next((a for a in pdfs if a.lower().startswith('resumido')), None)
        apoio = [a for a in pdfs if 'material de apo' in a.lower()]
        cron = next((a for a in arqs if a.lower().endswith('.png')), None)
        grandes = [a for a in pdfs if a not in apoio and a != resumido and os.path.getsize(os.path.join(cam, a)) > 5e6]
        completo = max(grandes, key=lambda a: os.path.getsize(os.path.join(cam, a))) if grandes else None
        info = next((a for a in pdfs if a not in apoio + [resumido, completo] and not a.startswith('CPO - Etapas')
                     and not re.search(r'cirurgia guiada\s+\(3\)|ODONTOP\.pdf$', a, re.I)), None)
        d = dict(curso=curso, codigo=codigo, tipo='esp' if curso.startswith('Esp.') else 'dipl')
        if info:
            t = texto_pdf(os.path.join(cam, info))
            if 'ESTRUTURA DO CURSO' in t: d.update(ler_esp(t))
        base = codigo.split('-')[0]
        if base in CORRECOES: d.update(CORRECOES[base])
        if codigo.endswith('-2'):
            d['conferir'] = 'Entrada no meio da turma T61 (ponto 2): o aluno entra no módulo 5, em 2027.'
        s = slug(curso) + '-' + codigo.lower()
        dst = os.path.join(DEST, s); arqd = {}
        for chave, a in (('completo', completo), ('resumido', resumido), ('informativo', info)):
            if a: comprimir(os.path.join(cam, a), os.path.join(dst, chave + '.pdf')); arqd[chave] = 'assets/cursos/%s/%s.pdf' % (s, chave)
        if cron:
            os.makedirs(dst, exist_ok=True); shutil.copyfile(os.path.join(cam, cron), os.path.join(dst, 'cronograma.png'))
            arqd['cronograma'] = 'assets/cursos/%s/cronograma.png' % s
        for a in apoio:
            g = os.path.join(DEST, 'geral', slug(curso) + '-material-de-apoio.pdf')
            comprimir(os.path.join(cam, a), g); gerais.setdefault(curso, {})['apoio'] = 'assets/cursos/geral/' + os.path.basename(g)
        d['arquivos'] = arqd
        turmas.append(d); print('%-48s %-8s %s' % (curso, codigo, ', '.join(arqd)))
    mat = os.path.join(origem, 'MATRIZES CURRICULARES')
    if os.path.isdir(mat):
        for curso, a in MATRIZ_DO_CURSO.items():
            if os.path.exists(os.path.join(mat, a)):
                g = os.path.join(DEST, 'geral', slug(curso) + '-matriz-curricular.pdf'); comprimir(os.path.join(mat, a), g)
                gerais.setdefault(curso, {})['matriz'] = 'assets/cursos/geral/' + os.path.basename(g)
        for a, n in (('Documento Informativo - COMERCIAL PT.pdf', 'documento-informativo-comercial-pt.pdf'),
                     ('Documento Informativo - COMERCIAL ES.docx', 'documento-informativo-comercial-es.docx')):
            if os.path.exists(os.path.join(mat, a)):
                os.makedirs(os.path.join(DEST, 'geral'), exist_ok=True); shutil.copyfile(os.path.join(mat, a), os.path.join(DEST, 'geral', n))
    with open(os.path.join(RAIZ, 'dados', 'cursos-material.js'), 'w', encoding='utf-8') as f:
        f.write('/* Gerado por ferramentas/cursos/gerar_cursos.py a partir do material comercial (Drive, 25/11/2026). Não editar à mão:\n'
                '   para corrigir um valor, ajuste CORRECOES no script e rode de novo. */\n')
        f.write('var CURSOS_MATERIAL = ' + json.dumps({'turmas': turmas, 'cursos': gerais}, ensure_ascii=False, indent=0) + ';\n')
    print(len(turmas), 'turmas')

if __name__ == '__main__':
    main(sys.argv[1])
