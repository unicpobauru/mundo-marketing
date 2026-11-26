/* Mundo Marketing — configuração do Supabase (login e banco de dados).
   A URL e a chave "publishable" são públicas por natureza: o que protege os dados são as regras (RLS) no Supabase
   e a verificação de login no Cloudflare (src/worker.js). Nunca coloque aqui a chave secreta (sb_secret_...). */
window.MM_CONFIG = {
  supabaseUrl: 'https://vdamtcvkuzdokwvthwqv.supabase.co',
  supabaseKey: 'sb_publishable_28JZI_aEE5pKdzF3sq7vvQ_j33GnsXv',
  cookie: 'mm_at'   // cookie com o token de acesso, lido pelo Cloudflare para liberar as páginas e arquivos
};
