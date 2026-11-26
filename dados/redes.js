/* Redes sociais oficiais — um cartão por marca, com Instagram, TikTok, Facebook, YouTube e site.
   Para preencher: cole o link completo entre as aspas (ex.: 'https://www.instagram.com/unicpo/'). Link vazio aparece como "a preencher". */
var REDES = [
  {id:'unicpo',  marca:'UniCPO',          logo:'../assets/marca/logos/previa-capa-unicpo.jpg',
   instagram:'', tiktok:'', facebook:'', youtube:'', site:'https://unicpo.com.br'},
  {id:'clinica', marca:'Clínica UniCPO',  logo:'../assets/marca/logos/previa-capa-clinica.jpg',
   instagram:'', tiktok:'', facebook:'', youtube:'', site:''},
  {id:'fainter', marca:'FAINTER',         logo:'../assets/marca/logos/previa-capa-fainter.jpg',
   instagram:'', tiktok:'', facebook:'', youtube:'', site:''},
  {id:'mpa',     marca:'MPA',             logo:'',
   instagram:'', tiktok:'', facebook:'', youtube:'', site:''}
];
MM.area({
  id:'redes', layout:'kit',
  gerar: function(){
    var REDE = [['instagram','Instagram'],['tiktok','TikTok'],['facebook','Facebook'],['youtube','YouTube'],['site',{pt:'Site', es:'Sitio web'}]];
    return REDES.map(function(r){
      var links = REDE.filter(function(x){ return r[x[0]]; }).map(function(x){ return {rotulo:x[1], url:r[x[0]]}; });
      var faltam = REDE.filter(function(x){ return !r[x[0]] && x[0] !== 'site'; }).map(function(x){ return x[1]; });
      return {id:r.id, titulo:r.marca, imagem:r.logo || null, categoria:{pt:'Marca', es:'Marca'},
        resumo: links.length ? {pt:links.length + (links.length > 1 ? ' links' : ' link'), es:links.length + (links.length > 1 ? ' enlaces' : ' enlace')} : {pt:'Links a preencher', es:'Enlaces por completar'},
        texto: faltam.length ? {pt:'A preencher: ' + faltam.join(', ') + '.', es:'Por completar: ' + faltam.join(', ') + '.'} : null,
        status: faltam.length ? 'preencher' : null,
        links: links};
    });
  }
});
