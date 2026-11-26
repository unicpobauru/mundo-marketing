/* Redes sociais oficiais — um cartão por marca, com Instagram, TikTok, Facebook, YouTube e site.
   Para preencher: cole o link completo entre as aspas (ex.: 'https://www.instagram.com/unicpo/'). Link vazio aparece como "a preencher". */
var REDES = [
  {id:'unicpo',  marca:'UniCPO',          logo:'../assets/marca/logos/previa-capa-unicpo.jpg',
   instagram:'https://www.instagram.com/unicpo.oficial/', tiktok:'https://www.tiktok.com/@unicpo.oficial', facebook:'', youtube:'https://www.youtube.com/@UniCPOBauru', site:'https://unicpo.com.br'},
  {id:'clinica', marca:'Clínica UniCPO',  logo:'../assets/marca/logos/previa-capa-clinica.jpg',
   instagram:'https://www.instagram.com/unicpoclinicabauru/', tiktok:'', facebook:'', youtube:'', site:''},
  {id:'fainter', marca:'FAINTER',         logo:'../assets/marca/logos/previa-capa-fainter.jpg',
   instagram:'https://www.instagram.com/fainter.oficial/', tiktok:'', facebook:'', youtube:'', site:''},
  {id:'mpa',     marca:'MPA · Medical Performance Academy', logo:'../assets/marca/logos/previa-capa-mpa.jpg',
   instagram:'https://www.instagram.com/medicalacademy.oficial/', tiktok:'', facebook:'', youtube:'', site:'https://unicpobauru.github.io/mpa-medicina/'}
];
MM.area({
  id:'redes', layout:'kit',
  gerar: function(){
    var REDE = [['instagram','Instagram'],['tiktok','TikTok'],['facebook','Facebook'],['youtube','YouTube'],['site',{pt:'Site', es:'Sitio web'}]];
    return REDES.map(function(r){
      var links = REDE.filter(function(x){ return r[x[0]]; }).map(function(x){ return {rotulo:x[1], url:r[x[0]]}; });
      var faltam = REDE.filter(function(x){ return !r[x[0]] && x[0] !== 'site'; }).map(function(x){ return x[1]; });
      return {id:r.id, titulo:r.marca, imagem:r.logo || null, categoria:{pt:'Marca', es:'Marca'},
        resumo: r.instagram ? '@' + r.instagram.replace(/\/$/, '').split('/').pop() : links.length ? {pt:links.length + (links.length > 1 ? ' links' : ' link'), es:links.length + (links.length > 1 ? ' enlaces' : ' enlace')} : {pt:'Links a preencher', es:'Enlaces por completar'},
        texto: faltam.length ? {pt:'Sem link cadastrado: ' + faltam.map(MM.L).join(', ') + '.', es:'Sin enlace registrado: ' + faltam.map(MM.L).join(', ') + '.'} : null,
        links: links};
    });
  }
});
