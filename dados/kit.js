/* Kit de marca — cores oficiais, fontes, logos e a base de PowerPoint, com download.
   Cores: anotadas pelo marketing em 25/11/2026. Os arquivos para download (paletas, .ase, zips)
   são gerados por ferramentas/marca/gerar_kit.py — se mudar uma cor, mude lá também e rode o script.
   Logos: salve em assets/marca/logos/ e troque o status do item por links de download.
   PowerPoint: salve em assets/marca/apresentacao/ e faça o mesmo. */
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
    {id:'fonte-logo-fainter', categoria:FON, titulo:{pt:'Letreiro FAINTER (personalizado)', es:'Logotipo FAINTER (personalizado)'},
     resumo:{pt:'Letras ajustadas à mão, só para o logo. Não é uma fonte para baixar nem para escrever textos.', es:'Letras ajustadas a mano, solo para el logo. No es una tipografía para descargar ni para escribir textos.'},
     texto:{pt:'No manual, o letreiro FAINTER parte de uma fonte sem serifa em caixa alta, com espaçamento e espessura personalizados e a circunferência completando o A e o E. Use sempre o arquivo do logo.', es:'En el manual, el logotipo FAINTER parte de una tipografía sin serifa en mayúsculas, con espaciado y grosor personalizados y la circunferencia completando la A y la E. Usa siempre el archivo del logo.'}},

    {id:'logo-unicpo', categoria:LOG, titulo:{pt:'Logo UniCPO', es:'Logo UniCPO'}, status:'preencher',
     resumo:{pt:'Versões colorida, branca e preta, em PNG e SVG.', es:'Versiones a color, blanca y negra, en PNG y SVG.'}},
    {id:'logo-clinica', categoria:LOG, titulo:{pt:'Logo Clínica UniCPO', es:'Logo Clínica UniCPO'}, status:'preencher',
     resumo:{pt:'Versões colorida, branca e preta, em PNG e SVG.', es:'Versiones a color, blanca y negra, en PNG y SVG.'}},
    {id:'logo-fainter', categoria:LOG, titulo:{pt:'Logo FAINTER', es:'Logo FAINTER'}, status:'preencher',
     resumo:{pt:'Versões colorida, branca e preta, em PNG e SVG.', es:'Versiones a color, blanca y negra, en PNG y SVG.'}},

    {id:'base-powerpoint', categoria:MOD, titulo:{pt:'Base de PowerPoint', es:'Base de PowerPoint'}, status:'preencher',
     resumo:{pt:'Modelo de apresentação oficial. Aguardando o arquivo do marketing.', es:'Plantilla de presentación oficial. Esperando el archivo del marketing.'}}
  ]
});
