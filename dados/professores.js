/* Perfil dos professores.
   Coordenadores: copiados do Gravações Técnicas em 25/11/2026 (nome, foto e cursos que coordenam).
   Os demais aparecem com frequência na Videoteca.
   chave = parte do nome usada para achar os vídeos da pessoa na Videoteca.
   Bio e especialidade ainda precisam ser preenchidas. */
var PROFESSORES = [
{
"id": "andreia",
"nome": "Dra. Andreia Pavani",
"foto": true,
"coord": true,
"cursos": [
"Dipl. Alargamiento de Corona Estético y Funcional",
"Dipl. Master en Cirugías Plásticas Periodontales y Periimplantarias",
"Esp. Periodoncia"
],
"chave": "andreia"
},
{
"id": "augusto",
"nome": "Dr. Augusto Rodrigues",
"foto": true,
"coord": true,
"cursos": [
"Dipl. AOF Step One",
"Dipl. AOF Step Two",
"Esp. AOF"
],
"chave": "augusto rodrigues"
},
{
"id": "claudia",
"nome": "Dra. Claudia Pinheiro",
"foto": true,
"coord": true,
"cursos": [
"Dipl. DDE Endo",
"Esp. Endodoncia"
],
"chave": "claudia pinheiro"
},
{
"id": "eric",
"nome": "Dr. Eric Tinoco",
"foto": true,
"coord": true,
"cursos": [
"Dipl. Cirugía Virtual Guiada",
"Dipl. Implantes para Iniciantes",
"Dipl. Master Implante",
"Dipl. Prótesis sobre Implante",
"Dipl. Tercer Molar",
"Esp. Implante"
],
"chave": "eric tinoco"
},
{
"id": "fabricio",
"nome": "Dr. Fabricio Valarelli",
"foto": true,
"coord": true,
"cursos": [
"Dipl. Alineadores Orto",
"Dipl. Avanzado en Alineadores Ortodóncicos",
"Dipl. Biomecánica Ortodóncica",
"Dipl. Mini Implantes",
"Dipl. Ortodoncia Preventiva",
"Esp. Ortodoncia"
],
"chave": "valarelli"
},
{
"id": "henrique",
"nome": "Dr. Henrique Quevedo",
"foto": true,
"coord": true,
"cursos": [],
"chave": "quevedo"
},
{
"id": "john",
"nome": "Dr. John Alexis",
"foto": true,
"coord": true,
"cursos": [
"Dipl. Carillas de Resina",
"Esp. Dentística"
],
"chave": "john alexis"
},
{
"id": "juan",
"nome": "Dr. Juan Carlos Castañeda",
"foto": true,
"coord": true,
"cursos": [
"Esp. Dentística"
],
"chave": "juan carlos"
},
{
"id": "gustavo",
"nome": "Dr. Luis Gustavo Tramontin",
"foto": false,
"coord": true,
"cursos": [
"Dipl. Blefaroplastia y Lifting de Cejas"
],
"chave": "tramontin"
},
{
"id": "mariel",
"nome": "Dra. Mariel Ruivo Biancardi",
"foto": false,
"coord": true,
"cursos": [],
"chave": "mariel"
},
{
"id": "patrick",
"nome": "Dr. Patrick Alves",
"foto": true,
"coord": true,
"cursos": [
"Esp. Implante"
],
"chave": "patrick"
},
{
"id": "suedam",
"nome": "Dr. Valdey Suedam",
"foto": true,
"coord": true,
"cursos": [
"Dipl. Excelencia en Laminados Cerámicos",
"Dipl. Prótesis Metal Free"
],
"chave": "suedam"
},
{
"id": "vanessa",
"nome": "Dra. Vanessa Dainezi",
"foto": true,
"coord": true,
"cursos": [
"Dipl. Odontopediatría",
"Esp. Odontopediatría"
],
"chave": "dainezi"
},
{
"id": "vinicius",
"nome": "Dr. Vinicius Porto",
"foto": true,
"coord": true,
"cursos": [
"Esp. Rehabilitación Oral"
],
"chave": "vinicius"
},
{
"id": "thiago",
"nome": "Dr. Thiago Tinoco",
"foto": false,
"coord": false,
"cursos": [],
"chave": "thiago tinoco"
},
{
"id": "renzo",
"nome": "Prof. Dr. Renzo Iwasaki",
"foto": false,
"coord": false,
"cursos": [],
"chave": "iwasaki"
},
{
"id": "ludmila",
"nome": "Profª Dra. Ludmila Lima",
"foto": false,
"coord": false,
"cursos": [],
"chave": "ludmila"
},
{
"id": "marcelo",
"nome": "Prof. Dr. Marcelo Valerio",
"foto": false,
"coord": false,
"cursos": [],
"chave": "marcelo valerio"
},
{
"id": "tabata",
"nome": "Dra. Tábata Ribas",
"foto": false,
"coord": false,
"cursos": [],
"chave": "tabata"
}
];
MM.area({
  id:'professores', layout:'perfis',
  filtros:[{campo:'categoria', rotulo:{pt:'Papel', es:'Rol'}}],
  gerar: function(CAT){
    var norm = MM.norm;
    return PROFESSORES.map(function(p){
      var n = (CAT.items || []).filter(function(v){ return norm((v.p || '') + ' ' + (v.qa || '')).indexOf(p.chave) >= 0; });
      var cursosVid = {};
      n.forEach(function(v){ if (v.c) cursosVid[v.c] = 1; });
      return {
        id: p.id, titulo: p.nome,
        foto: p.foto ? '../assets/fotos/professores/' + p.id + '.jpg' : null,
        categoria: p.coord ? {pt:'Coordenador(a)', es:'Coordinador(a)'} : {pt:'Professor(a)', es:'Profesor(a)'},
        resumo: p.cursos.length ? p.cursos.slice(0,2).join(' · ') + (p.cursos.length > 2 ? ' +' + (p.cursos.length - 2) : '') : null,
        tags: n.length ? [{pt: n.length + ' vídeos', es: n.length + ' videos'}] : [],
        status: 'preencher',
        campos: [
          {rotulo:{pt:'Coordena', es:'Coordina'}, valor: p.cursos.join(', ')},
          {rotulo:{pt:'Aparece em vídeos de', es:'Aparece en videos de'}, valor: Object.keys(cursosVid).slice(0,8).join(', ')},
          {rotulo:{pt:'Especialidade', es:'Especialidad'}, valor:{pt:'a preencher', es:'por completar'}},
          {rotulo:{pt:'Mini-bio', es:'Mini biografía'}, valor:{pt:'a preencher', es:'por completar'}}
        ],
        videos: n.length ? {q: p.chave, rotulo:{pt:'Ver os ' + n.length + ' vídeos', es:'Ver los ' + n.length + ' videos'}} : null
      };
    });
  }
});
