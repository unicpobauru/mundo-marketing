/* Guia e agenda de gravação.
   A agenda em si continua no Gravações Técnicas (claude.ai), que é onde as datas são atualizadas.
   Aqui ficam o guia de como gravar e o funcionamento da agenda. */
MM.area({
  id:'gravacao', layout:'cards',
  filtros:[{campo:'categoria', rotulo:{pt:'Assunto', es:'Tema'}}],
  itens:[
    {id:'agenda', categoria:'Agenda', titulo:{pt:'Agenda de gravações técnicas',es:'Agenda de grabaciones técnicas'},
     resumo:{pt:'O calendário vivo das gravações, com cursos, coordenadores, datas e status.',es:'El calendario vivo de las grabaciones, con cursos, coordinadores, fechas y estado.'},
     texto:{pt:'A agenda fica no Gravações Técnicas, no claude.ai, porque é lá que a equipe atualiza as datas. Para abrir, é preciso ter acesso à página.',es:'La agenda está en Grabaciones Técnicas, en claude.ai, porque es allí donde el equipo actualiza las fechas. Para abrirla, hay que tener acceso a la página.'},
     links:[{rotulo:{pt:'Abrir a agenda',es:'Abrir la agenda'}, url:'https://claude.ai/artifact/T2zdts5yp8QScVqTSh9qNi'}]},
    {id:'prazo', categoria:'Agenda', titulo:{pt:'Prazo: gravar até 3 meses antes da turma',es:'Plazo: grabar hasta 3 meses antes del grupo'},
     texto:{pt:'A 1ª postagem do vídeo técnico sai 3 meses antes do início da turma, e a 2ª no mês do início. Por isso a gravação precisa acontecer antes desse prazo.\n\nNa agenda, o cartão fica vermelho quando faltam 21 dias ou menos, amarelo até 45 dias e verde com mais tempo.',es:'La 1.ª publicación del video técnico sale 3 meses antes del inicio del grupo, y la 2.ª en el mes del inicio. Por eso la grabación debe hacerse antes de ese plazo.\n\nEn la agenda, la tarjeta se pone roja cuando faltan 21 días o menos, amarilla hasta 45 días y verde con más tiempo.'}},
    {id:'status', categoria:'Agenda', titulo:{pt:'As etapas de cada gravação',es:'Las etapas de cada grabación'},
     passos:[
       {pt:'A contatar: ainda não falamos com o coordenador.',es:'Por contactar: todavía no hablamos con el coordinador.'},
       {pt:'Contatado: já falamos, falta definir a data.',es:'Contactado: ya hablamos, falta definir la fecha.'},
       {pt:'Agendado: tem data e horário.',es:'Agendado: tiene fecha y horario.'},
       {pt:'Gravado: falta editar.',es:'Grabado: falta editar.'},
       {pt:'Editado e pronto: pronto para a 1ª e a 2ª postagem.',es:'Editado y listo: listo para la 1.ª y la 2.ª publicación.'}
     ]},
    {id:'formato', categoria:{pt:'Como gravar',es:'Cómo grabar'}, titulo:{pt:'Formato: professor falando para a câmera',es:'Formato: profesor hablando a la cámara'},
     texto:{pt:'Talking head com o professor, sem cenas elaboradas. Gravar com dois ângulos (frontal e 45°) para alternar na edição.\n\nO professor fala como colega, faz perguntas diretas e pode improvisar em cima do texto. Leitura robótica não funciona.',es:'Talking head con el profesor, sin escenas elaboradas. Grabar con dos ángulos (frontal y 45°) para alternarlos en la edición.\n\nEl profesor habla como colega, hace preguntas directas y puede improvisar sobre el texto. La lectura robótica no funciona.'},
     links:[{rotulo:{pt:'Ver o Manual do Criativo',es:'Ver el Manual del Creativo'}, url:'../manual/index.html#principios'}]},
    {id:'duracao', categoria:{pt:'Como gravar',es:'Cómo grabar'}, titulo:{pt:'Duração e roteiro',es:'Duración y guion'},
     texto:{pt:'Criativos de 30 a 45 segundos, ou seja, de 75 a 110 palavras faladas. Para o YouTube, de 25 a 30 segundos.\n\nGancho nos 3 primeiros segundos, prova concreta no meio e uma única CTA no fim.',es:'Creativos de 30 a 45 segundos, es decir, de 75 a 110 palabras habladas. Para YouTube, de 25 a 30 segundos.\n\nGancho en los 3 primeros segundos, prueba concreta en el medio y una sola CTA al final.'}},
    {id:'cuidados', categoria:{pt:'Como gravar',es:'Cómo grabar'}, titulo:{pt:'O que não pode aparecer',es:'Lo que no puede aparecer'},
     texto:{pt:'- Incisão, sangue ou antes/depois nos anúncios (procedimento explícito só no YouTube)\n- Foco em "defeito" físico\n- Promessa de faturamento\n- Dizer que qualquer dentista pode fazer procedimento fora do seu escopo legal',es:'- Incisión, sangre o antes/después en los anuncios (procedimiento explícito solo en YouTube)\n- Enfoque en un "defecto" físico\n- Promesa de facturación\n- Decir que cualquier odontólogo puede hacer un procedimiento fuera de su alcance legal'}},
    {id:'checklist-tecnico', categoria:{pt:'Como gravar',es:'Cómo grabar'}, titulo:{pt:'Checklist técnico do dia da gravação',es:'Checklist técnico del día de la grabación'}, status:'confirmar',
     passos:[
       {pt:'Luz de frente para o professor, sem janela atrás.',es:'Luz de frente al profesor, sin ventana detrás.'},
       {pt:'Microfone de lapela testado antes de começar.',es:'Micrófono de solapa probado antes de empezar.'},
       {pt:'Celular ou câmera na vertical, na altura dos olhos.',es:'Celular o cámara en vertical, a la altura de los ojos.'},
       {pt:'Fundo limpo, de preferência com a marca ou a clínica.',es:'Fondo limpio, preferentemente con la marca o la clínica.'},
       {pt:'Gravar cada fala duas vezes: frontal e a 45°.',es:'Grabar cada parte dos veces: frontal y a 45°.'},
       {pt:'Gravar pelo menos um gancho alternativo para teste A/B.',es:'Grabar al menos un gancho alternativo para test A/B.'}
     ], resumo:{pt:'Sugestão do portal. A equipe pode ajustar ao jeito que já grava.',es:'Sugerencia del portal. El equipo puede ajustarla a su forma de grabar.'}}
  ]
});
