/* Guia do visitante — para a Recepção, o CS e o Comercial mandarem a quem vem à UniCPO.
   Mistura links fixos (Mapa, Tour 3D) com vídeos da Videoteca (guia prático, Manual de Sobrevivência). */
var VIS = {
  chegar:{pt:'Como chegar', es:'Cómo llegar'},
  ficar:{pt:'Onde ficar e comer', es:'Dónde alojarse y comer'},
  conhecer:{pt:'Conhecer a UniCPO', es:'Conocer UniCPO'},
  viver:{pt:'Vida em Bauru', es:'Vida en Bauru'}
};
MM.area({
  id:'visitante', layout:'cards',
  filtros:[{campo:'categoria', rotulo:{pt:'Assunto', es:'Tema'}}],
  itens:[
    {id:'mapa', categoria:VIS.ficar, titulo:{pt:'Mapa UniCPO', es:'Mapa UniCPO'},
     resumo:{pt:'Tudo a pé da UniCPO: hospedagem, restaurantes, farmácias, câmbio e mais, com notas dos alunos.', es:'Todo a pie de UniCPO: alojamiento, restaurantes, farmacias, cambio y más, con notas de los alumnos.'},
     texto:{pt:'- Filtrar por categoria: tocar em "Quitar todos" e escolher só o que procura\n- Ver a distância: os círculos marcam 5 e 10 minutos a pé\n- Em cada lugar: rota a pé, Street View, Instagram e, nas hospedagens, WhatsApp com mensagem pronta\n\nDica para o aluno: no celular, usar "Adicionar à tela inicial" para o mapa ficar como um aplicativo.', es:'- Filtrar por categoría: tocar "Quitar todos" y elegir solo lo que busca\n- Ver la distancia: los círculos marcan 5 y 10 minutos a pie\n- En cada lugar: ruta a pie, Street View, Instagram y, en los alojamientos, WhatsApp con mensaje listo\n\nConsejo para el alumno: en el celular, usar "Agregar a la pantalla de inicio" para que el mapa quede como una app.'},
     links:[{rotulo:{pt:'Abrir o mapa', es:'Abrir el mapa'}, url:'https://unicpobauru.github.io/mapa-unicpo/'},{rotulo:{pt:'Apresentação "Todo cerca de UniCPO"', es:'Presentación "Todo cerca de UniCPO"'}, url:'https://claude.ai/artifact/648ewoCD7FaZyCHrjrSJo2'}]},
    {id:'tour-3d', categoria:VIS.conhecer, titulo:{pt:'Tour 3D da clínica', es:'Tour 3D de la clínica'},
     resumo:{pt:'Passeio virtual em 360° pelas clínicas. Bom para mandar antes da visita.', es:'Recorrido virtual en 360° por las clínicas. Bueno para enviar antes de la visita.'},
     links:[{rotulo:{pt:'Abrir o tour', es:'Abrir el tour'}, url:'https://tour.panoee.net/tourclinicaunicpo'}]},
    {id:'endereco', categoria:VIS.chegar, status:'preencher', titulo:{pt:'Endereço e contatos da recepção', es:'Dirección y contactos de la recepción'},
     resumo:{pt:'Endereço completo, horário de funcionamento e telefone da recepção.', es:'Dirección completa, horario de atención y teléfono de la recepción.'}},
    {id:'aeroporto-rodoviaria', categoria:VIS.chegar, status:'preencher', titulo:{pt:'Do aeroporto ou da rodoviária até a UniCPO', es:'Del aeropuerto o la terminal hasta UniCPO'},
     resumo:{pt:'Como chegar a Bauru e da chegada até a faculdade.', es:'Cómo llegar a Bauru y desde la llegada hasta la facultad.'}},
    {id:'pdf-visitante', categoria:VIS.chegar, status:'preencher', titulo:{pt:'PDF do guia do visitante', es:'PDF de la guía del visitante'},
     resumo:{pt:'Versão para imprimir ou mandar por WhatsApp, com tudo desta página.', es:'Versión para imprimir o enviar por WhatsApp, con todo lo de esta página.'}}
  ],
  gerar: function(CAT){
    return (CAT.items || []).filter(function(v){ return /Guia prático|Manual de Sobreviv|Tour pela|Tour virtual|Adaptação ao Brasil/i.test(v.s || ''); }).map(function(v){
      var cat = /Guia prático/i.test(v.s) ? VIS.chegar : /Tour/i.test(v.s) ? VIS.conhecer : VIS.viver;
      return {id:'video-' + v.v, titulo:v.no, categoria:cat, resumo:v.de, tags:[{pt:'Vídeo', es:'Video'}],
        videos:{q:'"' + v.v + '"', rotulo:{pt:'Abrir na Videoteca', es:'Abrir en la Videoteca'}}};
    });
  }
});
