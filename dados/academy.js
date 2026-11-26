/* Academy — plataforma de cursos em vídeo do Mundo Marketing.
   Duas abas: Marketing e Comercial. Cada curso tem módulos e cada módulo tem aulas.

   COMO COLOCAR UMA AULA
   1. Suba o vídeo no Google Drive e deixe "qualquer pessoa com o link pode ver".
   2. Copie o id do link: drive.google.com/file/d/ESTE_PEDAÇO/view
   3. Acrescente na lista "aulas" do módulo:
        {id:'boas-vindas', titulo:'Boas-vindas ao marketing', duracao:'5 min', drive:'ESTE_PEDAÇO',
         descricao:'O que você vai aprender.', materiais:[{rotulo:'Slides', url:'https://...'}]}
      Também aceita YouTube: youtube:'ID_DO_VIDEO' (o que vem depois de v= no link).
   Curso sem aulas aparece como "Em gravação".
*/
var ACADEMY = {
  abas: [
    {id:'marketing', titulo:{pt:'Marketing', es:'Marketing'}, descricao:{pt:'Os cursos do time de marketing.', es:'Los cursos del equipo de marketing.'}},
    {id:'comercial', titulo:{pt:'Comercial', es:'Comercial'}, descricao:{pt:'Onboarding do time comercial.', es:'Onboarding del equipo comercial.'}}
  ],
  cursos: [
    {id:'integracao', aba:'marketing', cor:'#34AED6', icone:'integracao',
     titulo:{pt:'Integração', es:'Integración'},
     descricao:{pt:'Primeiros passos de quem chega no marketing: a empresa, a equipe, as rotinas e onde fica cada coisa.', es:'Primeros pasos de quien llega al marketing: la empresa, el equipo, las rutinas y dónde está cada cosa.'},
     modulos:[]},
    {id:'midias', aba:'marketing', cor:'#FF7AB6', icone:'midias',
     titulo:{pt:'Mídias', es:'Medios'},
     descricao:{pt:'Redes sociais, criativos, gravação e edição de conteúdo.', es:'Redes sociales, creativos, grabación y edición de contenido.'},
     modulos:[]},
    {id:'software', aba:'marketing', cor:'#A78BFA', icone:'software',
     titulo:{pt:'Software', es:'Software'},
     descricao:{pt:'As ferramentas que usamos no dia a dia e como tirar o máximo de cada uma.', es:'Las herramientas que usamos en el día a día y cómo sacar el máximo de cada una.'},
     modulos:[]},
    {id:'dados', aba:'marketing', cor:'#36C2B4', icone:'dados',
     titulo:{pt:'Dados', es:'Datos'},
     descricao:{pt:'Métricas, relatórios e como tomar decisão com números.', es:'Métricas, informes y cómo decidir con números.'},
     modulos:[]},
    {id:'vendas', aba:'marketing', cor:'#F4BE4F', icone:'vendas',
     titulo:{pt:'Vendas', es:'Ventas'},
     descricao:{pt:'Como o marketing gera e entrega leads e como apoia o comercial.', es:'Cómo el marketing genera y entrega leads y cómo apoya al comercial.'},
     modulos:[]},
    {id:'atendimento', aba:'marketing', cor:'#8ACBBD', icone:'atendimento',
     titulo:{pt:'Atendimento', es:'Atención'},
     descricao:{pt:'Atendimento ao lead e ao aluno, do primeiro contato em diante.', es:'Atención al lead y al alumno, desde el primer contacto.'},
     modulos:[]},
    {id:'processos', aba:'marketing', cor:'#66D3FF', icone:'processos',
     titulo:{pt:'Processos', es:'Procesos'},
     descricao:{pt:'Fluxos, prazos e responsabilidades de cada entrega.', es:'Flujos, plazos y responsabilidades de cada entrega.'},
     modulos:[]},
    {id:'lideranca', aba:'marketing', cor:'#F59E5B', icone:'lideranca',
     titulo:{pt:'Liderança', es:'Liderazgo'},
     descricao:{pt:'Gestão de pessoas, feedback e organização do time.', es:'Gestión de personas, feedback y organización del equipo.'},
     modulos:[]},
    {id:'ia', aba:'marketing', cor:'#FF6B6B', icone:'ia',
     titulo:{pt:'Inteligência Artificial', es:'Inteligencia Artificial'},
     descricao:{pt:'Como usar IA para criar, analisar e ganhar tempo.', es:'Cómo usar IA para crear, analizar y ganar tiempo.'},
     modulos:[]},

    {id:'onboarding-comercial', aba:'comercial', cor:'#34AED6', icone:'vendas',
     titulo:{pt:'Onboarding Comercial', es:'Onboarding Comercial'},
     descricao:{pt:'Tudo que o time comercial precisa saber para começar: cursos, público, argumentos e ferramentas. Material em preparação.', es:'Todo lo que el equipo comercial necesita saber para empezar: cursos, público, argumentos y herramientas. Material en preparación.'},
     modulos:[]}
  ]
};
