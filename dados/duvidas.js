/* Central de dúvidas do aluno — perguntas frequentes, agrupadas por momento.
   Respostas marcadas como "preencher" ou "confirmar" precisam ser revisadas pelo CS.
   As respostas já escritas vêm do Manual do Criativo e da apresentação do Mapa UniCPO.
   videos.q = busca na Videoteca com vídeos de apoio para mandar ao aluno. */
var MOM = {
  antes:{pt:'Antes de se inscrever', es:'Antes de inscribirse'},
  inscricao:{pt:'Inscrição e viagem', es:'Inscripción y viaje'},
  chegada:{pt:'Chegada e documentos', es:'Llegada y documentos'},
  durante:{pt:'Durante o curso', es:'Durante el curso'}
};
var PREENCHER = {pt:'Resposta a preencher pelo CS.', es:'Respuesta por completar por el CS.'};
MM.area({
  id:'duvidas', layout:'faq',
  filtros:[{campo:'categoria', rotulo:{pt:'Momento', es:'Momento'}}],
  itens:[
    {id:'idioma-aulas', categoria:MOM.antes, titulo:{pt:'Em que idioma são as aulas?', es:'¿En qué idioma son las clases?'},
     texto:{pt:'As aulas são em espanhol.', es:'Las clases son en español.'}, videos:{q:'Língua', rotulo:{pt:'Depoimentos sobre o idioma', es:'Testimonios sobre el idioma'}}},
    {id:'titulo-pais', categoria:MOM.antes, status:'confirmar', titulo:{pt:'O título vale no meu país?', es:'¿El título es válido en mi país?'},
     texto:{pt:'Depende do país. A condição de cada país precisa ser confirmada com a coordenação antes de responder ao aluno.', es:'Depende del país. La condición de cada país debe confirmarse con la coordinación antes de responder al alumno.'},
     videos:{q:'Título validado', rotulo:{pt:'Depoimentos sobre título', es:'Testimonios sobre el título'}}},
    {id:'mec', categoria:MOM.antes, titulo:{pt:'A UniCPO é reconhecida pelo MEC?', es:'¿UniCPO está reconocida por el MEC?'},
     texto:{pt:'Sim. A faculdade tem nota máxima no Ministério da Educação do Brasil (MEC).', es:'Sí. La facultad tiene nota máxima en el Ministerio de Educación de Brasil (MEC).'},
     videos:{q:'nota MEC', rotulo:{pt:'Vídeos sobre a nota no MEC', es:'Videos sobre la nota en el MEC'}}},
    {id:'pratica-pacientes', categoria:MOM.antes, titulo:{pt:'Os cursos têm prática com pacientes?', es:'¿Los cursos tienen práctica con pacientes?'},
     texto:{pt:'Sim. A prática é supervisionada, com pacientes reais, e não só teoria.', es:'Sí. La práctica es supervisada, con pacientes reales, y no solo teoría.'},
     videos:{q:'Pacientes', rotulo:{pt:'Depoimentos sobre pacientes', es:'Testimonios sobre pacientes'}}},
    {id:'tempo-brasil', categoria:MOM.antes, status:'confirmar', titulo:{pt:'Preciso ficar muito tempo no Brasil?', es:'¿Necesito quedarme mucho tiempo en Brasil?'},
     texto:{pt:'Os cursos são modulares, com módulos que cabem na agenda de quem atende. A duração de cada módulo depende do curso e deve ser confirmada.', es:'Los cursos son modulares, con módulos que caben en la agenda de quien atiende. La duración de cada módulo depende del curso y debe confirmarse.'},
     videos:{q:'Flexibilidade', rotulo:{pt:'Depoimentos sobre ir e voltar', es:'Testimonios sobre ir y volver'}}},
    {id:'valores', categoria:MOM.antes, status:'preencher', titulo:{pt:'Quanto custa e como posso pagar?', es:'¿Cuánto cuesta y cómo puedo pagar?'}, texto:PREENCHER,
     videos:{q:'Investimento compensado', rotulo:{pt:'Depoimentos sobre o investimento', es:'Testimonios sobre la inversión'}}},
    {id:'matricula', categoria:MOM.inscricao, status:'preencher', titulo:{pt:'Como faço a matrícula?', es:'¿Cómo hago la inscripción?'}, texto:PREENCHER,
     videos:{q:'Tutorial matrícula', rotulo:{pt:'Vídeo tutorial de matrícula', es:'Video tutorial de inscripción'}}},
    {id:'passagem', categoria:MOM.inscricao, status:'preencher', titulo:{pt:'O que preciso saber para comprar a passagem?', es:'¿Qué necesito saber para comprar el pasaje?'}, texto:PREENCHER,
     videos:{q:'Tutorial passagem', rotulo:{pt:'Vídeo tutorial de passagem', es:'Video tutorial del pasaje'}}},
    {id:'visto', categoria:MOM.inscricao, status:'preencher', titulo:{pt:'Preciso de visto?', es:'¿Necesito visa?'}, texto:PREENCHER,
     videos:{q:'Visto', rotulo:{pt:'Vídeos sobre visto e documentação', es:'Videos sobre visa y documentación'}}},
    {id:'como-chegar', categoria:MOM.chegada, titulo:{pt:'Como chego à UniCPO?', es:'¿Cómo llego a UniCPO?'},
     texto:{pt:'Mande o vídeo de guia prático e o Mapa UniCPO. No mapa, cada lugar tem o botão "Cómo llegar", que abre a rota a pé no Google Maps.', es:'Envía el video de guía práctica y el Mapa UniCPO. En el mapa, cada lugar tiene el botón "Cómo llegar", que abre la ruta a pie en Google Maps.'},
     links:[{rotulo:{pt:'Mapa UniCPO', es:'Mapa UniCPO'}, url:'https://unicpobauru.github.io/mapa-unicpo/'}], videos:{q:'Guia prático', rotulo:{pt:'Vídeos de como chegar', es:'Videos de cómo llegar'}}},
    {id:'hospedagem', categoria:MOM.chegada, titulo:{pt:'Onde posso me hospedar?', es:'¿Dónde puedo alojarme?'},
     texto:{pt:'No Mapa UniCPO, os pinos com foto são hospedagens. A ficha mostra o quarto, e o botão de WhatsApp já abre com a mensagem "Soy estudiante de UniCPO".', es:'En el Mapa UniCPO, los pines con foto son alojamientos. La ficha muestra la habitación, y el botón de WhatsApp ya se abre con el mensaje "Soy estudiante de UniCPO".'},
     links:[{rotulo:{pt:'Mapa UniCPO', es:'Mapa UniCPO'}, url:'https://unicpobauru.github.io/mapa-unicpo/'}]},
    {id:'cpf', categoria:MOM.chegada, status:'preencher', titulo:{pt:'Preciso de CPF no Brasil?', es:'¿Necesito CPF en Brasil?'}, texto:PREENCHER,
     videos:{q:'CPF', rotulo:{pt:'Vídeo do CS sobre CPF e registro', es:'Video del CS sobre CPF y registro'}}},
    {id:'itamaraty', categoria:MOM.chegada, status:'preencher', titulo:{pt:'O que é o formulário do Itamaraty?', es:'¿Qué es el formulario de Itamaraty?'}, texto:PREENCHER,
     videos:{q:'Itamaraty', rotulo:{pt:'Vídeo do CS sobre o formulário', es:'Video del CS sobre el formulario'}}},
    {id:'perto-unicpo', categoria:MOM.durante, titulo:{pt:'Onde como, compro remédio ou troco dinheiro perto da UniCPO?', es:'¿Dónde como, compro remedios o cambio dinero cerca de UniCPO?'},
     texto:{pt:'O Mapa UniCPO tem 14 categorias: hospedagem, farmácias, restaurantes, fast food, bares, supermercados, cafés, parques, saúde, câmbio, shoppings, academias e rodoviária. Os círculos marcam 5 e 10 minutos a pé, e a lista ☰ ordena do mais perto ao mais longe.', es:'El Mapa UniCPO tiene 14 categorías: alojamiento, farmacias, restaurantes, fast food, bares, supermercados, cafés, parques, salud, cambio de dinero, shoppings, gimnasios y rodoviaria. Los círculos marcan 5 y 10 minutos a pie, y la lista ☰ ordena del más cerca al más lejos.'},
     links:[{rotulo:{pt:'Mapa UniCPO', es:'Mapa UniCPO'}, url:'https://unicpobauru.github.io/mapa-unicpo/'}], videos:{q:'Manual de Sobrevivência', rotulo:{pt:'Série Manual de Sobrevivência', es:'Serie Manual de Supervivencia'}}},
    {id:'avaliar-lugar', categoria:MOM.durante, titulo:{pt:'Como avalio um lugar no mapa?', es:'¿Cómo califico un lugar en el mapa?'},
     texto:{pt:'- Tocar em "Calificar" no quadro "Alumnos UniCPO"\n- Dar as estrelas e dizer se foi entendido falando espanhol\n- Marcar "Soy alumno(a) de UniCPO" e enviar\n\nLugares com mais de 4,8 e pelo menos 10 votos ganham a estrela de Favorito UniCPO.', es:'- Tocar "Calificar" en el cuadro "Alumnos UniCPO"\n- Poner las estrellas y decir si lo entendieron hablando español\n- Marcar "Soy alumno(a) de UniCPO" y enviar\n\nLos lugares con más de 4,8 y al menos 10 votos ganan la estrella de Favorito UniCPO.'}},
    {id:'lugar-fechou', categoria:MOM.durante, titulo:{pt:'Um lugar do mapa mudou ou fechou. O que faço?', es:'Un lugar del mapa cambió o cerró. ¿Qué hago?'},
     texto:{pt:'No fim da ficha do lugar, tocar em "¿Algo está mal en este lugar?", escolher o problema e confirmar que verificou. O aviso é privado e a equipe corrige o mapa. Com três avisos de alunos diferentes, o lugar aparece como "Posiblemente cerrado".', es:'Al final de la ficha del lugar, tocar "¿Algo está mal en este lugar?", elegir el problema y confirmar que lo verificaste. El aviso es privado y el equipo corrige el mapa. Con tres avisos de alumnos distintos, el lugar aparece como "Posiblemente cerrado".'}},
    {id:'plataforma', categoria:MOM.durante, status:'preencher', titulo:{pt:'Como acesso a plataforma de aulas?', es:'¿Cómo accedo a la plataforma de clases?'}, texto:PREENCHER},
    {id:'certificado', categoria:MOM.durante, status:'preencher', titulo:{pt:'Como recebo o certificado?', es:'¿Cómo recibo el certificado?'}, texto:PREENCHER}
  ]
});
