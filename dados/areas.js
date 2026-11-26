/* Mundo Marketing · REGISTRO DE ÁREAS
   ------------------------------------------------------------------
   Este é o índice do portal. A página inicial e a Busca leem esta lista.

   Para criar uma área nova:
   1. Copie um arquivo de dados/ (por exemplo dados/glossario.js), troque o id e os itens.
   2. Acrescente uma linha aqui com o mesmo id.
   Pronto: ela aparece no início e na busca, e abre em area/index.html?id=<id>.

   Campos:
   - id         nome do arquivo em dados/ (sem .js)
   - titulo     { pt, es }
   - descricao  { pt, es }
   - catalogo   true quando a área usa os vídeos da Videoteca
   - extras     outros arquivos de dados/ que a área precisa (carregados antes dela)
   - href       só para páginas próprias (Videoteca, Manual); as demais usam o motor de coleções
*/
window.MM = window.MM || {};
MM.REGISTRO = [
  {id:'videoteca', href:'videoteca/index.html',
   titulo:{pt:'Videoteca', es:'Videoteca'},
   descricao:{pt:'Mais de 900 vídeos com filtros por curso, país, professor e tipo de depoimento.', es:'Más de 900 videos con filtros por curso, país, profesor y tipo de testimonio.'}},
  {id:'manual', href:'manual/index.html',
   titulo:{pt:'Manual do Criativo', es:'Manual del Creativo'},
   descricao:{pt:'Princípios, tipos de criativo, temas, CTAs e checklist antes de gravar.', es:'Principios, tipos de creativo, temas, CTAs y checklist antes de grabar.'}},
  {id:'kit',
   titulo:{pt:'Kit de marca', es:'Kit de marca'},
   descricao:{pt:'Cores oficiais, fontes, logos e a base de PowerPoint da UniCPO e da FAINTER, com download.', es:'Colores oficiales, tipografías, logos y la base de PowerPoint de UniCPO y FAINTER, con descarga.'}},
  {id:'tutoriais', href:'academy/index.html',
   titulo:{pt:'Academy', es:'Academy'},
   descricao:{pt:'Plataforma de cursos em vídeo: Marketing e onboarding do Comercial.', es:'Plataforma de cursos en video: Marketing y onboarding del Comercial.'}},
  {id:'fotos',
   titulo:{pt:'Banco de fotos', es:'Banco de fotos'},
   descricao:{pt:'78 fotos dos prédios (sede, Homero, auxiliar e auditório) para baixar. Funcionários em breve.', es:'78 fotos de los edificios (sede, Homero, auxiliar y auditorio) para descargar. Funcionarios próximamente.'}},
  {id:'mural',
   titulo:{pt:'Mural de novidades', es:'Mural de novedades'},
   descricao:{pt:'O que o marketing entregou, em ordem de data.', es:'Lo que el marketing entregó, por fecha.'}},
  {id:'redes',
   titulo:{pt:'Redes sociais', es:'Redes sociales'},
   descricao:{pt:'Instagram, TikTok, Facebook e YouTube da UniCPO, Clínica, FAINTER e MPA (Medical Performance Academy).', es:'Instagram, TikTok, Facebook y YouTube de UniCPO, Clínica, FAINTER y MPA.'}},
  {id:'glossario',
   titulo:{pt:'Glossário', es:'Glosario'},
   descricao:{pt:'Termos de marketing explicados para toda a empresa.', es:'Términos de marketing explicados para toda la empresa.'}},
  {id:'cursos', href:'cursos/index.html', busca:true, catalogo:true, extras:['cursos-material'],
   titulo:{pt:'Materiais por curso', es:'Materiales por curso'},
   descricao:{pt:'Cada curso com turmas, cronograma de módulos, valores, apresentações em PDF e vídeos.', es:'Cada curso con grupos, cronograma de módulos, valores, presentaciones en PDF y videos.'}},
  {id:'professores', catalogo:true,
   titulo:{pt:'Perfil dos professores', es:'Perfil de los profesores'},
   descricao:{pt:'Coordenadores e professores, seus cursos e vídeos.', es:'Coordinadores y profesores, sus cursos y videos.'}},
  {id:'visitante',
   titulo:{pt:'Ferramentas', es:'Herramientas'},
   descricao:{pt:'Mapa UniCPO e Tour 3D da clínica, para mandar a quem vem à UniCPO.', es:'Mapa UniCPO y Tour 3D de la clínica, para enviar a quien viene a UniCPO.'}}
];
MM.hrefArea = function(r, root){ return (root||'') + (r.href || ('area/index.html?id=' + r.id)); };
