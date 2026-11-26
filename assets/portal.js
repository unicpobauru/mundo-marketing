/* Mundo Marketing · UniCPO — barra do portal, rodapé e troca de idioma (PT/ES)
   Como traduzir um texto em qualquer página:
   - Texto curto: escreva em português e coloque a versão em espanhol em data-es.
       <h2 data-es="Todas las áreas">Todas as áreas</h2>
   - Placeholder de campo: data-es-ph="...".
   - Bloco grande (vários parágrafos): dois blocos, um com data-lang="pt" e outro com data-lang="es".
*/
(function(){
  var body = document.body;
  var ROOT = body.getAttribute('data-root') || './';
  var PAGE = body.getAttribute('data-page') || '';

  // links com index.html para funcionar também abrindo os arquivos direto no computador
  var NAV = [
    {id:'inicio',    href:'index.html',           pt:'Início',             es:'Inicio'},
    {id:'videoteca', href:'videoteca/index.html', pt:'Videoteca',          es:'Videoteca'},
    {id:'manual',    href:'manual/index.html',    pt:'Manual do Criativo', es:'Manual del Creativo'},
    {id:'busca',     href:'busca/index.html',     pt:'Busca',              es:'Búsqueda'}
  ];

  function getLang(){
    try{ var l = localStorage.getItem('mm_lang'); if(l==='es'||l==='pt') return l; }catch(e){}
    return 'pt';
  }
  function setLang(l){ try{ localStorage.setItem('mm_lang', l); }catch(e){} apply(l); }

  // barra superior
  var bar = document.createElement('header');
  bar.className = 'pbar';
  var nav = NAV.map(function(n){
    return '<a href="'+ROOT+n.href+'"'+(n.id===PAGE?' aria-current="page"':'')+' data-es="'+n.es+'">'+n.pt+'</a>';
  }).join('');
  bar.innerHTML =
    '<div class="wrap">'+
      '<a class="plogo" href="'+ROOT+'index.html">Mundo Marketing<small>UniCPO</small></a>'+
      '<button class="menu-btn" type="button" aria-expanded="false" data-es="Menú">Menu</button>'+
      '<nav class="pnav" aria-label="Portal">'+nav+'</nav>'+
      '<div class="lang" role="group" aria-label="Idioma"><button type="button" data-l="pt">PT</button><button type="button" data-l="es">ES</button></div>'+
    '</div>';
  body.insertBefore(bar, body.firstChild);
  bar.querySelector('.menu-btn').addEventListener('click', function(){
    var open = bar.classList.toggle('open'); this.setAttribute('aria-expanded', open);
  });
  bar.querySelectorAll('[data-l]').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.getAttribute('data-l')); }); });

  // rodapé
  if(!body.hasAttribute('data-nofooter')){
    var f = document.createElement('footer');
    f.className = 'pfoot';
    f.innerHTML = '<div class="wrap"><span data-es="Mundo Marketing · portal interno del equipo de marketing de UniCPO. Uso interno, no compartir fuera de la empresa.">Mundo Marketing · portal interno da equipe de marketing da UniCPO. Uso interno, não compartilhe fora da empresa.</span></div>';
    body.appendChild(f);
  }

  function apply(l){
    document.documentElement.lang = l==='es' ? 'es' : 'pt-BR';
    document.querySelectorAll('[data-es]').forEach(function(el){
      if(!el.hasAttribute('data-pt')) el.setAttribute('data-pt', el.textContent);
      el.textContent = l==='es' ? el.getAttribute('data-es') : el.getAttribute('data-pt');
    });
    document.querySelectorAll('[data-es-ph]').forEach(function(el){
      if(!el.hasAttribute('data-pt-ph')) el.setAttribute('data-pt-ph', el.getAttribute('placeholder')||'');
      el.setAttribute('placeholder', l==='es' ? el.getAttribute('data-es-ph') : el.getAttribute('data-pt-ph'));
    });
    document.querySelectorAll('[data-lang]').forEach(function(el){ el.hidden = el.getAttribute('data-lang') !== l; });
    bar.querySelectorAll('[data-l]').forEach(function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-l')===l); });
    window.MM_LANG = l;
    document.dispatchEvent(new CustomEvent('mm:lang', {detail:l}));
  }
  apply(getLang());

  // login (Supabase): carrega a configuração e a sessão em todas as páginas que usam esta barra
  (function(){
    function js(src, cb){ var s = document.createElement('script'); s.src = src; s.onload = cb; document.head.appendChild(s); }
    if (window.MM_CONFIG) js(ROOT + 'assets/auth.js'); else js(ROOT + 'assets/config.js', function(){ js(ROOT + 'assets/auth.js'); });
  })();
})();
