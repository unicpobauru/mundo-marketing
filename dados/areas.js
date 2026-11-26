/* Mundo Marketing · REGISTRO DE ÁREAS
   ------------------------------------------------------------------
   Este é o índice do portal. A página inicial, "Para o seu setor" e a Busca leem esta lista.

   Para criar uma área nova:
   1. Copie um arquivo de dados/ (por exemplo dados/glossario.js), troque o id e os itens.
   2. Acrescente uma linha aqui com o mesmo id.
   Pronto: ela aparece no início, nos setores e na busca, e abre em area/index.html?id=<id>.

   Campos:
   - id         nome do arquivo em dados/ (sem .js)
   - titulo     { pt, es }
   - descricao  { pt, es }
   - setores    em quais setores a área aparece: marketing, comercial, cs, academico, recepcao
   - grupo      seção da página inicial: base | comercial | aluno | academico | recepcao
   - catalogo   true quando a área usa os vídeos da Videoteca
   - extras     outros arquivos de dados/ que a área precisa (carregados antes dela)
   - href       só para páginas próprias (Videoteca, Manual); as demais usam o motor de coleções
*/
window.MM = window.MM || {};
MM.SETORES = [
  {id:'marketing', pt:'Marketing',  es:'Marketing'},
  {id:'comercial', pt:'Comercial',  es:'Comercial'},
  {id:'cs',        pt:'CS',         es:'CS'},
  {id:'academico', pt:'Acadêmico',  es:'Académico'},
  {id:'recepcao',  pt:'Recepção',   es:'Recepción'}
];
MM.GRUPOS = [
  {id:'base',      pt:'Base do marketing',   es:'Base del marketing'},
  {id:'comercial', pt:'Para vender',         es:'Para vender'},
  {id:'recepcao',  pt:'Para receber',        es:'Para recibir'}
];
MM.REGISTRO = [
  {id:'videoteca', href:'videoteca/index.html', grupo:'base', setores:['marketing','comercial','cs','academico'],
   titulo:{pt:'Videoteca', es:'Videoteca'},
   descricao:{pt:'Mais de 900 vídeos com filtros por curso, país, professor e tipo de depoimento.', es:'Más de 900 videos con filtros por curso, país, profesor y tipo de testimonio.'}},
  {id:'manual', href:'manual/index.html', grupo:'base', setores:['marketing','academico'],
   titulo:{pt:'Manual do Criativo', es:'Manual del Creativo'},
   descricao:{pt:'Princípios, tipos de criativo, temas, CTAs e checklist antes de gravar.', es:'Principios, tipos de creativo, temas, CTAs y checklist antes de grabar.'}},
  {id:'kit', grupo:'base', setores:['marketing','comercial','cs','academico','recepcao'],
   titulo:{pt:'Kit de marca', es:'Kit de marca'},
   descricao:{pt:'Cores oficiais, fontes, logos e a base de PowerPoint da UniCPO e da FAINTER, com download.', es:'Colores oficiales, tipografías, logos y la base de PowerPoint de UniCPO y FAINTER, con descarga.'}},
  {id:'tutoriais', grupo:'base', setores:['marketing','comercial','cs','academico','recepcao'],
   titulo:{pt:'Academy', es:'Academy'},
   descricao:{pt:'Trilhas de aprendizado: Integração, Mídias, Software, Dados, Vendas, Atendimento, Processos, Liderança e IA.', es:'Rutas de aprendizaje: Integración, Medios, Software, Datos, Ventas, Atención, Procesos, Liderazgo e IA.'}},
  {id:'fotos', grupo:'base', setores:['marketing','comercial','academico'],
   titulo:{pt:'Banco de fotos', es:'Banco de fotos'},
   descricao:{pt:'Fotos do prédio e dos funcionários, com controle de autorização de imagem.', es:'Fotos del edificio y de los funcionarios, con control de autorización de imagen.'}},
  {id:'mural', grupo:'base', setores:['marketing','comercial','cs','academico','recepcao'],
   titulo:{pt:'Mural de novidades', es:'Mural de novedades'},
   descricao:{pt:'O que o marketing entregou, em ordem de data.', es:'Lo que el marketing entregó, por fecha.'}},
  {id:'glossario', grupo:'base', setores:['marketing','comercial','cs','academico','recepcao'],
   titulo:{pt:'Glossário', es:'Glosario'},
   descricao:{pt:'Termos de marketing explicados para todos os setores.', es:'Términos de marketing explicados para todos los sectores.'}},
  {id:'cursos', grupo:'comercial', setores:['comercial','cs','marketing'], catalogo:true, extras:['cursos-material'],
   titulo:{pt:'Materiais por curso', es:'Materiales por curso'},
   descricao:{pt:'Cada curso com turmas, cronograma de módulos, valores, apresentações em PDF e vídeos.', es:'Cada curso con grupos, cronograma de módulos, valores, presentaciones en PDF y videos.'}},
  {id:'professores', grupo:'comercial', setores:['academico','comercial','marketing'], catalogo:true,
   titulo:{pt:'Perfil dos professores', es:'Perfil de los profesores'},
   descricao:{pt:'Coordenadores e professores, seus cursos e vídeos.', es:'Coordinadores y profesores, sus cursos y videos.'}},
  {id:'visitante', grupo:'recepcao', setores:['recepcao','cs','comercial'], catalogo:true,
   titulo:{pt:'Ferramentas', es:'Herramientas'},
   descricao:{pt:'Mapa UniCPO, Tour 3D da clínica e vídeos para mandar a quem vem à UniCPO.', es:'Mapa UniCPO, Tour 3D de la clínica y videos para enviar a quien viene a UniCPO.'}}
];
MM.hrefArea = function(r, root){ return (root||'') + (r.href || ('area/index.html?id=' + r.id)); };
