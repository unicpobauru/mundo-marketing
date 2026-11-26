#!/usr/bin/env python3
"""
Kit de marca · gera os arquivos para download a partir das cores oficiais.
  - assets/marca/cores/paleta-unicpo.png e paleta-fainter.png  (imagem com as cores e os códigos)
  - assets/marca/cores/paletas-unicpo-fainter.ase              (abre no Photoshop, Illustrator e InDesign)
  - assets/marca/cores/cores.txt                                (todos os códigos em texto)
  - assets/marca/downloads/*.zip                                (fontes, paletas e o kit completo)
Para mudar uma cor: edite CORES abaixo e rode  python3 ferramentas/marca/gerar_kit.py
Logos e a base de PowerPoint entram no kit completo quando estiverem em assets/marca/logos/ e assets/marca/apresentacao/.
"""
import os, struct, zipfile
from PIL import Image, ImageDraw, ImageFont

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
M = os.path.join(RAIZ, 'assets', 'marca')

# Cores oficiais (anotadas pelo marketing em 25/11/2026)
CORES = {
    'UniCPO': [
        ('Verde-água',  '#8ACBBD', (138, 203, 190), (50, 0, 32, 0),    'P 130-4 C'),
        ('Azul-claro',  '#34AED6', (52, 174, 214),  (70, 10, 10, 0),   'P 116-5 C'),
        ('Azul-escuro', '#057AB4', (5, 122, 180),   (85, 43, 10, 0),   'P 113-8 C'),
    ],
    'FAINTER': [
        ('Azul-escuro', '#002E9C', (0, 45, 156),    (100, 92, 10, 3),  ''),
        ('Azul-claro',  '#66D3FF', (102, 211, 255), (51, 1, 0, 0),     ''),
    ],
}
FONTE = os.path.join(M, 'fontes', 'Inter')

def fonte(peso, tam):
    return ImageFont.truetype(os.path.join(FONTE, 'Inter-%s.ttf' % peso), tam)

def paleta_png(marca, cores, destino):
    W, PAD, CW = 1600, 64, 0
    n = len(cores); CW = (W - PAD * 2 - (n - 1) * 24) // n
    H = 760
    im = Image.new('RGB', (W, H), (11, 15, 24)); d = ImageDraw.Draw(im)
    d.text((PAD, 52), marca, font=fonte('ExtraBold', 64), fill=(255, 255, 255))
    d.text((PAD, 132), 'Cores oficiais', font=fonte('Regular', 28), fill=(150, 160, 180))
    for i, (nome, hx, rgb, cmyk, pan) in enumerate(cores):
        x = PAD + i * (CW + 24)
        d.rounded_rectangle((x, 210, x + CW, 470), 24, fill=rgb)
        d.text((x, 498), nome, font=fonte('Bold', 34), fill=(255, 255, 255))
        linhas = ['HEX  ' + hx, 'RGB  %d %d %d' % rgb, 'CMYK  %d %d %d %d' % cmyk] + (['Pantone  ' + pan] if pan else [])
        for j, l in enumerate(linhas):
            d.text((x, 552 + j * 40), l, font=fonte('Regular', 27), fill=(200, 208, 222))
    im.save(destino, optimize=True)

def ase(grupos, destino):
    def nome(s):
        b = (s + '\0').encode('utf-16-be'); return struct.pack('>H', len(s) + 1) + b
    blocos = []
    for marca, cores in grupos.items():
        n = nome(marca); blocos.append(struct.pack('>HI', 0xC001, len(n)) + n)
        for cn, hx, rgb, cmyk, pan in cores:
            corpo = nome('%s %s' % (marca, cn)) + b'RGB ' + struct.pack('>fff', *[c / 255 for c in rgb]) + struct.pack('>H', 0)
            blocos.append(struct.pack('>HI', 0x0001, len(corpo)) + corpo)
        blocos.append(struct.pack('>HI', 0xC002, 0))
    with open(destino, 'wb') as f:
        f.write(b'ASEF' + struct.pack('>HHI', 1, 0, len(blocos)) + b''.join(blocos))

def txt(grupos, destino):
    with open(destino, 'w', encoding='utf-8') as f:
        f.write('CORES OFICIAIS · UniCPO e FAINTER\n\n')
        for marca, cores in grupos.items():
            f.write(marca + '\n')
            for cn, hx, rgb, cmyk, pan in cores:
                f.write('  %-12s HEX %s · RGB %d %d %d · CMYK %d %d %d %d%s\n' % ((cn, hx) + rgb + cmyk + ((' · Pantone ' + pan) if pan else '',)))
            f.write('\n')

def zipar(destino, arquivos):
    with zipfile.ZipFile(destino, 'w', zipfile.ZIP_DEFLATED) as z:
        for caminho, nome_no_zip in arquivos:
            z.write(caminho, nome_no_zip)

def da_pasta(pasta, prefixo):
    out = []
    if os.path.isdir(pasta):
        for raiz, _, arqs in os.walk(pasta):
            for a in sorted(arqs):
                if a.startswith('.') or a.startswith('previa-') or a.lower() in ('leia-me.md', 'readme.md'): continue
                c = os.path.join(raiz, a); out.append((c, os.path.join(prefixo, os.path.relpath(c, pasta))))
    return out

def main():
    cores_dir = os.path.join(M, 'cores'); dl = os.path.join(M, 'downloads')
    os.makedirs(cores_dir, exist_ok=True); os.makedirs(dl, exist_ok=True)
    paleta_png('UniCPO', CORES['UniCPO'], os.path.join(cores_dir, 'paleta-unicpo.png'))
    paleta_png('FAINTER', CORES['FAINTER'], os.path.join(cores_dir, 'paleta-fainter.png'))
    ase(CORES, os.path.join(cores_dir, 'paletas-unicpo-fainter.ase'))
    txt(CORES, os.path.join(cores_dir, 'cores.txt'))
    inter = da_pasta(os.path.join(M, 'fontes', 'Inter'), 'Inter')
    mont = da_pasta(os.path.join(M, 'fontes', 'Montserrat'), 'Montserrat')
    cores = da_pasta(cores_dir, 'Cores')
    zipar(os.path.join(dl, 'fonte-inter.zip'), inter)
    zipar(os.path.join(dl, 'fonte-montserrat.zip'), mont)
    zipar(os.path.join(dl, 'cores-oficiais.zip'), cores)
    extras = da_pasta(os.path.join(M, 'logos'), 'Logos') + da_pasta(os.path.join(M, 'apresentacao'), 'Apresentação')
    zipar(os.path.join(dl, 'kit-de-marca-completo.zip'), [(c, 'Fontes/' + n) for c, n in inter + mont] + cores + extras)
    for a in sorted(os.listdir(dl)):
        print('%-32s %6.1f MB' % (a, os.path.getsize(os.path.join(dl, a)) / 1e6))
    if not extras: print('Logos e PowerPoint ainda não estão no kit: coloque em assets/marca/logos/ e assets/marca/apresentacao/ e rode de novo.')

if __name__ == '__main__':
    main()
