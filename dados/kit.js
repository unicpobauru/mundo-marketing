/* Kit de marca — cores oficiais, fontes, logos e a base de PowerPoint, com download.
   Cores: anotadas pelo marketing em 25/11/2026. Os arquivos para download (paletas, .ase, zips)
   são gerados por ferramentas/marca/gerar_kit.py — se mudar uma cor, mude lá também e rode o script.
   Logos: salve em assets/marca/logos/ e troque o status do item por links de download.
   PowerPoint: assets/marca/apresentacao/ (as imagens previa-*.jpg são só para a página). */
var M = '../assets/marca/';
var UNI = {pt:'Cores UniCPO', es:'Colores UniCPO'}, FAI = {pt:'Cores FAINTER', es:'Colores FAINTER'};
var FON = {pt:'Fontes', es:'Tipografías'}, LOG = 'Logos', MOD = {pt:'Modelos', es:'Plantillas'};
function cor(id, cat, titulo, hex, rgb, cmyk, pantone, uso, paleta, extra){
  return Object.assign({id:id, categoria:cat, titulo:titulo, cor:hex, resumo:uso,
    campos:[{rotulo:'HEX', valor:hex}, {rotulo:'RGB', valor:rgb}, {rotulo:'CMYK', valor:cmyk}, {rotulo:'Pantone', valor:pantone}],
    links:[{rotulo:{pt:'Paleta da marca (PNG)', es:'Paleta de la marca (PNG)'}, url:M + 'cores/' + paleta, baixar:true},
           {rotulo:{pt:'Todas as cores (.zip)', es:'Todos los colores (.zip)'}, url:M + 'downloads/cores-oficiais.zip', baixar:true}]}, extra || {});
}
MM.area({
  id:'kit', layout:'kit',
  botoes:[
    {rotulo:{pt:'Baixar kit completo', es:'Descargar kit completo'}, url:M + 'downloads/kit-de-marca-completo.zip', baixar:true},
    {rotulo:{pt:'Base de PowerPoint', es:'Base de PowerPoint'}, url:M + 'apresentacao/Base-PowerPoint-Grupo-UniCPO.pptx', baixar:true},
    {rotulo:{pt:'Cores (.ase, PNG, TXT)', es:'Colores (.ase, PNG, TXT)'}, url:M + 'downloads/cores-oficiais.zip', baixar:true},
    {rotulo:{pt:'Fonte Montserrat', es:'Tipografía Montserrat'}, url:M + 'downloads/fonte-montserrat.zip', baixar:true},
    {rotulo:{pt:'Fonte Inter', es:'Tipografía Inter'}, url:M + 'downloads/fonte-inter.zip', baixar:true}
  ],
  filtros:[{campo:'categoria', rotulo:{pt:'Tipo', es:'Tipo'}}],
  itens:[
    cor('unicpo-verde-agua', UNI, {pt:'Verde-água', es:'Verde agua'}, '#8ACBBD', '138 203 190', '50 0 32 0', 'P 130-4 C',
        {pt:'Cor de apoio da UniCPO.', es:'Color de apoyo de UniCPO.'}, 'paleta-unicpo.png'),
    cor('unicpo-azul-claro', UNI, {pt:'Azul-claro', es:'Azul claro'}, '#34AED6', '52 174 214', '70 10 10 0', 'P 116-5 C',
        {pt:'Azul-claro da UniCPO.', es:'Azul claro de UniCPO.'}, 'paleta-unicpo.png'),
    cor('unicpo-azul-escuro', UNI, {pt:'Azul-escuro', es:'Azul oscuro'}, '#057AB4', '5 122 180', '85 43 10 0', 'P 113-8 C',
        {pt:'Azul principal da UniCPO.', es:'Azul principal de UniCPO.'}, 'paleta-unicpo.png'),
    cor('fainter-azul-escuro', FAI, {pt:'Azul-escuro', es:'Azul oscuro'}, '#002E9C', '0 45 156', '100 92 10 3', '',
        {pt:'Azul principal da FAINTER.', es:'Azul principal de FAINTER.'}, 'paleta-fainter.png'),
    cor('fainter-azul-claro', FAI, {pt:'Azul-claro', es:'Azul claro'}, '#66D3FF', '102 211 255', '51 1 0 0', '',
        {pt:'Azul-claro da FAINTER.', es:'Azul claro de FAINTER.'}, 'paleta-fainter.png'),

    {id:'fonte-montserrat', categoria:FON, titulo:'Montserrat', status:'confirmar',
     resumo:{pt:'Fonte da UniCPO. Pesos do manual: Black, Bold, Regular e Light.', es:'Tipografía de UniCPO. Pesos del manual: Black, Bold, Regular y Light.'},
     texto:{pt:'Gratuita (licença SIL Open Font). Baixe, abra cada arquivo .ttf e clique em Instalar.\n\nConfirmar: a página do manual com a Montserrat é da UniCPO.', es:'Gratuita (licencia SIL Open Font). Descarga, abre cada archivo .ttf y haz clic en Instalar.\n\nConfirmar: la página del manual con la Montserrat es de UniCPO.'},
     links:[{rotulo:{pt:'Baixar Montserrat (.zip)', es:'Descargar Montserrat (.zip)'}, url:M + 'downloads/fonte-montserrat.zip', baixar:true},
            {rotulo:{pt:'Ver no Google Fonts', es:'Ver en Google Fonts'}, url:'https://fonts.google.com/specimen/Montserrat'}]},
    {id:'fonte-inter', categoria:FON, titulo:'Inter', status:'confirmar',
     resumo:{pt:'Fonte da FAINTER. Títulos e destaques em Extra Bold; demais textos em Regular.', es:'Tipografía de FAINTER. Títulos y destacados en Extra Bold; demás textos en Regular.'},
     texto:{pt:'Gratuita (licença SIL Open Font). O pacote traz Regular, Medium, Semi Bold, Bold, Extra Bold e Black. Também é a fonte deste portal.\n\nConfirmar: a página do manual com a Inter é da FAINTER.', es:'Gratuita (licencia SIL Open Font). El paquete trae Regular, Medium, Semi Bold, Bold, Extra Bold y Black. También es la tipografía de este portal.\n\nConfirmar: la página del manual con la Inter es de FAINTER.'},
     links:[{rotulo:{pt:'Baixar Inter (.zip)', es:'Descargar Inter (.zip)'}, url:M + 'downloads/fonte-inter.zip', baixar:true},
            {rotulo:{pt:'Ver no Google Fonts', es:'Ver en Google Fonts'}, url:'https://fonts.google.com/specimen/Inter'}]},

    {id:'logo-grupo-unicpo', categoria:LOG, titulo:{pt:'Logo Grupo UniCPO', es:'Logo Grupo UniCPO'},
     imagem:M + 'logos/previa-capa-grupo-unicpo.jpg', detalheImagem:M + 'logos/previa-logos-grupo-unicpo.jpg',
     resumo:{pt:'A marca do grupo, sem a FAINTER. Colorido, branco e preto, em PNG e SVG.', es:'La marca del grupo, sin FAINTER. A color, blanco y negro, en PNG y SVG.'},
     texto:{pt:'Fundo claro: colorido. Fundo escuro, foto ou azul: branco. Impressão em uma cor: preto.\n\nSVG não perde qualidade em nenhum tamanho; PNG tem fundo transparente.', es:'Fondo claro: a color. Fondo oscuro, foto o azul: blanco. Impresión en un color: negro.\n\nSVG no pierde calidad en ningún tamaño; PNG tiene fondo transparente.'},
     links:[
       {rotulo:{pt:'Todos os logos (.zip)', es:'Todos los logos (.zip)'}, url:M + 'downloads/logos-grupo-unicpo.zip', baixar:true},
       {rotulo:{pt:'Colorido (PNG)', es:'A color (PNG)'}, url:M + 'logos/grupo-unicpo/grupo-unicpo-colorido.png', baixar:true},
       {rotulo:{pt:'Colorido (SVG)', es:'A color (SVG)'}, url:M + 'logos/grupo-unicpo/svg/grupo-unicpo-colorido.svg', baixar:true},
       {rotulo:{pt:'Branco (fundo escuro) (PNG)', es:'Blanco (fondo oscuro) (PNG)'}, url:M + 'logos/grupo-unicpo/grupo-unicpo-branco.png', baixar:true},
       {rotulo:{pt:'Branco (fundo escuro) (SVG)', es:'Blanco (fondo oscuro) (SVG)'}, url:M + 'logos/grupo-unicpo/svg/grupo-unicpo-branco.svg', baixar:true},
       {rotulo:{pt:'Preto (PNG)', es:'Negro (PNG)'}, url:M + 'logos/grupo-unicpo/grupo-unicpo-preto.png', baixar:true},
       {rotulo:{pt:'Preto (SVG)', es:'Negro (SVG)'}, url:M + 'logos/grupo-unicpo/svg/grupo-unicpo-preto.svg', baixar:true}]},
    {id:'logo-unicpo', categoria:LOG, titulo:{pt:'Logo Faculdade UniCPO', es:'Logo Facultad UniCPO'},
     imagem:M + 'logos/previa-capa-unicpo.jpg', detalheImagem:M + 'logos/previa-logos-unicpo.jpg',
     resumo:{pt:'Horizontal e vertical, em colorido, para fundo escuro, branco e preto. PNG com fundo transparente.', es:'Horizontal y vertical, a color, para fondo oscuro, blanco y negro. PNG con fondo transparente.'},
     texto:{pt:'Qual usar:\n\n- Fundo claro: colorido.\n- Fundo escuro: "para fundo escuro" (símbolo colorido e letras brancas) ou branco.\n- Foto ou fundo azul: branco.\n- Impressão em uma cor: preto.\n\nNão estique, não troque as cores e deixe um respiro em volta do logo.', es:'Cuál usar:\n\n- Fondo claro: a color.\n- Fondo oscuro: "para fondo oscuro" (símbolo a color y letras blancas) o blanco.\n- Foto o fondo azul: blanco.\n- Impresión en un color: negro.\n\nNo lo estires, no cambies los colores y deja espacio libre alrededor del logo.'},
     links:[
       {rotulo:{pt:'Todos os logos (.zip)', es:'Todos los logos (.zip)'}, url:M + 'downloads/logos-unicpo.zip', baixar:true},
       {rotulo:{pt:'Horizontal colorido', es:'Horizontal a color'}, url:M + 'logos/unicpo/faculdade-unicpo-horizontal-colorido.png', baixar:true},
       {rotulo:{pt:'Horizontal fundo escuro', es:'Horizontal fondo oscuro'}, url:M + 'logos/unicpo/faculdade-unicpo-horizontal-fundo-escuro.png', baixar:true},
       {rotulo:{pt:'Horizontal branco', es:'Horizontal blanco'}, url:M + 'logos/unicpo/faculdade-unicpo-horizontal-branco.png', baixar:true},
       {rotulo:{pt:'Horizontal preto', es:'Horizontal negro'}, url:M + 'logos/unicpo/faculdade-unicpo-horizontal-preto.png', baixar:true},
       {rotulo:{pt:'Vertical colorido', es:'Vertical a color'}, url:M + 'logos/unicpo/faculdade-unicpo-vertical-colorido.png', baixar:true},
       {rotulo:{pt:'Vertical branco', es:'Vertical blanco'}, url:M + 'logos/unicpo/faculdade-unicpo-vertical-branco.png', baixar:true},
       {rotulo:{pt:'Vertical preto', es:'Vertical negro'}, url:M + 'logos/unicpo/faculdade-unicpo-vertical-preto.png', baixar:true}]},
    {id:'logo-clinica', categoria:LOG, titulo:{pt:'Logo Clínica UniCPO', es:'Logo Clínica UniCPO'},
     imagem:M + 'logos/previa-capa-clinica.jpg', detalheImagem:M + 'logos/previa-logos-clinica.jpg',
     resumo:{pt:'Colorido, para fundo escuro, branco e preto, em PNG e SVG.', es:'A color, para fondo oscuro, blanco y negro, en PNG y SVG.'},
     texto:{pt:'Fundo claro: colorido. Fundo escuro: "para fundo escuro" ou branco. Foto ou fundo azul: branco. Impressão em uma cor: preto.\n\nSVG não perde qualidade em nenhum tamanho; PNG tem fundo transparente.', es:'Fondo claro: a color. Fondo oscuro: "para fondo oscuro" o blanco. Foto o fondo azul: blanco. Impresión en un color: negro.\n\nSVG no pierde calidad en ningún tamaño; PNG tiene fondo transparente.'},
     links:[
       {rotulo:{pt:'Todos os logos (.zip)', es:'Todos los logos (.zip)'}, url:M + 'downloads/logos-clinica.zip', baixar:true},
       {rotulo:{pt:'Colorido (PNG)', es:'A color (PNG)'}, url:M + 'logos/clinica/clinica-unicpo-colorido.png', baixar:true},
       {rotulo:{pt:'Colorido (SVG)', es:'A color (SVG)'}, url:M + 'logos/clinica/svg/clinica-unicpo-colorido.svg', baixar:true},
       {rotulo:{pt:'Fundo escuro (PNG)', es:'Fondo oscuro (PNG)'}, url:M + 'logos/clinica/clinica-unicpo-fundo-escuro.png', baixar:true},
       {rotulo:{pt:'Fundo escuro (SVG)', es:'Fondo oscuro (SVG)'}, url:M + 'logos/clinica/svg/clinica-unicpo-fundo-escuro.svg', baixar:true},
       {rotulo:{pt:'Branco (PNG)', es:'Blanco (PNG)'}, url:M + 'logos/clinica/clinica-unicpo-branco.png', baixar:true},
       {rotulo:{pt:'Branco (SVG)', es:'Blanco (SVG)'}, url:M + 'logos/clinica/svg/clinica-unicpo-branco.svg', baixar:true},
       {rotulo:{pt:'Preto (PNG)', es:'Negro (PNG)'}, url:M + 'logos/clinica/clinica-unicpo-preto.png', baixar:true},
       {rotulo:{pt:'Preto (SVG)', es:'Negro (SVG)'}, url:M + 'logos/clinica/svg/clinica-unicpo-preto.svg', baixar:true}]},
    {id:'logo-grupo', categoria:LOG, titulo:{pt:'Logo Grupo UniCPO | FAINTER', es:'Logo Grupo UniCPO | FAINTER'},
     imagem:M + 'logos/previa-capa-grupo.jpg', detalheImagem:M + 'logos/previa-logos-grupo.jpg',
     resumo:{pt:'As duas marcas juntas, para materiais do grupo. Colorido, branco e preto, em PNG e SVG.', es:'Las dos marcas juntas, para materiales del grupo. A color, blanco y negro, en PNG y SVG.'},
     texto:{pt:'Fundo claro: colorido. Fundo escuro: branco. Foto ou fundo azul: branco. Impressão em uma cor: preto.\n\nSVG não perde qualidade em nenhum tamanho; PNG tem fundo transparente.', es:'Fondo claro: a color. Fondo oscuro: blanco. Foto o fondo azul: blanco. Impresión en un color: negro.\n\nSVG no pierde calidad en ningún tamaño; PNG tiene fondo transparente.'},
     links:[
       {rotulo:{pt:'Todos os logos (.zip)', es:'Todos los logos (.zip)'}, url:M + 'downloads/logos-grupo.zip', baixar:true},
       {rotulo:{pt:'Colorido (PNG)', es:'A color (PNG)'}, url:M + 'logos/grupo/grupo-unicpo-fainter-colorido.png', baixar:true},
       {rotulo:{pt:'Colorido (SVG)', es:'A color (SVG)'}, url:M + 'logos/grupo/svg/grupo-unicpo-fainter-colorido.svg', baixar:true},
       {rotulo:{pt:'Branco (PNG)', es:'Blanco (PNG)'}, url:M + 'logos/grupo/grupo-unicpo-fainter-branco.png', baixar:true},
       {rotulo:{pt:'Branco (SVG)', es:'Blanco (SVG)'}, url:M + 'logos/grupo/svg/grupo-unicpo-fainter-branco.svg', baixar:true},
       {rotulo:{pt:'Preto (PNG)', es:'Negro (PNG)'}, url:M + 'logos/grupo/grupo-unicpo-fainter-preto.png', baixar:true},
       {rotulo:{pt:'Preto (SVG)', es:'Negro (SVG)'}, url:M + 'logos/grupo/svg/grupo-unicpo-fainter-preto.svg', baixar:true}]},
    {id:'logo-fainter', categoria:LOG, titulo:{pt:'Logo FAINTER', es:'Logo FAINTER'},
     imagem:M + 'logos/previa-capa-fainter.jpg', detalheImagem:M + 'logos/previa-logos-fainter.jpg',
     resumo:{pt:'Azul-escuro, azul-claro, branco e preto, em PNG, SVG e PDF, mais avatares para redes sociais e arquivos para gráfica.', es:'Azul oscuro, azul claro, blanco y negro, en PNG, SVG y PDF, más avatares para redes sociales y archivos para imprenta.'},
     texto:{pt:'Qual usar:\n\n- Fundo claro: azul-escuro (ou preto).\n- Fundo escuro: azul-claro ou branco.\n- Fundo azul FAINTER ou foto: branco.\n- Perfil de rede social: avatar.\n\nPNG serve para quase tudo. SVG e PDF não perdem qualidade em nenhum tamanho. Para gráfica, mande os arquivos .ai ou o PDF CMYK (estão no .zip).', es:'Cuál usar:\n\n- Fondo claro: azul oscuro (o negro).\n- Fondo oscuro: azul claro o blanco.\n- Fondo azul FAINTER o foto: blanco.\n- Perfil de red social: avatar.\n\nPNG sirve para casi todo. SVG y PDF no pierden calidad en ningún tamaño. Para imprenta, envía los archivos .ai o el PDF CMYK (están en el .zip).'},
     links:[
       {rotulo:{pt:'Todos os logos (.zip)', es:'Todos los logos (.zip)'}, url:M + 'downloads/logos-fainter.zip', baixar:true},
       {rotulo:{pt:'Azul-escuro (PNG)', es:'Azul oscuro (PNG)'}, url:M + 'logos/fainter/fainter-azul-escuro.png', baixar:true},
       {rotulo:{pt:'Azul-claro (PNG)', es:'Azul claro (PNG)'}, url:M + 'logos/fainter/fainter-azul-claro.png', baixar:true},
       {rotulo:{pt:'Branco (PNG)', es:'Blanco (PNG)'}, url:M + 'logos/fainter/fainter-branco.png', baixar:true},
       {rotulo:{pt:'Preto (PNG)', es:'Negro (PNG)'}, url:M + 'logos/fainter/fainter-preto.png', baixar:true},
       {rotulo:{pt:'Azul-escuro (SVG)', es:'Azul oscuro (SVG)'}, url:M + 'logos/fainter/svg/fainter-azul-escuro.svg', baixar:true},
       {rotulo:{pt:'Azul-claro (SVG)', es:'Azul claro (SVG)'}, url:M + 'logos/fainter/svg/fainter-azul-claro.svg', baixar:true},
       {rotulo:{pt:'Avatar azul', es:'Avatar azul'}, url:M + 'logos/fainter/fainter-avatar-azul.png', baixar:true},
       {rotulo:{pt:'Avatar escuro', es:'Avatar oscuro'}, url:M + 'logos/fainter/fainter-avatar-escuro.png', baixar:true}]},

    {id:'logo-mpa', categoria:LOG, titulo:{pt:'Logo MPA · Medical Performance Academy', es:'Logo MPA · Medical Performance Academy'},
     imagem:M + 'logos/previa-capa-mpa.jpg', detalheImagem:M + 'logos/previa-logos-mpa.jpg',
     resumo:{pt:'Pós-graduação em Medicina Metabólica e Longevidade da FAINTER. Preto e branco, em PNG.', es:'Posgrado en Medicina Metabólica y Longevidad de FAINTER. Negro y blanco, en PNG.'},
     texto:{pt:'Fundo claro: preto. Fundo escuro ou foto: branco. Os arquivos vieram da página do MPA (900 px); para gráfica, peça o vetor.', es:'Fondo claro: negro. Fondo oscuro o foto: blanco. Los archivos vinieron de la página del MPA (900 px); para imprenta, pide el vector.'},
     links:[{rotulo:{pt:'Todos os logos (.zip)', es:'Todos los logos (.zip)'}, url:M + 'downloads/logos-mpa.zip', baixar:true},
            {rotulo:{pt:'Preto (PNG)', es:'Negro (PNG)'}, url:M + 'logos/mpa/mpa-preto.png', baixar:true},
            {rotulo:{pt:'Branco (PNG)', es:'Blanco (PNG)'}, url:M + 'logos/mpa/mpa-branco.png', baixar:true}]},
    {id:'logo-mundo-marketing', categoria:LOG, titulo:{pt:'Ícone Mundo Marketing', es:'Ícono Mundo Marketing'},
     imagem:M + 'mundo-marketing/icone-512.png',
     resumo:{pt:'O ícone deste portal: símbolo da UniCPO com o mundo e a órbita.', es:'El ícono de este portal: símbolo de UniCPO con el mundo y la órbita.'},
     links:[{rotulo:{pt:'SVG', es:'SVG'}, url:M + 'mundo-marketing/icone-mundo-marketing.svg', baixar:true},
            {rotulo:{pt:'PNG 512 px', es:'PNG 512 px'}, url:M + 'mundo-marketing/icone-512.png', baixar:true}]},
    {id:'base-powerpoint', categoria:MOD, titulo:{pt:'Base de PowerPoint', es:'Base de PowerPoint'},
     imagem:M + 'apresentacao/previa-capa.jpg',
     resumo:{pt:'Modelo oficial do Grupo UniCPO: 16 slides com capa, história, diretor e fundos para montar a sua apresentação.', es:'Plantilla oficial del Grupo UniCPO: 16 diapositivas con portada, historia, director y fondos para armar tu presentación.'},
     texto:{pt:'Formato 16:9, em PowerPoint (.pptx, 12 MB). Abra, duplique os slides que precisar e troque os textos. Os slides em branco já vêm com os fundos e o símbolo da marca.\n\nTambém abre no Google Apresentações: no Drive, clique em Novo → Upload de arquivo e abra com Apresentações.', es:'Formato 16:9, en PowerPoint (.pptx, 12 MB). Ábrelo, duplica las diapositivas que necesites y cambia los textos. Las diapositivas en blanco ya traen los fondos y el símbolo de la marca.\n\nTambién se abre en Google Presentaciones: en Drive, haz clic en Nuevo → Subir archivo y ábrelo con Presentaciones.'},
     detalheImagem:M + 'apresentacao/previa-slides.jpg',
     links:[{rotulo:{pt:'Baixar PowerPoint (.pptx)', es:'Descargar PowerPoint (.pptx)'}, url:M + 'apresentacao/Base-PowerPoint-Grupo-UniCPO.pptx', baixar:true}]}
  ]
});
