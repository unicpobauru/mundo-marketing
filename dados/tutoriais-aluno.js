/* Tutoriais em vídeo para o aluno — montados a partir dos subtipos da Videoteca.
   Para incluir um novo tipo de vídeo, acrescente uma linha em GRUPOS (texto que aparece no subtipo → grupo). */
var GRUPOS_ALUNO = [
  [/Tutorial para alunos/i,                 {pt:'Matrícula e viagem', es:'Inscripción y viaje'}],
  [/Integração CS/i,                        {pt:'Documentos no Brasil', es:'Documentos en Brasil'}],
  [/Guia prático/i,                         {pt:'Chegada à UniCPO', es:'Llegada a UniCPO'}],
  [/Manual de Sobreviv/i,                   {pt:'Vida em Bauru', es:'Vida en Bauru'}],
  [/FAQ do curso|Tira-dúvidas/i,            {pt:'Dúvidas sobre o curso', es:'Dudas sobre el curso'}],
  [/Boas-vindas a alunos|Boas-vindas da equipe CS|Comunicado a alunos|Orientação acadêmica/i, {pt:'Comunicados e orientação', es:'Avisos y orientación'}],
  [/Tour virtual 3D|Tour pela/i,            {pt:'Conhecer a estrutura', es:'Conocer la estructura'}]
];
MM.area({
  id:'tutoriais-aluno', layout:'cards',
  aviso:{pt:'Todos os vídeos abrem na Videoteca, onde dá para baixar na versão de 16 MB e mandar pelo WhatsApp.', es:'Todos los videos se abren en la Videoteca, donde se pueden descargar en la versión de 16 MB y enviar por WhatsApp.'},
  filtros:[{campo:'categoria', rotulo:{pt:'Assunto', es:'Tema'}}, {campo:'idioma', rotulo:{pt:'Idioma', es:'Idioma'}}],
  itens:[
    {id:'mapa-unicpo', titulo:{pt:'Mapa UniCPO: tudo perto da faculdade', es:'Mapa UniCPO: todo cerca de la facultad'}, categoria:{pt:'Vida em Bauru', es:'Vida en Bauru'},
     resumo:{pt:'Hospedagem, restaurantes, farmácias e mais, a pé da UniCPO, com notas dos alunos.', es:'Alojamiento, restaurantes, farmacias y más, a pie de UniCPO, con notas de los alumnos.'},
     links:[{rotulo:{pt:'Abrir o mapa', es:'Abrir el mapa'}, url:'https://unicpobauru.github.io/mapa-unicpo/'}]}
  ],
  gerar: function(CAT){
    var out = [];
    (CAT.items || []).forEach(function(v){
      var s = v.s || '', g = null;
      for (var i = 0; i < GRUPOS_ALUNO.length; i++){ if (GRUPOS_ALUNO[i][0].test(s)){ g = GRUPOS_ALUNO[i][1]; break; } }
      if (!g) return;
      var mm = Math.floor(v.du / 60), ss = String(v.du % 60).padStart(2, '0');
      out.push({
        id:'video-' + v.v, titulo:v.no, categoria:g, resumo:v.de,
        idioma: v.id === 'espanhol' ? {pt:'Espanhol', es:'Español'} : v.id === 'português' ? {pt:'Português', es:'Portugués'} : {pt:'Outro', es:'Otro'},
        tags:[mm + ':' + ss, s],
        campos:[{rotulo:{pt:'Subtipo', es:'Subtipo'}, valor:s},{rotulo:{pt:'Duração', es:'Duración'}, valor:mm + ':' + ss},{rotulo:{pt:'Data', es:'Fecha'}, valor:v.d}],
        videos:{q:'"' + v.v + '"', rotulo:{pt:'Abrir na Videoteca', es:'Abrir en la Videoteca'}}
      });
    });
    return out;
  }
});
