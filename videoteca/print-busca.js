/* Videoteca · ACHAR VÍDEO POR PRINT
   ------------------------------------------------------------------
   Compara um print com os quadros guardados de cada vídeo e mostra os 10 mais parecidos.
   Tudo roda no navegador: o print não é enviado a lugar nenhum.

   Como funciona:
   - Cada quadro vira uma "impressão digital" com 4 partes: forma (pHash), contornos (dHash),
     cores por região e paleta de cores da cena (histograma).
   - O redimensionamento é feito aqui, à mão, para dar o mesmo resultado em qualquer navegador.
   - A base (print-indice.js) é gerada com ESTE MESMO código por ferramentas/gerar-indice-print.js.
     Se mudar algo no cálculo, gere a base de novo.
   - A base aceita qualquer número de quadros por vídeo (hoje 5; o plano é chegar a 15).
*/
(function(){
  var PB = window.PRINT_BUSCA = {};
  var FW = 120, FH = 213;                       // tamanho padrão de um quadro
  var CX0 = 12, CX1 = 108, CY0 = 29, CY1 = 161; // corte central: tira barras e botões de apps
  var ZOOMS = [1, 0.86, 0.74];                  // versões ampliadas guardadas na base
  var W_HIST = 1.5;                             // peso da paleta de cores
  PB.ZOOMS = ZOOMS;

  // ---------- redimensionamento por média de área (igual em qualquer navegador) ----------
  function pesos(n, m){ // n origem -> m destino
    var out = [], s = n / m;
    for (var j = 0; j < m; j++){
      var a = j * s, b = a + s, ws = [];
      for (var i = Math.floor(a); i < Math.ceil(b - 1e-9); i++){
        var w = Math.min(b, i + 1) - Math.max(a, i);
        if (w > 1e-9) ws.push(i, w / s);
      }
      out.push(ws);
    }
    return out;
  }
  // src: Float32Array (w*h*c), devolve Float32Array (tw*th*c)
  function redim(src, w, h, c, tw, th){
    var px = pesos(w, tw), py = pesos(h, th);
    var tmp = new Float32Array(tw * h * c);
    for (var y = 0; y < h; y++) for (var x = 0; x < tw; x++){
      var ws = px[x];
      for (var ch = 0; ch < c; ch++){
        var acc = 0;
        for (var k = 0; k < ws.length; k += 2) acc += src[(y * w + ws[k]) * c + ch] * ws[k + 1];
        tmp[(y * tw + x) * c + ch] = acc;
      }
    }
    var out = new Float32Array(tw * th * c);
    for (var y2 = 0; y2 < th; y2++){
      var wy = py[y2];
      for (var x2 = 0; x2 < tw; x2++) for (var ch2 = 0; ch2 < c; ch2++){
        var acc2 = 0;
        for (var k2 = 0; k2 < wy.length; k2 += 2) acc2 += tmp[(wy[k2] * tw + x2) * c + ch2] * wy[k2 + 1];
        out[(y2 * tw + x2) * c + ch2] = acc2;
      }
    }
    return out;
  }
  function cortar(src, w, h, c, x0, y0, x1, y1){
    var cw = x1 - x0, chh = y1 - y0, out = new Float32Array(cw * chh * c);
    for (var y = 0; y < chh; y++) for (var x = 0; x < cw; x++) for (var k = 0; k < c; k++)
      out[(y * cw + x) * c + k] = src[((y + y0) * w + x + x0) * c + k];
    return out;
  }
  function rgbaParaRgb(px, w, h){
    var out = new Float32Array(w * h * 3);
    for (var i = 0, j = 0; i < w * h * 4; i += 4, j += 3){ out[j] = px[i]; out[j + 1] = px[i + 1]; out[j + 2] = px[i + 2]; }
    return out;
  }
  function cinza(rgb, n){
    var g = new Float32Array(n);
    for (var i = 0; i < n; i++) g[i] = .299 * rgb[i * 3] + .587 * rgb[i * 3 + 1] + .114 * rgb[i * 3 + 2];
    return g;
  }
  var DCT = (function(){ var N = 32, m = []; for (var u = 0; u < 8; u++){ var r = []; for (var x = 0; x < N; x++) r.push(Math.cos(Math.PI * (2 * x + 1) * u / (2 * N))); m.push(r); } return m; })();
  function bits(arr){ // array de booleanos -> 8 bytes
    var b = new Uint8Array(8);
    for (var i = 0; i < arr.length; i++) if (arr[i]) b[i >> 3] |= 1 << (i & 7);
    return b;
  }

  // ---------- impressão digital de um quadro já em 120x213 (Float32 RGB) ----------
  function digital(base){
    var c = cortar(base, FW, FH, 3, CX0, CY0, CX1, CY1), cw = CX1 - CX0, chh = CY1 - CY0;
    var g = cinza(c, cw * chh);
    // pHash
    var g32 = redim(g, cw, chh, 1, 32, 32), d = [];
    for (var u = 0; u < 8; u++) for (var v = 0; v < 8; v++){
      var acc = 0;
      for (var y = 0; y < 32; y++){ var ry = DCT[u][y]; for (var x = 0; x < 32; x++) acc += ry * g32[y * 32 + x] * DCT[v][x]; }
      d.push(acc);
    }
    var low = d.slice(1), srt = low.slice().sort(function(a, b){ return a - b; }), med = (srt[30] + srt[31]) / 2;
    var ph = bits(low.map(function(x){ return x > med; }));
    // dHash
    var g9 = redim(g, cw, chh, 1, 9, 8), dh = [];
    for (var yy = 0; yy < 8; yy++) for (var xx = 0; xx < 8; xx++) dh.push(g9[yy * 9 + xx + 1] > g9[yy * 9 + xx]);
    var dhb = bits(dh);
    // cores por região (6x8), normalizadas
    var col = redim(c, cw, chh, 3, 6, 8), mean = 0, sd = 0;
    for (var i = 0; i < 48; i++) mean += col[i]; mean /= 48;
    for (i = 0; i < 48; i++) sd += (col[i] - mean) * (col[i] - mean); sd = Math.sqrt(sd / 48) + 1e-6;
    var colq = new Int8Array(48);
    for (i = 0; i < 48; i++) colq[i] = Math.max(-127, Math.min(127, Math.round((col[i] - mean) / sd * 20)));
    // paleta (histograma HSV 8x4x4)
    var hs = redim(c, cw, chh, 3, 40, 60), hist = new Float32Array(128);
    for (i = 0; i < 2400; i++){
      var r = hs[i * 3] / 255, gg = hs[i * 3 + 1] / 255, b = hs[i * 3 + 2] / 255;
      var mx = Math.max(r, gg, b), mn = Math.min(r, gg, b), dd = mx - mn, hh = 0;
      if (dd > 0){ hh = mx === r ? ((gg - b) / dd) % 6 : mx === gg ? (b - r) / dd + 2 : (r - gg) / dd + 4; hh /= 6; if (hh < 0) hh += 1; }
      var H = Math.min(255, Math.floor(hh * 256)), S = Math.min(255, Math.floor((mx ? dd / mx : 0) * 256)), V = Math.min(255, Math.floor(mx * 256));
      hist[(H >> 5) * 16 + (S >> 6) * 4 + (V >> 6)] += 1 / 2400;
    }
    var hq = new Uint8Array(128);
    for (i = 0; i < 128; i++) hq[i] = Math.min(255, Math.round(hist[i] * 1020));
    return {ph:ph, dh:dhb, col:colq, hist:hq};
  }
  function ampliar(base, z){
    if (z === 1) return base;
    var cw = Math.round(FW * z), chh = Math.round(FH * z), x0 = Math.floor((FW - cw) / 2), y0 = Math.floor((FH - chh) / 2);
    return redim(cortar(base, FW, FH, 3, x0, y0, x0 + cw, y0 + chh), cw, chh, 3, FW, FH);
  }
  // pixels RGBA de qualquer tamanho -> impressão digital
  PB.digitalDePixels = function(px, w, h){ return digital(redim(rgbaParaRgb(px, w, h), w, h, 3, FW, FH)); };
  // quadro 120x213 da base -> lista de impressões (uma por zoom) + paleta do quadro inteiro
  PB.digitaisDoQuadro = function(px){
    var base = rgbaParaRgb(px, FW, FH);
    return ZOOMS.map(function(z){ return digital(ampliar(base, z)); });
  };

  // ---------- empacotar / desempacotar a base ----------
  // por entrada (vídeo × quadro × zoom): ph 8 + dh 8 + col 48 = 64 bytes; por quadro: paleta 128 bytes
  function b64(u8){ var s = ''; for (var i = 0; i < u8.length; i += 32768) s += String.fromCharCode.apply(null, u8.subarray(i, i + 32768)); return btoa(s); }
  function deb64(s){ var bin = atob(s), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; }
  PB.empacotar = function(videos, quadrosPorVideo){ // videos: [{v, quadros:[[digital por zoom]...]}]
    var nz = ZOOMS.length, ne = 0;
    videos.forEach(function(x){ ne += x.quadros.length * nz; });
    var E = new Uint8Array(ne * 64), H = new Uint8Array(ne / nz * 128), V = [], Q = [], e = 0, q = 0;
    videos.forEach(function(x){
      V.push(x.v); Q.push(x.quadros.length);
      x.quadros.forEach(function(zs){
        zs.forEach(function(d){ E.set(d.ph, e * 64); E.set(d.dh, e * 64 + 8); E.set(new Uint8Array(d.col.buffer), e * 64 + 16); e++; });
        H.set(zs[0].hist, q * 128); q++;
      });
    });
    return {versao:1, zooms:ZOOMS, quadrosPorVideo:quadrosPorVideo, v:V, q:Q, e:b64(E), h:b64(H)};
  };
  var BASE = null;
  function prepararBase(){
    if (BASE || !window.PRINT_INDICE) return BASE;
    var I = window.PRINT_INDICE, nz = I.zooms.length, E = deb64(I.e), H = deb64(I.h);
    var dono = [], quadro = [];    // por entrada: índice do vídeo e do quadro
    var qi = 0;
    I.v.forEach(function(v, vi){ for (var k = 0; k < I.q[vi]; k++){ for (var z = 0; z < nz; z++){ dono.push(vi); quadro.push(qi); } qi++; } });
    BASE = {I:I, E:E, H:H, dono:dono, quadro:quadro, n:dono.length, nq:qi};
    return BASE;
  }
  var POP = new Uint8Array(256); for (var i = 0; i < 256; i++){ var n = i, c = 0; while (n){ c += n & 1; n >>= 1; } POP[i] = c; }

  // busca: devolve [{v, quadro (0..q-1), pontos}] dos `limite` vídeos mais parecidos
  // excluir (opcional, usado nos testes): {v, quadro} esconde um quadro da base
  PB.buscar = function(d, limite, excluir){
    var B = prepararBase(); if (!B) return [];
    var E = B.E, H = B.H, col = new Uint8Array(d.col.buffer);
    var qs = new Float32Array(B.nq); // distância da paleta, calculada uma vez por quadro
    for (var q = 0; q < B.nq; q++){ var s = 0, o = q * 128; for (var k = 0; k < 128; k++){ var t = H[o + k] - d.hist[k]; s += t < 0 ? -t : t; } qs[q] = s / 1020 * W_HIST; }
    var best = {}, bestQ = {}, skip = -1;
    if (excluir){ var vi0 = B.I.v.indexOf(excluir.v), q0 = 0; for (var t2 = 0; t2 < vi0; t2++) q0 += B.I.q[t2]; skip = q0 + excluir.quadro; }
    for (var e = 0; e < B.n; e++){
      if (B.quadro[e] === skip) continue;
      var o2 = e * 64, hp = 0, hd = 0, cc = 0;
      for (var b = 0; b < 8; b++){ hp += POP[E[o2 + b] ^ d.ph[b]]; hd += POP[E[o2 + 8 + b] ^ d.dh[b]]; }
      for (var j = 0; j < 48; j++){ var a = (E[o2 + 16 + j] << 24 >> 24) - d.col[j]; cc += a * a; }
      var sc = hp / 63 + hd / 64 + Math.sqrt(cc / 48) / 20 * .6 + qs[B.quadro[e]];
      var vi = B.dono[e];
      if (!(vi in best) || sc < best[vi]){ best[vi] = sc; bestQ[vi] = B.quadro[e]; }
    }
    var primeiroQ = [], acc = 0; B.I.q.forEach(function(n){ primeiroQ.push(acc); acc += n; });
    return Object.keys(best).map(function(vi){ return {v:B.I.v[vi], quadro:bestQ[vi] - primeiroQ[vi], pontos:best[vi]}; })
      .sort(function(a, b){ return a.pontos - b.pontos; }).slice(0, limite || 10);
  };

  // lê uma imagem (File/Blob ou <img>) e devolve a impressão digital
  PB.digitalDeImagem = function(img){
    var max = 2000, w = img.naturalWidth || img.width, h = img.naturalHeight || img.height, s = Math.min(1, max / Math.max(w, h));
    var cw = Math.max(1, Math.round(w * s)), ch = Math.max(1, Math.round(h * s));
    var cv = document.createElement('canvas'); cv.width = cw; cv.height = ch;
    var ctx = cv.getContext('2d'); ctx.drawImage(img, 0, 0, cw, ch);
    return PB.digitalDePixels(ctx.getImageData(0, 0, cw, ch).data, cw, ch);
  };
})();
