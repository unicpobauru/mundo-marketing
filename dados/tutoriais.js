/* Academy — trilhas de aprendizado do marketing para todos os setores.
   Cada aula tem passos (lista numerada) e, se quiser, links e vídeo.
   Os 9 temas ficam em T (a ordem aqui é a ordem dos filtros). Para uma aula nova, copie um item e use categoria:T.<tema>.
   O id da área continua "tutoriais" para não quebrar links antigos. */
var T = {
  integracao:{pt:'Integração', es:'Integración'},
  midias:{pt:'Mídias', es:'Medios'},
  software:{pt:'Software', es:'Software'},
  dados:{pt:'Dados', es:'Datos'},
  vendas:{pt:'Vendas', es:'Ventas'},
  atendimento:{pt:'Atendimento', es:'Atención'},
  processos:{pt:'Processos', es:'Procesos'},
  lideranca:{pt:'Liderança', es:'Liderazgo'},
  ia:{pt:'Inteligência Artificial', es:'Inteligencia Artificial'}
};
var EM_BREVE = function(tema, pt, es){ return {id:'em-breve-' + tema, categoria:T[tema], status:'preencher',
  titulo:{pt:'Primeiras aulas de ' + T[tema].pt, es:'Primeras clases de ' + T[tema].es}, resumo:{pt:pt, es:es}}; };
MM.area({
  id:'tutoriais', layout:'cards',
  filtros:[{campo:'categoria', rotulo:{pt:'Tema', es:'Tema'}}],
  itens:[
    {id:'videoteca-buscar', categoria:T.software, titulo:{pt:'Encontrar um vídeo na Videoteca',es:'Encontrar un video en la Videoteca'},
     resumo:{pt:'Busca por palavra e filtros por curso, país e tipo.',es:'Búsqueda por palabra y filtros por curso, país y tipo.'},
     passos:[
       {pt:'Abra a Videoteca pelo menu do portal.',es:'Abre la Videoteca desde el menú del portal.'},
       {pt:'Digite na busca o que procura, por exemplo "medo Equador implantes". Pode misturar aluno, professor, país e tema.',es:'Escribe en la búsqueda lo que buscas, por ejemplo "miedo Ecuador implantes". Puedes mezclar alumno, profesor, país y tema.'},
       {pt:'Use os filtros da esquerda: Tipo, Categoria do depoimento, Duração, Curso, País.',es:'Usa los filtros de la izquierda: Tipo, Categoría del testimonio, Duración, Curso, País.'},
       {pt:'Clique na miniatura para ver a prévia e todos os dados do vídeo.',es:'Haz clic en la miniatura para ver la vista previa y todos los datos del video.'}
     ], links:[{rotulo:{pt:'Abrir a Videoteca',es:'Abrir la Videoteca'}, url:'../videoteca/index.html'}]},
    {id:'videoteca-whatsapp', categoria:T.vendas, titulo:{pt:'Baixar vídeo para mandar no WhatsApp',es:'Descargar un video para enviar por WhatsApp'},
     resumo:{pt:'A versão de 16 MB cabe no limite do WhatsApp.',es:'La versión de 16 MB cabe en el límite de WhatsApp.'},
     passos:[
       {pt:'No cartão do vídeo, clique em "Baixar 16 MB".',es:'En la tarjeta del video, haz clic en "Descargar 16 MB".'},
       {pt:'O Google Drive abre em outra aba e o download começa por lá.',es:'Google Drive se abre en otra pestaña y la descarga empieza allí.'},
       {pt:'Se o botão aparecer apagado ("em preparo"), use "Baixar" e escolha a versão mais leve no detalhe do vídeo.',es:'Si el botón aparece apagado ("en preparación"), usa "Descargar" y elige la versión más ligera en el detalle del video.'}
     ], texto:{pt:'Para baixar, você precisa estar logado no Google com uma conta que tenha acesso às pastas de vídeos.',es:'Para descargar, necesitas haber iniciado sesión en Google con una cuenta que tenga acceso a las carpetas de videos.'}},
    {id:'videoteca-carrinho', categoria:T.vendas, titulo:{pt:'Montar uma lista de vídeos para um lead',es:'Armar una lista de videos para un lead'},
     resumo:{pt:'O carrinho junta vários vídeos e copia a lista pronta.',es:'El carrito junta varios videos y copia la lista lista.'},
     passos:[
       {pt:'Em cada vídeo que quiser, clique em "+ Carrinho".',es:'En cada video que quieras, haz clic en "+ Carrito".'},
       {pt:'Clique em "Carrinho de vídeos" no topo.',es:'Haz clic en "Carrito de videos" arriba.'},
       {pt:'Escolha a versão: melhor qualidade, Full HD, mais leve ou 16 MB.',es:'Elige la versión: mejor calidad, Full HD, más ligera o 16 MB.'},
       {pt:'Use as setas para ordenar e clique em "Copiar lista para o cliente".',es:'Usa las flechas para ordenar y haz clic en "Copiar lista para el cliente".'},
       {pt:'Cole a lista no WhatsApp ou no e-mail do lead.',es:'Pega la lista en el WhatsApp o en el e-mail del lead.'}
     ]},
    {id:'videoteca-print', categoria:T.software, titulo:{pt:'Achar um vídeo a partir de um print',es:'Encontrar un video a partir de una captura'},
     resumo:{pt:'Suba um print e veja os 10 vídeos mais parecidos.',es:'Sube una captura y mira los 10 videos más parecidos.'},
     passos:[
       {pt:'Na Videoteca, clique em "Achar por print" ou simplesmente cole o print com Ctrl+V.',es:'En la Videoteca, haz clic en "Buscar por captura" o simplemente pega la captura con Ctrl+V.'},
       {pt:'Pode ser print do vídeo, do Instagram ou do WhatsApp, mesmo cortado.',es:'Puede ser captura del video, de Instagram o de WhatsApp, aunque esté recortada.'},
       {pt:'Veja os 10 mais parecidos. "Muito parecido" quase sempre é o vídeo certo.',es:'Mira los 10 más parecidos. "Muy parecido" casi siempre es el video correcto.'},
       {pt:'Clique em "Abrir" para ver o vídeo, baixar ou pegar a versão de 16 MB.',es:'Haz clic en "Abrir" para ver el video, descargarlo o tomar la versión de 16 MB.'}
     ], texto:{pt:'O print não sai do seu computador: a comparação acontece no próprio navegador. Funciona melhor quando a cena do print aparece nas miniaturas do vídeo.',es:'La captura no sale de tu computadora: la comparación ocurre en el propio navegador. Funciona mejor cuando la escena de la captura aparece en las miniaturas del video.'},
     links:[{rotulo:{pt:'Abrir a Videoteca',es:'Abrir la Videoteca'}, url:'../videoteca/index.html'}]},
    {id:'portal-idioma', categoria:T.integracao, titulo:{pt:'Trocar o idioma do portal',es:'Cambiar el idioma del portal'},
     resumo:{pt:'PT ou ES no canto superior direito.',es:'PT o ES en la esquina superior derecha.'},
     passos:[
       {pt:'Clique em PT ou ES no canto superior direito de qualquer página.',es:'Haz clic en PT o ES en la esquina superior derecha de cualquier página.'},
       {pt:'A escolha vale para todo o portal, inclusive a Videoteca, e fica guardada neste navegador.',es:'La elección vale para todo el portal, incluida la Videoteca, y queda guardada en este navegador.'}
     ]},
    {id:'portal-busca', categoria:T.integracao, titulo:{pt:'Achar qualquer coisa com a Busca',es:'Encontrar cualquier cosa con la Búsqueda'},
     passos:[
       {pt:'Clique em "Busca" no menu.',es:'Haz clic en "Búsqueda" en el menú.'},
       {pt:'Digite uma ou mais palavras. A busca olha todas as áreas do portal e os vídeos.',es:'Escribe una o más palabras. La búsqueda revisa todas las áreas del portal y los videos.'},
       {pt:'Clique no resultado para abrir direto no item.',es:'Haz clic en el resultado para abrirlo directamente.'}
     ]},
    {id:'gravacoes-cronograma', categoria:T.processos, titulo:{pt:'Subir o cronograma de cursos',es:'Subir el cronograma de cursos'},
     resumo:{pt:'O Gravações Técnicas lê a imagem do cronograma e lista cursos, turmas e datas.',es:'Grabaciones Técnicas lee la imagen del cronograma y lista cursos, grupos y fechas.'},
     passos:[
       {pt:'Abra o Gravações Técnicas e clique em "Subir cronograma".',es:'Abre Grabaciones Técnicas y haz clic en "Subir cronograma".'},
       {pt:'Arraste a imagem (PNG) do cronograma ou, na aba "Colar dados", cole uma linha por curso: Curso ; Coordenador ; dd/mm/aaaa.',es:'Arrastra la imagen (PNG) del cronograma o, en la pestaña "Pegar datos", pega una línea por curso: Curso ; Coordinador ; dd/mm/aaaa.'},
       {pt:'Confira as mudanças que aparecem (cursos novos, datas que mudaram) e clique em "Aplicar mudanças".',es:'Revisa los cambios que aparecen (cursos nuevos, fechas que cambiaron) y haz clic en "Aplicar cambios".'}
     ], links:[{rotulo:{pt:'Abrir no Claude',es:'Abrir en Claude'}, url:'https://claude.ai/artifact/T2zdts5yp8QScVqTSh9qNi'}]},
    {id:'gravacoes-agendar', categoria:T.processos, titulo:{pt:'Agendar uma gravação',es:'Agendar una grabación'},
     passos:[
       {pt:'Na lista "A gravar", veja os cursos por prazo ou por coordenador.',es:'En la lista "A grabar", mira los cursos por plazo o por coordinador.'},
       {pt:'Arraste o curso para o dia da gravação no calendário, ou clique no lápis e preencha a data.',es:'Arrastra el curso al día de la grabación en el calendario, o haz clic en el lápiz y completa la fecha.'},
       {pt:'Atualize o status conforme avança: A contatar, Contatado, Agendado, Gravado, Editado e pronto.',es:'Actualiza el estado a medida que avanza: Por contactar, Contactado, Agendado, Grabado, Editado y listo.'},
       {pt:'No papelzinho do cartão, o tráfego escreve os criativos que precisa para aquele curso.',es:'En el papelito de la tarjeta, el tráfico escribe los creativos que necesita para ese curso.'}
     ], links:[{rotulo:{pt:'Abrir no Claude',es:'Abrir en Claude'}, url:'https://claude.ai/artifact/T2zdts5yp8QScVqTSh9qNi'}]},
    {id:'manual-checklist', categoria:T.midias, titulo:{pt:'Revisar um roteiro antes de gravar',es:'Revisar un guion antes de grabar'},
     passos:[
       {pt:'Abra o Manual do Criativo e vá até "Checklist antes de gravar".',es:'Abre el Manual del Creativo y ve a "Checklist antes de grabar".'},
       {pt:'Marque cada item com o roteiro na mão. Os 9 itens precisam estar marcados.',es:'Marca cada ítem con el guion en la mano. Los 9 ítems deben estar marcados.'},
       {pt:'Conte as palavras: entre 75 e 110 para 30 a 45 segundos.',es:'Cuenta las palabras: entre 75 y 110 para 30 a 45 segundos.'}
     ], links:[{rotulo:{pt:'Abrir o checklist',es:'Abrir el checklist'}, url:'../manual/index.html#checklist'}]},
    {id:'portal-nova-area', categoria:T.software, titulo:{pt:'Colocar conteúdo novo no portal',es:'Agregar contenido nuevo al portal'},
     resumo:{pt:'Para quem cuida do portal.',es:'Para quien cuida del portal.'},
     passos:[
       {pt:'Cada área tem um arquivo na pasta dados/ (por exemplo dados/glossario.js).',es:'Cada área tiene un archivo en la carpeta dados/ (por ejemplo dados/glossario.js).'},
       {pt:'Para um item novo, copie um item existente no arquivo e troque os textos.',es:'Para un ítem nuevo, copia un ítem existente en el archivo y cambia los textos.'},
       {pt:'Para uma área nova, crie o arquivo e acrescente uma linha em dados/areas.js. Ela aparece sozinha no início, nos setores e na busca.',es:'Para un área nueva, crea el archivo y agrega una línea en dados/areas.js. Aparece sola en el inicio, en los sectores y en la búsqueda.'}
     ]},
    EM_BREVE('dados', 'Em breve: como ler os relatórios de campanha e os números de leads.', 'Próximamente: cómo leer los informes de campaña y los números de leads.'),
    EM_BREVE('atendimento', 'Em breve: boas práticas de atendimento ao lead e ao aluno.', 'Próximamente: buenas prácticas de atención al lead y al alumno.'),
    EM_BREVE('lideranca', 'Em breve: aulas para líderes de equipe.', 'Próximamente: clases para líderes de equipo.'),
    EM_BREVE('ia', 'Em breve: como usar inteligência artificial no dia a dia de cada setor.', 'Próximamente: cómo usar inteligencia artificial en el día a día de cada sector.')
  ].sort(function(a, b){ var o = Object.keys(T); return o.indexOf(Object.keys(T).filter(function(k){ return T[k] === a.categoria; })[0]) - o.indexOf(Object.keys(T).filter(function(k){ return T[k] === b.categoria; })[0]); })
});
