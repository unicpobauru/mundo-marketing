/* Gera videoteca/print-indice.js — a base da busca por print.
   ------------------------------------------------------------------
   Roda o MESMO código do site (videoteca/print-busca.js) dentro de um navegador,
   para que a base e o print do usuário sejam calculados exatamente do mesmo jeito.

   De onde vêm os quadros de cada vídeo:
   - Se existir videoteca/quadros/<número do vídeo>.jpg (uma faixa com N quadros de 120x213 lado a lado,
     gerada por ferramentas/quadros/gerar_quadros.py), usa essa faixa (o plano é 15 quadros).
   - Senão, usa os 5 quadros das folhas de miniaturas (videoteca/thumbs/).

   Como rodar (precisa de Node e Playwright):
     node ferramentas/gerar-indice-print.js
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chromium } = require('playwright');

const RAIZ = path.resolve(__dirname, '..');
const VT = path.join(RAIZ, 'videoteca');

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(VT, 'data.js'), 'utf8'), ctx);
const CAT = ctx.window.CATALOGO;
const { fw, fh } = CAT.meta;
const dataUrl = f => 'data:image/jpeg;base64,' + fs.readFileSync(f).toString('base64');

(async () => {
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage();
  await pagina.setContent('<!doctype html><html><body></body></html>');
  await pagina.addScriptTag({ path: path.join(VT, 'print-busca.js') });

  // carrega uma imagem e devolve um id para recortar quadros dela
  await pagina.evaluate(() => {
    window.IMGS = {};
    window.carregar = (id, url) => new Promise((ok, erro) => {
      const im = new Image();
      im.onload = () => { const c = document.createElement('canvas'); c.width = im.naturalWidth; c.height = im.naturalHeight;
        const x = c.getContext('2d'); x.drawImage(im, 0, 0); IMGS[id] = x; ok([c.width, c.height]); };
      im.onerror = erro; im.src = url;
    });
    window.quadros = (id, lista, fw, fh) => lista.map(([x, y]) => PRINT_BUSCA.digitaisDoQuadro(IMGS[id].getImageData(x, y, fw, fh).data)
      .map(d => ({ ph: Array.from(d.ph), dh: Array.from(d.dh), col: Array.from(d.col), hist: Array.from(d.hist) })));
  });

  const videos = [];
  let faixas = 0, carregadas = {};
  for (const it of CAT.items) {
    const faixa = path.join(VT, 'quadros', it.v + '.jpg');
    let lista, id;
    if (fs.existsSync(faixa)) {
      id = 'f' + it.v;
      const [w] = await pagina.evaluate(([i, u]) => carregar(i, u), [id, dataUrl(faixa)]);
      lista = Array.from({ length: Math.floor(w / fw) }, (_, k) => [k * fw, 0]);
      faixas++;
    } else {
      id = 's' + it.sh;
      if (!carregadas[id]) { await pagina.evaluate(([i, u]) => carregar(i, u), [id, dataUrl(path.join(VT, 'thumbs', 'sheet_' + String(it.sh).padStart(2, '0') + '.jpg'))]); carregadas[id] = 1; }
      lista = Array.from({ length: 5 }, (_, k) => [k * fw, it.ro * fh]);
    }
    const q = await pagina.evaluate(([i, l, a, b]) => quadros(i, l, a, b), [id, lista, fw, fh]);
    videos.push({ v: it.v, quadros: q });
  }

  const pacote = await pagina.evaluate(([vs]) => {
    const conv = vs.map(x => ({ v: x.v, quadros: x.quadros.map(zs => zs.map(d => ({ ph: new Uint8Array(d.ph), dh: new Uint8Array(d.dh), col: new Int8Array(d.col), hist: new Uint8Array(d.hist) }))) }));
    const n = Math.max.apply(null, conv.map(x => x.quadros.length));
    return PRINT_BUSCA.empacotar(conv, n);
  }, [videos]);
  pacote.gerado = new Date().toISOString().slice(0, 10);

  const saida = path.join(VT, 'print-indice.js');
  fs.writeFileSync(saida, '/* Base da busca por print. Gerada por ferramentas/gerar-indice-print.js em ' + pacote.gerado +
    '. Não edite à mão. */\nwindow.PRINT_INDICE = ' + JSON.stringify(pacote) + ';\n');
  const nq = pacote.q.reduce((a, b) => a + b, 0);
  console.log('Vídeos: ' + pacote.v.length + ' · quadros: ' + nq + ' · com faixa própria: ' + faixas + ' · arquivo: ' + (fs.statSync(saida).size / 1e6).toFixed(2) + ' MB');
  await navegador.close();
})();
