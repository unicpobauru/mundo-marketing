/* Kit de marca — cores, fontes, logos e modelos.
   As cores abaixo foram tiradas dos materiais recentes do marketing (Videoteca, Mapa UniCPO, apresentação para alunos).
   Estão como "a confirmar" até o marketing validar com o manual oficial da marca.
   Para colocar um arquivo (logo, template): salve em assets/marca/ e use links:[{rotulo, url:'../assets/marca/arquivo.png'}]. */
MM.area({
  id:'kit', layout:'kit',
  aviso:{pt:'As cores e fontes abaixo são as usadas nos materiais recentes. Confirmar com o manual oficial da marca antes de usar em peças novas.', es:'Los colores y tipografías de abajo son los usados en los materiales recientes. Confirmar con el manual oficial de la marca antes de usarlos en piezas nuevas.'},
  filtros:[{campo:'categoria', rotulo:{pt:'Tipo', es:'Tipo'}}],
  itens:[
    {id:'azul-marinho', categoria:{pt:'Cores',es:'Colores'}, titulo:{pt:'Azul-marinho UniCPO',es:'Azul marino UniCPO'}, cor:'#0B2A4A', status:'confirmar',
     resumo:{pt:'Fundo principal de capas, cabeçalhos e telas escuras.',es:'Fondo principal de portadas, encabezados y pantallas oscuras.'}},
    {id:'azul-medio', categoria:{pt:'Cores',es:'Colores'}, titulo:{pt:'Azul de apoio',es:'Azul de apoyo'}, cor:'#12406E', status:'confirmar',
     resumo:{pt:'Caixas e destaques sobre o azul-marinho.',es:'Cajas y destacados sobre el azul marino.'}},
    {id:'azul-destaque', categoria:{pt:'Cores',es:'Colores'}, titulo:{pt:'Azul de destaque',es:'Azul de destaque'}, cor:'#1D6FD6', status:'confirmar',
     resumo:{pt:'Títulos pequenos, links e detalhes em fundo claro.',es:'Títulos pequeños, enlaces y detalles sobre fondo claro.'}},
    {id:'azul-claro', categoria:{pt:'Cores',es:'Colores'}, titulo:{pt:'Azul-claro',es:'Azul claro'}, cor:'#7CC4FF', status:'confirmar',
     resumo:{pt:'Destaques sobre fundo escuro.',es:'Destacados sobre fondo oscuro.'}},
    {id:'branco-gelo', categoria:{pt:'Cores',es:'Colores'}, titulo:{pt:'Branco-gelo',es:'Blanco hielo'}, cor:'#F4F7FA', status:'confirmar',
     resumo:{pt:'Fundo claro de páginas e slides.',es:'Fondo claro de páginas y diapositivas.'}},
    {id:'fonte-jakarta', categoria:{pt:'Fontes',es:'Tipografías'}, titulo:'Plus Jakarta Sans', status:'confirmar',
     resumo:{pt:'Fonte dos textos nos materiais recentes. Gratuita no Google Fonts.',es:'Tipografía de los textos en los materiales recientes. Gratuita en Google Fonts.'},
     links:[{rotulo:{pt:'Ver no Google Fonts',es:'Ver en Google Fonts'}, url:'https://fonts.google.com/specimen/Plus+Jakarta+Sans'}]},
    {id:'fonte-sora', categoria:{pt:'Fontes',es:'Tipografías'}, titulo:'Sora', status:'confirmar',
     resumo:{pt:'Fonte dos títulos da Videoteca e deste portal. Gratuita no Google Fonts.',es:'Tipografía de los títulos de la Videoteca y de este portal. Gratuita en Google Fonts.'},
     links:[{rotulo:{pt:'Ver no Google Fonts',es:'Ver en Google Fonts'}, url:'https://fonts.google.com/specimen/Sora'}]},
    {id:'logo-unicpo', categoria:'Logos', titulo:{pt:'Logo UniCPO',es:'Logo UniCPO'}, status:'preencher',
     resumo:{pt:'Versões colorida, branca e preta, em PNG e SVG.',es:'Versiones a color, blanca y negra, en PNG y SVG.'}},
    {id:'logo-clinica', categoria:'Logos', titulo:{pt:'Logo Clínica UniCPO',es:'Logo Clínica UniCPO'}, status:'preencher',
     resumo:{pt:'Versões colorida, branca e preta, em PNG e SVG.',es:'Versiones a color, blanca y negra, en PNG y SVG.'}},
    {id:'logo-fainter', categoria:'Logos', titulo:{pt:'Logo FAINTER',es:'Logo FAINTER'}, status:'preencher',
     resumo:{pt:'Versões colorida, branca e preta, em PNG e SVG.',es:'Versiones a color, blanca y negra, en PNG y SVG.'}},
    {id:'canva-posts', categoria:{pt:'Modelos',es:'Plantillas'}, titulo:{pt:'Templates do Canva: posts e stories',es:'Plantillas de Canva: posts e historias'}, status:'preencher',
     resumo:{pt:'Link para a pasta de templates editáveis.',es:'Enlace a la carpeta de plantillas editables.'}},
    {id:'canva-comunicados', categoria:{pt:'Modelos',es:'Plantillas'}, titulo:{pt:'Modelos de comunicado',es:'Modelos de comunicado'}, status:'preencher',
     resumo:{pt:'Aviso de aula, mudança de data, lembrete de pagamento.',es:'Aviso de clase, cambio de fecha, recordatorio de pago.'}},
    {id:'assinatura-email', categoria:{pt:'Modelos',es:'Plantillas'}, titulo:{pt:'Assinatura de e-mail',es:'Firma de e-mail'}, status:'preencher',
     resumo:{pt:'Modelo único para todos os setores.',es:'Modelo único para todos los sectores.'}},
    {id:'fundo-reuniao', categoria:{pt:'Modelos',es:'Plantillas'}, titulo:{pt:'Fundo para Zoom e Meet',es:'Fondo para Zoom y Meet'}, status:'preencher',
     resumo:{pt:'Imagem 1920×1080 com a marca.',es:'Imagen 1920×1080 con la marca.'}}
  ]
});
