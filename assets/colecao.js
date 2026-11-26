/* Mundo Marketing · MOTOR DE COLEÇÕES
   ------------------------------------------------------------------
   Desenha qualquer área a partir de um arquivo dados/<id>.js que chama MM.area({...}).

   Formato da área:
     MM.area({
       id: 'glossario',
       layout: 'cards' | 'faq' | 'glossario' | 'mural' | 'galeria' | 'perfis' | 'kit',
       titulo, descricao,                 // { pt, es } ou texto
       aviso,                             // texto opcional mostrado no topo
       botoes: [{rotulo, url, baixar:true}], // botões no topo da área (ex.: "Baixar kit completo")
       filtros: [{campo:'categoria', rotulo:{pt,es}}],
       destaques: [{valor:'294', rotulo:{pt,es}}],   // números no topo (opcional)
       itens: [ ... ],                    // lista fixa
       gerar: function(CATALOGO){ return [ ... ] }   // ou itens gerados a partir da Videoteca
     });

   Campos de um item (todos opcionais, menos titulo):
     id, titulo, resumo, texto (parágrafos separados por linha em branco; linhas com "- " viram lista),
     categoria, tags[], passos[], campos:[{rotulo, valor}], links:[{rotulo, url, baixar}] (baixar:true = botão de download),
     videos:{q:'busca na videoteca', rotulo}, data:'AAAA-MM-DD', imagem, cor:'#hex',
     status: 'exemplo' | 'preencher' | 'confirmar'
   Qualquer texto pode ser { pt:'...', es:'...' } ou só uma string.
*/
(function(){
  var MM = window.MM = window.MM || {};
  var UI = {
    buscar:{pt:'Buscar nesta área…', es:'Buscar en esta área…'},
    todos:{pt:'Todos', es:'Todos'},
    itens:{pt:'itens', es:'ítems'}, item:{pt:'item', es:'ítem'},
    nada:{pt:'Nada encontrado. Tente outra palavra ou limpe os filtros.', es:'Nada encontrado. Prueba otra palabra o quita los filtros.'},
    vazio:{pt:'Esta área ainda não tem itens.', es:'Esta área todavía no tiene ítems.'},
    exemplo:{pt:'Exemplo', es:'Ejemplo'}, preencher:{pt:'A preencher', es:'Por completar'}, confirmar:{pt:'A confirmar', es:'Por confirmar'},
    fechar:{pt:'Fechar', es:'Cerrar'}, videos:{pt:'Ver vídeos na Videoteca', es:'Ver videos en la Videoteca'},
    copiar:{pt:'Copiar', es:'Copiar'}, copiado:{pt:'Copiado', es:'Copiado'},
    abrir:{pt:'Abrir', es:'Abrir'}, passos:{pt:'Passo a passo', es:'Paso a paso'},
    naoEncontrada:{pt:'Área não encontrada.', es:'Área no encontrada.'}
  };
  var lang = function(){ return window.MM_LANG === 'es' ? 'es' : 'pt'; };
  var L = MM.L = function(v){ if (v && typeof v === 'object' && !Array.isArray(v)) return v[lang()] || v.pt || ''; return v == null ? '' : String(v); };
  var U = function(k){ return L(UI[k]); };
  var norm = MM.norm = function(s){ return String(s||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase(); };
  function el(tag, attrs, kids){
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs){ var v = attrs[k]; if (v == null || v === false) continue;
      if (k === 'text') e.textContent = v; else if (k === 'class') e.className = v; else if (k.slice(0,2) === 'on') e.addEventListener(k.slice(2), v); else e.setAttribute(k, v === true ? '' : v); }
    (kids||[]).forEach(function(c){ if (c == null) return; e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return e;
  }
  MM.el = el;
  var safeUrl = function(u){ u = String(u||''); return /^(https:\/\/|\.\.\/|\.\/|[a-z0-9-]+\/)/i.test(u) && !/^javascript:/i.test(u) ? u : null; };
  var fmtData = function(s){ if (!s) return ''; var p = s.split('-'); return p.length === 3 ? p[2]+'/'+p[1]+'/'+p[0] : s; };
  MM.fmtData = fmtData;

  // texto: parágrafos e listas simples
  function textoBlocos(t){
    var out = [];
    L(t).split(/\n\s*\n/).forEach(function(bloco){
      var linhas = bloco.split('\n').filter(function(x){ return x.trim(); });
      if (!linhas.length) return;
      if (linhas.every(function(x){ return /^\s*- /.test(x); })) out.push(el('ul', null, linhas.map(function(x){ return el('li', {text:x.replace(/^\s*- /,'')}); })));
      else out.push(el('p', {text:linhas.join(' ')}));
    });
    return out;
  }
  function statusBadge(s){
    if (!s) return null;
    var cls = s === 'confirmar' ? 'badge conf' : 'badge prev';
    return el('span', {class:cls, text:U(s)});
  }
  function linkVideos(v, root){
    if (!v) return null;
    return el('a', {class:'lbtn', href:root + 'videoteca/index.html?q=' + encodeURIComponent(v.q), text:(L(v.rotulo) || U('videos')) + ' →'});
  }
  function linkBtns(links){
    return (links||[]).map(function(l, i){
      var u = safeUrl(l.url); if (!u) return null;
      var ext = /^https:/.test(u), dl = !!l.baixar;
      return el('a', {class:'lbtn' + (i === 0 ? ' pri' : ''), href:u, download:dl ? (u.split('/').pop() || true) : null,
        target:ext ? '_blank' : null, rel:ext ? 'noopener' : null, text:(dl ? '↓ ' : '') + L(l.rotulo) + (ext ? ' ↗' : '')});
    });
  }
  function copyBtn(txt){
    var b = el('button', {class:'lbtn', type:'button', text:U('copiar') + ' ' + txt});
    b.addEventListener('click', function(){
      var done = function(){ b.textContent = U('copiado'); setTimeout(function(){ b.textContent = U('copiar') + ' ' + txt; }, 1400); };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, function(){});
    });
    return b;
  }

  // ---------- detalhe ----------
  var dlg = null;
  function abrirDetalhe(def, it, root){
    if (!dlg){ dlg = el('dialog', {class:'det'}); document.body.appendChild(dlg);
      dlg.addEventListener('click', function(e){ if (e.target === dlg) dlg.close(); });
      dlg.addEventListener('close', function(){ if (location.hash) history.replaceState(null, '', location.pathname + location.search); }); }
    dlg.textContent = '';
    var kids = [];
    var head = el('div', {class:'det-head'}, [
      it.foto ? el('img', {class:'avatar', src:it.foto, alt:''}) : null,
      el('h2', {text:L(it.titulo)}),
      el('button', {class:'xbtn', type:'button', 'aria-label':U('fechar'), text:'×', onclick:function(){ dlg.close(); }})
    ]);
    kids.push(head);
    var meta = el('div', {class:'acts'}, [
      it.categoria ? el('span', {class:'badge ok', text:L(it.categoria)}) : null,
      statusBadge(it.status),
      it.data ? el('span', {class:'badge ext', text:fmtData(it.data)}) : null
    ]);
    if (meta.childNodes.length) kids.push(meta);
    if (it.detalheImagem || it.imagem) kids.push(el('img', {class:'det-img', src:it.detalheImagem || it.imagem, alt:L(it.titulo)}));
    if (it.cor) kids.push(el('div', {class:'swatch', style:'background:' + it.cor}));
    if (it.resumo) kids.push(el('p', {text:L(it.resumo), style:'color:var(--muted)'}));
    if (it.texto) textoBlocos(it.texto).forEach(function(b){ kids.push(b); });
    // secoes: [{titulo, linhas:[...], recolhido:{titulo, linhas:[...]}, links:[...]}] (ex.: uma seção por turma)
    (it.secoes || []).forEach(function(sc){
      var box = el('section', {class:'det-sec'}, [el('h3', {text:L(sc.titulo)})]);
      if (sc.linhas && sc.linhas.length) box.appendChild(el('ul', null, sc.linhas.map(function(x){ return el('li', {text:L(x)}); })));
      if (sc.recolhido && sc.recolhido.linhas.length) box.appendChild(el('details', null, [el('summary', {text:L(sc.recolhido.titulo)}),
        el('ul', null, sc.recolhido.linhas.map(function(x){ return el('li', {text:L(x)}); }))]));
      var la = linkBtns(sc.links).filter(Boolean);
      if (la.length) box.appendChild(el('div', {class:'acts'}, la));
      kids.push(box);
    });
    if (it.passos && it.passos.length){
      kids.push(el('h3', {text:U('passos')}));
      kids.push(el('ol', null, it.passos.map(function(p){ return el('li', {text:L(p)}); })));
    }
    if (it.campos && it.campos.length){
      var dl = el('dl', {class:'kv'});
      it.campos.forEach(function(c){ var v = L(c.valor); if (!v) return; dl.appendChild(el('dt', {text:L(c.rotulo)})); dl.appendChild(el('dd', {text:v})); });
      kids.push(dl);
    }
    var acts = el('div', {class:'acts'}, [].concat(it.cor ? [copyBtn(it.cor)] : [], linkBtns(it.links), [linkVideos(it.videos, root)]));
    if (acts.childNodes.length) kids.push(acts);
    dlg.appendChild(el('div', {class:'det-in'}, kids));
    if (!dlg.open) dlg.showModal();
    if (it.id) history.replaceState(null, '', '#' + it.id);
  }

  // ---------- cartões por layout ----------
  function cardPadrao(def, it, root){
    var b = el('button', {class:'card', type:'button', onclick:function(){ abrirDetalhe(def, it, root); }});
    if (def.layout === 'galeria') b.appendChild(it.imagem ? el('img', {class:'thumb-img', src:it.imagem, alt:L(it.titulo), loading:'lazy'}) : el('div', {class:'thumb-img', text:L(it.categoria) || '—'}));
    if (def.layout === 'kit' && it.cor) b.appendChild(el('div', {class:'swatch', style:'background:' + it.cor}));
    if (def.layout === 'kit' && it.imagem) b.appendChild(el('img', {class:'swatch', src:it.imagem, alt:'', loading:'lazy', style:'width:100%;object-fit:cover'}));
    if (def.layout === 'perfis'){
      var ini = L(it.titulo).replace(/^(Profª?|Prof\.|Dra?\.)\s+/g,'').replace(/^(Dra?\.|Prof\.)\s+/,'').split(/\s+/).slice(0,2).map(function(w){ return w[0]; }).join('').toUpperCase();
      b.appendChild(el('div', {class:'perfil-top'}, [
        it.foto ? el('img', {class:'avatar', src:it.foto, alt:'', loading:'lazy'}) : el('div', {class:'avatar', text:ini}),
        el('div', null, [el('h3', {text:L(it.titulo)}), it.categoria ? el('div', {class:'cat', text:L(it.categoria)}) : null])
      ]));
      if (it.especialidade) b.appendChild(el('div', {class:'perfil-esp', text:L(it.especialidade)}));
      if (it.contato) b.appendChild(el('div', {class:'perfil-contato', text:it.contato}));
    } else {
      if (it.categoria) b.appendChild(el('div', {class:'cat', text:L(it.categoria)}));
      b.appendChild(el('h3', {text:L(it.titulo)}));
      if (it.cor) b.appendChild(el('div', {class:'hex', text:it.cor}));
    }
    if (it.resumo) b.appendChild(el('p', {text:L(it.resumo)}));
    var meta = el('div', {class:'meta'}, [statusBadge(it.status), it.data ? el('span', {class:'badge ext', text:fmtData(it.data)}) : null]);
    (it.tags||[]).slice(0,3).forEach(function(t){ meta.appendChild(el('span', {class:'badge ext', text:L(t)})); });
    if (meta.childNodes.length) b.appendChild(meta);
    return b;
  }
  function desenharCards(def, itens, root){ return el('div', {class:'grid'}, itens.map(function(it){ return cardPadrao(def, it, root); })); }
  function desenharFaq(def, itens, root){
    var grupos = {}, ordem = [];
    itens.forEach(function(it){ var g = L(it.categoria) || '—'; if (!grupos[g]){ grupos[g] = []; ordem.push(g); } grupos[g].push(it); });
    return el('div', {class:'faq-group'}, [].concat.apply([], ordem.map(function(g){
      return [el('h2', {text:g})].concat(grupos[g].map(function(it){
        var body = el('div', {class:'body'}, [].concat(textoBlocos(it.texto || it.resumo || ''),
          [el('div', {class:'acts'}, [statusBadge(it.status)].concat(linkBtns(it.links), [linkVideos(it.videos, root)]))]));
        return el('details', {class:'faq', id:it.id || null}, [el('summary', {text:L(it.titulo)}), body]);
      }));
    })));
  }
  function desenharGlossario(def, itens){
    var ord = itens.slice().sort(function(a,b){ return norm(L(a.titulo)).localeCompare(norm(L(b.titulo))); });
    var porLetra = {}, letras = [];
    ord.forEach(function(it){ var l = norm(L(it.titulo)).charAt(0).toUpperCase(); if (!porLetra[l]){ porLetra[l] = []; letras.push(l); } porLetra[l].push(it); });
    var wrap = el('div', null, [el('nav', {class:'letras', 'aria-label':'A–Z'}, letras.map(function(l){ return el('a', {href:'#letra-' + l, text:l}); }))]);
    letras.forEach(function(l){
      wrap.appendChild(el('h2', {class:'gl-letra', id:'letra-' + l, text:l}));
      wrap.appendChild(el('dl', {class:'gl'}, porLetra[l].map(function(it){
        return el('div', {id:it.id || null}, [el('dt', {text:L(it.titulo)}), el('dd', {text:L(it.texto || it.resumo)})]);
      })));
    });
    return wrap;
  }
  // ---------- mural: selo NEW para o que a pessoa ainda não viu ----------
  // Guarda neste navegador os ids já vistos. Na primeira visita, só o que é dos últimos 30 dias conta como novo.
  var CHAVE_VISTO = 'mm_mural_visto';
  function lerVistos(){ try { return JSON.parse(localStorage.getItem(CHAVE_VISTO)); } catch(e){ return null; } }
  MM.muralNovos = function(itens){
    var vistos = lerVistos(), limite = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
    return (itens || []).filter(function(it){
      return vistos ? vistos.indexOf(it.id) < 0 : String(it.data || '') >= limite;
    }).map(function(it){ return it.id; });
  };
  MM.muralMarcarVisto = function(itens){
    try { localStorage.setItem(CHAVE_VISTO, JSON.stringify((itens || []).map(function(it){ return it.id; }))); } catch(e){}
  };
  function desenharMural(def, itens, root){
    var todos = MM.itensDe(def), novos = MM.muralNovos(todos);
    MM.muralMarcarVisto(todos);   // os selos continuam nesta visita e somem na próxima
    var ord = itens.slice().sort(function(a,b){ return String(b.data||'').localeCompare(String(a.data||'')); });
    return el('div', {class:'mural'}, ord.map(function(it){
      var novo = novos.indexOf(it.id) >= 0;
      return el('article', {class:'post' + (novo ? ' novo' : ''), id:it.id || null}, [
        el('time', {datetime:it.data, text:fmtData(it.data) + (it.categoria ? ' · ' + L(it.categoria) : '')}),
        el('h3', {}, [document.createTextNode(L(it.titulo)), novo ? el('span', {class:'selo-new', text:'NEW'}) : null]),
        it.resumo ? el('p', {text:L(it.resumo)}) : null,
        it.testar ? el('div', {class:'testar'}, [
          el('a', {class:'lbtn pri', href:safeUrl(it.testar.url), text:L({pt:'Testar agora →', es:'Probar ahora →'})}),
          it.testar.dica ? el('span', {text:L(it.testar.dica)}) : null
        ]) : null,
        it.videos ? el('div', {class:'acts'}, [linkVideos(it.videos, root)]) : null
      ]);
    }));
  }

  // ---------- página da área ----------
  MM.area = function(def){ MM._area = def; };
  MM.itensDe = function(def){
    var itens = (def.itens || []).slice();
    if (typeof def.gerar === 'function') itens = itens.concat(def.gerar(window.CATALOGO || {items:[]}) || []);
    return itens;
  };

  MM.renderArea = function(def, mount, root){
    var itens = MM.itensDe(def);
    var filtros = def.filtros || [];
    var estado = {q:'', sel:{}};
    var reg = (MM.REGISTRO || []).filter(function(r){ return r.id === def.id; })[0] || {};
    function valores(it, campo){ var v = it[campo]; if (v == null) return []; return (Array.isArray(v) ? v : [v]).map(L).filter(Boolean); }

    function cabecalho(){
      var setores = (reg.setores || []).map(function(s){ var x = (MM.SETORES||[]).filter(function(y){ return y.id === s; })[0]; return x ? x[lang()] : s; });
      var h = el('div', {class:'wrap phead'}, [
        el('div', {class:'eyebrow', text:setores.join(' · ')}),
        el('h1', {text:L(def.titulo || reg.titulo)}),
        el('p', {class:'lead', text:L(def.descricao || reg.descricao)})
      ]);
      if (def.botoes && def.botoes.length) h.appendChild(el('div', {class:'acts', style:'margin-top:22px'}, linkBtns(def.botoes)));
      if (def.destaques && def.destaques.length) h.appendChild(el('div', {class:'destaques'}, def.destaques.map(function(d){
        return el('div', {class:'destaque'}, [el('b', {text:L(d.valor)}), el('span', {text:L(d.rotulo)}), d.status ? el('div', null, [statusBadge(d.status)]) : null]);
      })));
      return h;
    }

    var lista = el('div'), contagem = el('div', {class:'rcount'}), chipsWrap = el('div', {class:'tools'});
    function filtrados(){
      var toks = norm(estado.q).split(/\s+/).filter(function(t){ return t.length > 1; });
      return itens.filter(function(it){
        for (var c in estado.sel){ if (estado.sel[c] && valores(it, c).indexOf(estado.sel[c]) < 0) return false; }
        if (!toks.length) return true;
        var txt = norm([L(it.titulo), L(it.resumo), L(it.texto), L(it.categoria)].concat((it.tags||[]).map(L), (it.campos||[]).map(function(c){ return L(c.valor); })).join(' '));
        return toks.every(function(t){ return txt.indexOf(t) >= 0; });
      });
    }
    function desenharChips(){
      chipsWrap.querySelectorAll('.fgroup').forEach(function(g){ g.remove(); });
      filtros.forEach(function(f){
        var cont = {}, ordem = [];
        itens.forEach(function(it){ valores(it, f.campo).forEach(function(v){ if (!(v in cont)){ cont[v] = 0; ordem.push(v); } cont[v]++; }); });
        if (ordem.length < 2) return;
        if (f.ordem === 'alfa') ordem.sort(function(a,b){ return a.localeCompare(b); });
        var g = el('div', {class:'fgroup'}, [el('span', {class:'flabel', text:L(f.rotulo)})]);
        var mk = function(v, txt, n){ return el('button', {class:'fchip', type:'button', 'aria-pressed':String((estado.sel[f.campo]||null) === v),
          onclick:function(){ estado.sel[f.campo] = (estado.sel[f.campo] === v) ? null : v; desenharChips(); desenharLista(); }}, [txt, n != null ? el('span', {class:'n', text:String(n)}) : null]); };
        g.appendChild(mk(null, U('todos')));
        ordem.forEach(function(v){ g.appendChild(mk(v, v, cont[v])); });
        chipsWrap.appendChild(g);
      });
    }
    function desenharLista(){
      var fs = filtrados();
      contagem.textContent = fs.length + ' ' + (fs.length === 1 ? U('item') : U('itens'));
      lista.textContent = '';
      if (!fs.length){ lista.appendChild(el('div', {class:'empty', text:itens.length ? U('nada') : U('vazio')})); return; }
      var lay = def.layout || 'cards';
      lista.appendChild(lay === 'faq' ? desenharFaq(def, fs, root) : lay === 'glossario' ? desenharGlossario(def, fs) : lay === 'mural' ? desenharMural(def, fs, root) : desenharCards(def, fs, root));
    }

    function tudo(){
      mount.textContent = '';
      document.title = L(def.titulo || reg.titulo) + ' · Mundo Marketing';
      mount.appendChild(cabecalho());
      var main = el('main', {class:'wrap'});
      if (def.aviso) main.appendChild(el('p', {class:'note', text:L(def.aviso)}));
      var busca = el('input', {type:'search', id:'q-area', autocomplete:'off', placeholder:U('buscar')});
      busca.value = estado.q;
      busca.addEventListener('input', function(){ estado.q = busca.value; desenharLista(); });
      chipsWrap.textContent = '';
      chipsWrap.appendChild(el('label', {class:'searchbox', for:'q-area'}, [busca]));
      desenharChips();
      chipsWrap.appendChild(contagem);
      main.appendChild(el('section', {style:'display:flex;flex-direction:column;gap:18px'}, [chipsWrap, lista]));
      mount.appendChild(main);
      desenharLista();
    }
    tudo();
    document.addEventListener('mm:lang', function(){ var open = dlg && dlg.open; tudo(); if (open) dlg.close(); });
    // abre direto um item vindo da busca (#id)
    var alvo = decodeURIComponent((location.hash || '').slice(1));
    if (alvo){
      var it = itens.filter(function(x){ return x.id === alvo; })[0];
      if (it && ['faq','glossario','mural'].indexOf(def.layout) < 0) abrirDetalhe(def, it, root);
      else { var n = document.getElementById(alvo); if (n){ if (n.tagName === 'DETAILS') n.open = true; n.scrollIntoView(); } }
    }
  };

  // carrega scripts em sequência (funciona também abrindo o arquivo direto no computador)
  MM.carregar = function(srcs, cb){
    var i = 0;
    (function prox(){
      if (i >= srcs.length) return cb();
      // arquivos de dados/ são pequenos: pede a versão nova a cada 10 minutos para não ficar preso no cache do navegador
      var src = srcs[i++]; if (/(^|\/)dados\//.test(src)) src += (src.indexOf('?') < 0 ? '?' : '&') + 'v=' + Math.floor(Date.now() / 6e5);
      var s = document.createElement('script'); s.src = src;
      s.onload = prox; s.onerror = prox;
      document.head.appendChild(s);
    })();
  };
})();
