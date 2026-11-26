/* Mundo Marketing — sessão do usuário (Supabase Auth).
   - Mantém o login renovado e grava o token no cookie que o Cloudflare confere (functions/_middleware.js).
   - Mostra o nome da pessoa e o botão "Sair" na barra do portal.
   - No GitHub Pages ou abrindo os arquivos no computador, não faz nada (lá não existe login).
   Uso: MM.auth.pronto.then(function(sessao){ ... })  (sessao = null quando não há login) */
(function(){
  window.MM = window.MM || {};
  var C = window.MM_CONFIG || {};
  // biblioteca do Supabase guardada no próprio site (assets/vendor), na mesma pasta deste arquivo
  var AQUI = (document.currentScript && document.currentScript.src) || '';
  var SDK = AQUI ? AQUI.replace(/auth\.js(\?.*)?$/, 'vendor/supabase-js-2.45.4.js') : 'assets/vendor/supabase-js-2.45.4.js';
  var semLogin = location.protocol === 'file:' || /github\.io$/.test(location.hostname);

  function carregarSdk(){
    return new Promise(function(ok, erro){
      if (window.supabase && window.supabase.createClient) return ok();
      var s = document.createElement('script'); s.src = SDK; s.onload = ok; s.onerror = erro; document.head.appendChild(s);
    });
  }
  function gravarCookie(sessao){
    var base = C.cookie + '=';
    var seg = location.protocol === 'https:' ? '; Secure' : '';
    if (sessao && sessao.access_token){
      var idade = Math.max(60, (sessao.expires_at || 0) - Math.floor(Date.now() / 1000));
      document.cookie = base + sessao.access_token + '; Path=/; Max-Age=' + idade + '; SameSite=Lax' + seg;
    } else {
      document.cookie = base + '; Path=/; Max-Age=0; SameSite=Lax' + seg;
    }
  }

  var cliente = null;
  MM.auth = {
    ativo: !semLogin,
    cliente: function(){
      if (cliente) return Promise.resolve(cliente);
      return carregarSdk().then(function(){
        cliente = window.supabase.createClient(C.supabaseUrl, C.supabaseKey, {auth:{persistSession:true, autoRefreshToken:true, detectSessionInUrl:true}});
        cliente.auth.onAuthStateChange(function(_ev, sessao){ gravarCookie(sessao); });
        return cliente;
      });
    },
    sair: function(){
      return MM.auth.cliente().then(function(c){ return c.auth.signOut(); }).catch(function(){}).then(function(){
        gravarCookie(null); location.href = '/login/index.html';
      });
    },
    gravarCookie: gravarCookie
  };
  MM.auth.pronto = semLogin ? Promise.resolve(null) : MM.auth.cliente().then(function(c){
    return c.auth.getSession().then(function(r){ var s = r.data && r.data.session; gravarCookie(s); return s; });
  }).catch(function(){ return null; });

  // nome e botão "Sair" na barra do portal
  if (!semLogin) MM.auth.pronto.then(function(s){
    if (!s) return;
    var bar = document.querySelector('.pbar .wrap');
    if (!bar || bar.querySelector('.usr')) return;
    var u = s.user || {}, nome = (u.user_metadata && (u.user_metadata.nome || u.user_metadata.full_name)) || (u.email || '').split('@')[0];
    var es = window.MM_LANG === 'es';
    var box = document.createElement('div'); box.className = 'usr';
    var n = document.createElement('span'); n.className = 'usr-n'; n.textContent = nome; n.title = u.email || '';
    var b = document.createElement('button'); b.type = 'button'; b.className = 'usr-sair'; b.textContent = es ? 'Salir' : 'Sair';
    b.addEventListener('click', MM.auth.sair);
    box.appendChild(n); box.appendChild(b);
    var lang = bar.querySelector('.lang');
    if (lang) bar.insertBefore(box, lang); else bar.appendChild(box);
  });
})();
