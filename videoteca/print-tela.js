/* Videoteca · tela "Achar por print"
   Arrastar, colar (Ctrl+V) ou escolher um print → mostra os 10 vídeos mais parecidos.
   A base (print-indice.js, ~2 MB) só é baixada quando a pessoa usa a função pela primeira vez. */
(function(){
  var LANG = (function(){ try{ return localStorage.getItem('mm_lang') === 'es' ? 'es' : 'pt'; }catch(e){ return 'pt'; } })();
  var TX = {
    soltar:{pt:'Arraste o print aqui, cole com Ctrl+V ou clique para escolher', es:'Arrastra la captura aquí, pégala con Ctrl+V o haz clic para elegirla'},
    dica:{pt:'Funciona com print do vídeo, do Instagram ou do WhatsApp, mesmo cortado. O print não sai do seu computador.', es:'Funciona con captura del video, de Instagram o de WhatsApp, aunque esté recortada. La captura no sale de tu computadora.'},
    carregando:{pt:'Preparando a busca (só na primeira vez)…', es:'Preparando la búsqueda (solo la primera vez)…'},
    buscando:{pt:'Procurando…', es:'Buscando…'},
    pronto:{pt:'Os 10 vídeos mais parecidos. Clique para abrir.', es:'Los 10 videos más parecidos. Haz clic para abrir.'},
    erroImg:{pt:'Não consegui ler essa imagem. Tente outro arquivo (PNG ou JPG).', es:'No pude leer esa imagen. Prueba otro archivo (PNG o JPG).'},
    erroBase:{pt:'A base da busca não carregou. Recarregue a página e tente de novo.', es:'La base de la búsqueda no cargó. Recarga la página e inténtalo de nuevo.'},
    muito:{pt:'Muito parecido', es:'Muy parecido'}, parecido:{pt:'Parecido', es:'Parecido'}, pouco:{pt:'Pouco parecido', es:'Poco parecido'},
    nenhum:{pt:'Nenhum vídeo ficou muito parecido. Se o print for de um momento diferente do vídeo, confira os resultados abaixo mesmo assim.', es:'Ningún video quedó muy parecido. Si la captura es de otro momento del video, revisa igual los resultados de abajo.'},
    trocar:{pt:'Usar outro print', es:'Usar otra captura'}, detalhe:{pt:'Abrir', es:'Abrir'}
  };
  var t = function(k){ return TX[k][LANG]; };
  var $ = function(s){ return document.querySelector(s); };
  var box = $('#printBox'); if (!box) return;
  var drop = $('#pDrop'), file = $('#pFile'), status = $('#pStatus'), res = $('#pRes'), prev = $('#pPrev');
  drop.querySelector('b').textContent = t('soltar');
  drop.querySelector('small').textContent = t('dica');
  $('#pTitle').textContent = LANG === 'es' ? 'Encontrar video por captura' : 'Achar vídeo por print';

  // base carregada sob demanda
  var baseP = null;
  function base(){
    if (window.PRINT_INDICE) return Promise.resolve();
    if (!baseP) baseP = new Promise(function(ok, erro){ var s = document.createElement('script'); s.src = 'print-indice.js'; s.onload = ok; s.onerror = erro; document.head.appendChild(s); });
    return baseP;
  }
  function abrir(){ document.querySelectorAll('.drawer,.tray').forEach(function(x){ x.hidden = true; }); $('#scrim').hidden = false; box.hidden = false; base().catch(function(){}); }
  $('#openPrint').addEventListener('click', abrir);

  var porV = {};
  (window.CATALOGO && CATALOGO.items || []).forEach(function(it){ porV[it.v] = it; });
  var M = (window.CATALOGO && CATALOGO.meta) || {per:30};
  function miniatura(v, k){
    var I = window.PRINT_INDICE, it = porV[v], n = 5;
    if (I){ var i = I.v.indexOf(v); if (i >= 0) n = I.q[i]; }
    if (n > 5) return 'background-image:url(quadros/' + v + '.jpg);background-size:' + (n * 40) + 'px 71px;background-position:' + (-k * 40) + 'px 0';
    return 'background-image:url(thumbs/sheet_' + String(it.sh).padStart(2, '0') + '.jpg);background-size:200px ' + (71 * M.per) + 'px;background-position:' + (-k * 40) + 'px ' + (-it.ro * 71) + 'px';
  }
  function nivel(p){ return p < .6 ? 'muito' : p < 1.2 ? 'parecido' : 'pouco'; }
  var esc = function(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); };
  function fmtDur(s){ return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }

  function processar(blob){
    if (!blob || !/^image\//.test(blob.type)) { status.textContent = t('erroImg'); return; }
    if (box.hidden) abrir();
    var url = URL.createObjectURL(blob);
    prev.src = url; prev.hidden = false; drop.classList.add('tem');
    res.textContent = ''; status.textContent = window.PRINT_INDICE ? t('buscando') : t('carregando');
    var im = new Image();
    im.onload = function(){
      base().then(function(){
        status.textContent = t('buscando');
        setTimeout(function(){
          var d = window.PRINT_BUSCA.digitalDeImagem(im), r = window.PRINT_BUSCA.buscar(d, 10);
          mostrar(r);
        }, 20);
      }, function(){ status.textContent = t('erroBase'); });
    };
    im.onerror = function(){ status.textContent = t('erroImg'); };
    im.src = url;
  }
  function mostrar(r){
    status.textContent = r.length && nivel(r[0].pontos) === 'pouco' ? t('nenhum') : t('pronto');
    res.innerHTML = r.map(function(x, i){
      var it = porV[x.v]; if (!it) return '';
      var nv = nivel(x.pontos);
      return '<button type="button" class="titem pres" data-pv="' + x.v + '">' +
        '<span class="ord">' + (i + 1) + '</span><span class="tt" style="' + miniatura(x.v, x.quadro) + '"></span>' +
        '<span style="min-width:0"><span class="tn">' + esc(it.no) + '</span><span class="tf">' + esc([it.c, it.pa, fmtDur(it.du)].filter(Boolean).join(' · ')) + '</span>' +
        '<span class="sim ' + nv + '">' + t(nv) + '</span></span><span class="btn">' + t('detalhe') + '</span></button>';
    }).join('');
  }
  res.addEventListener('click', function(e){ var b = e.target.closest('[data-pv]'); if (b && window.VT_abrir) window.VT_abrir(+b.dataset.pv); });
  file.addEventListener('change', function(){ if (file.files[0]) processar(file.files[0]); file.value = ''; });
  ['dragenter','dragover'].forEach(function(ev){ drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.add('sobre'); }); });
  ['dragleave','drop'].forEach(function(ev){ drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.remove('sobre'); }); });
  drop.addEventListener('drop', function(e){ var f = e.dataTransfer && e.dataTransfer.files[0]; if (f) processar(f); });
  // colar um print em qualquer lugar da Videoteca abre a busca
  document.addEventListener('paste', function(e){
    var it = e.clipboardData && Array.prototype.filter.call(e.clipboardData.items, function(x){ return /^image\//.test(x.type); })[0];
    if (!it) return;
    var tgt = e.target; if (tgt && /INPUT|TEXTAREA/.test(tgt.tagName) && box.hidden) return;
    e.preventDefault(); processar(it.getAsFile());
  });
})();
