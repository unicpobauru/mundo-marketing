/* Mundo Marketing — porteiro do site no Cloudflare Pages.
   Roda antes de entregar QUALQUER arquivo (páginas, PDFs, fotos, dados). Sem login válido:
   - páginas: redireciona para /login/
   - outros arquivos: responde 401
   O login é do Supabase: o navegador guarda o token no cookie "mm_at" (assets/auth.js) e aqui conferimos a assinatura.
   Não precisa de nenhuma chave secreta: projetos novos do Supabase assinam com chave pública (JWKS).
   Se o projeto usar a assinatura antiga (HS256), confere perguntando ao próprio Supabase quem é o usuário. */

const SUPABASE_URL = 'https://vdamtcvkuzdokwvthwqv.supabase.co';
const SUPABASE_KEY = 'sb_publishable_28JZI_aEE5pKdzF3sq7vvQ_j33GnsXv';
const COOKIE = 'mm_at';
// liberado sem login: só o necessário para a tela de entrada funcionar
const PUBLICO = [/^\/login(\/|\/index\.html)?$/, /^\/assets\/(config|auth)\.js$/, /^\/assets\/vendor\/(supabase-js-2\.45\.4|591\.supabase)\.js$/, /^\/assets\/portal\.css$/, /^\/favicon\.(ico|svg|png)$/, /^\/robots\.txt$/];

let jwks = null, jwksEm = 0;
const validados = new Map();   // token -> expiração (cache curto, para o caso HS256)

function b64url(s){ s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; const b = atob(s); const u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
function lerCookie(req){ const c = req.headers.get('Cookie') || ''; const m = c.match(new RegExp('(?:^|;\\s*)' + COOKIE + '=([^;]+)')); return m ? m[1] : null; }

async function chaves(url){
  if (!jwks || Date.now() - jwksEm > 10 * 60 * 1000){
    const r = await fetch(url + '/auth/v1/.well-known/jwks.json', {cf:{cacheTtl:600}});
    jwks = r.ok ? (await r.json()).keys || [] : []; jwksEm = Date.now();
  }
  return jwks;
}

async function valido(token, env){
  const url = (env && env.SUPABASE_URL) || SUPABASE_URL, key = (env && env.SUPABASE_KEY) || SUPABASE_KEY;
  const partes = token.split('.'); if (partes.length !== 3) return false;
  let cab, dados;
  try { cab = JSON.parse(new TextDecoder().decode(b64url(partes[0]))); dados = JSON.parse(new TextDecoder().decode(b64url(partes[1]))); } catch(e){ return false; }
  const agora = Math.floor(Date.now() / 1000);
  if (!dados.exp || dados.exp < agora) return false;
  if (dados.iss && dados.iss !== url + '/auth/v1') return false;
  if (dados.role && dados.role !== 'authenticated') return false;

  if (cab.alg === 'ES256' || cab.alg === 'RS256'){
    const jwk = (await chaves(url)).find(k => k.kid === cab.kid);
    if (!jwk) return false;
    const alg = cab.alg === 'ES256' ? {name:'ECDSA', namedCurve:'P-256', hash:'SHA-256'} : {name:'RSASSA-PKCS1-v1_5', hash:'SHA-256'};
    const chave = await crypto.subtle.importKey('jwk', jwk, alg, false, ['verify']);
    return crypto.subtle.verify(alg, chave, b64url(partes[2]), new TextEncoder().encode(partes[0] + '.' + partes[1]));
  }
  // assinatura antiga (HS256): pergunta ao Supabase, com cache até o token vencer
  const em = validados.get(token); if (em && em > agora) return true;
  const r = await fetch(url + '/auth/v1/user', {headers:{apikey:key, Authorization:'Bearer ' + token}});
  if (!r.ok) return false;
  if (validados.size > 500) validados.clear();
  validados.set(token, dados.exp); return true;
}

export async function onRequest(context){
  const {request, env, next} = context;
  const u = new URL(request.url);
  if (PUBLICO.some(re => re.test(u.pathname))) return next();
  const token = lerCookie(request);
  let ok = false;
  if (token){ try { ok = await valido(token, env); } catch(e){ ok = false; } }
  if (ok){
    const resp = await next();
    const r = new Response(resp.body, resp);
    r.headers.set('Cache-Control', 'private, max-age=300');   // nada de conteúdo interno em cache compartilhado
    r.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return r;
  }
  const pagina = request.method === 'GET' && (/text\/html/.test(request.headers.get('Accept') || '') || u.pathname.endsWith('/') || u.pathname.endsWith('.html'));
  if (pagina) return Response.redirect(u.origin + '/login/index.html?next=' + encodeURIComponent(u.pathname + u.search + u.hash), 302);
  return new Response('Login necessário', {status:401, headers:{'Cache-Control':'no-store'}});
}
