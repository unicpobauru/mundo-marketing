/* Mural de novidades — o mais recente aparece primeiro (ordenado pela data).
   Para publicar uma novidade: acrescente um item com id, data (AAAA-MM-DD), título e resumo.
   Se a novidade estiver aqui no portal, acrescente testar:{url, dica} — vira o botão "Testar agora"
   com uma frase curta ao lado. Quem ainda não viu a novidade vê o selo NEW.
   Regra: toda função nova publicada no portal ganha um item aqui, com a data de publicação. */
MM.area({
  id:'mural', layout:'mural',
  filtros:[{campo:'categoria', rotulo:{pt:'Tipo', es:'Tipo'}}],
  itens:[
    {id:'login', data:'2026-11-26', categoria:{pt:'Portal',es:'Portal'},
     titulo:{pt:'Portal fechado com login e senha',es:'Portal cerrado con login y contraseña'},
     resumo:{pt:'O Mundo Marketing agora só abre para quem foi convidado. Cada pessoa entra com o próprio e-mail e senha, e o seu nome aparece no canto da barra.',es:'Mundo Marketing ahora solo abre para quien fue invitado. Cada persona entra con su e-mail y contraseña, y su nombre aparece en la barra.'}},
    {id:'academy', data:'2026-11-26', categoria:{pt:'Ferramenta',es:'Herramienta'},
     titulo:{pt:'Academy: plataforma de cursos em vídeo',es:'Academy: plataforma de cursos en video'},
     resumo:{pt:'Cursos gravados pelo time, com aulas, progresso e "continuar assistindo". Aba Marketing com 9 cursos e aba Comercial com o onboarding. As aulas entram conforme forem gravadas.',es:'Cursos grabados por el equipo, con clases, progreso y "seguir viendo". Pestaña Marketing con 9 cursos y pestaña Comercial con el onboarding. Las clases entran a medida que se graben.'},
     testar:{url:'../academy/index.html', dica:{pt:'Veja os cursos de cada aba.',es:'Mira los cursos de cada pestaña.'}}},
    {id:'kit-logos', data:'2026-11-26', categoria:{pt:'Marca',es:'Marca'},
     titulo:{pt:'Kit de marca completo: logos e PowerPoint',es:'Kit de marca completo: logos y PowerPoint'},
     resumo:{pt:'Logos do Grupo UniCPO, Faculdade, Clínica, FAINTER, Grupo | FAINTER e MPA em PNG e SVG, a base de PowerPoint do grupo, cores oficiais e fontes.',es:'Logos de Grupo UniCPO, Facultad, Clínica, FAINTER, Grupo | FAINTER y MPA en PNG y SVG, la base de PowerPoint del grupo, colores oficiales y tipografías.'},
     testar:{url:'../area/index.html?id=kit', dica:{pt:'"Baixar kit completo" leva tudo de uma vez.',es:'"Descargar kit completo" lleva todo de una vez.'}}},
    {id:'busca-por-print', data:'2026-11-25', categoria:{pt:'Ferramenta',es:'Herramienta'},
     titulo:{pt:'Videoteca: achar vídeo por print',es:'Videoteca: encontrar video por captura'},
     resumo:{pt:'Cole um print e a Videoteca mostra os 10 vídeos mais parecidos. Nos testes, acertou o vídeo em 1º lugar em 97% dos prints diretos e do Instagram.',es:'Pega una captura y la Videoteca muestra los 10 videos más parecidos. En las pruebas, acertó el video en 1.er lugar en el 97% de las capturas directas y de Instagram.'},
     testar:{url:'../videoteca/index.html', dica:{pt:'Abra a Videoteca, clique em Achar por print e cole um print.',es:'Abre la Videoteca, haz clic en Encontrar por captura y pega una captura.'}}},
    {id:'novo-visual', data:'2026-11-25', categoria:{pt:'Portal',es:'Portal'},
     titulo:{pt:'Novo visual do Mundo Marketing',es:'Nuevo diseño de Mundo Marketing'},
     resumo:{pt:'Fundo azul-noite, busca no centro e áreas em blocos, inspirado no Raycast.',es:'Fondo azul noche, búsqueda en el centro y áreas en bloques, inspirado en Raycast.'},
     testar:{url:'../index.html', dica:{pt:'Veja a página inicial com o novo visual.',es:'Mira la página de inicio con el nuevo diseño.'}}},
    {id:'mundo-marketing', data:'2026-11-25', categoria:{pt:'Portal',es:'Portal'},
     titulo:{pt:'Nasce o Mundo Marketing',es:'Nace Mundo Marketing'},
     resumo:{pt:'Portal com tudo que o marketing já fez, em português e espanhol: Videoteca, Manual do Criativo, áreas e busca geral.',es:'Portal con todo lo que el marketing ya hizo, en portugués y español: Videoteca, Manual del Creativo, áreas y búsqueda general.'},
     testar:{url:'../index.html', dica:{pt:'Comece pela página inicial e explore as áreas.',es:'Empieza por la página de inicio y explora las áreas.'}}}
  ]
});
