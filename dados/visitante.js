/* Ferramentas — Mapa UniCPO e Tour 3D da clínica, para mandar a quem vem à UniCPO. */
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
     links:[{rotulo:{pt:'Abrir o mapa', es:'Abrir el mapa'}, url:'https://unicpobauru.github.io/mapa-unicpo/'}]},
    {id:'tour-3d', categoria:VIS.conhecer, titulo:{pt:'Tour 3D da clínica', es:'Tour 3D de la clínica'},
     resumo:{pt:'Passeio virtual em 360° pelas clínicas. Bom para mandar antes da visita.', es:'Recorrido virtual en 360° por las clínicas. Bueno para enviar antes de la visita.'},
     links:[{rotulo:{pt:'Abrir o tour', es:'Abrir el tour'}, url:'https://tour.panoee.net/tourclinicaunicpo'}]}
  ]
});
