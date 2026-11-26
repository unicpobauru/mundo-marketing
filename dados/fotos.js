/* Banco de fotos — prédios da UniCPO (pasta do Drive do marketing, 13/11/2026).
   Cada foto: versão para a web em assets/fotos/predio/ (1800 px) e miniatura em assets/fotos/predio/mini/.
   O original em alta fica no Drive (campo d = id do arquivo no Drive).
   Para acrescentar: rode de novo o mesmo processo ou copie um item, salve a foto e troque o id.
   Fotos de funcionários: ainda a receber. */
var PRED = {
  sede:{pt:'Prédio sede', es:'Edificio sede'},
  homero:{pt:'Clínica Homero', es:'Clínica Homero'},
  auxiliar:{pt:'Prédio auxiliar', es:'Edificio auxiliar'},
  auditorio:{pt:'Auditório', es:'Auditorio'}
};
var FOTOS = [
{
"id": "sede-piso-0-conveniencia",
"t": "Conveniência",
"p": "sede",
"piso": "Piso 0",
"d": "1od18z4uhL7FssEHLQscN1RCXK7fZt3dx",
"capa": false
},
{
"id": "sede-piso-0-corredor",
"t": "Corredor",
"p": "sede",
"piso": "Piso 0",
"d": "1UqDzAwVBYXXkp0SZljRyMIoEpfU9JD3E",
"capa": false
},
{
"id": "sede-piso-0-cs",
"t": "CS",
"p": "sede",
"piso": "Piso 0",
"d": "1OX2JGAuuvSC-T6xW4twqOAqH9j9bka74",
"capa": false
},
{
"id": "sede-piso-0-financeiro",
"t": "Financeiro",
"p": "sede",
"piso": "Piso 0",
"d": "1ynrspa5wfjrVTymb_MxlNU30UncByE18",
"capa": false
},
{
"id": "sede-piso-0-patio1",
"t": "Pátio 1",
"p": "sede",
"piso": "Piso 0",
"d": "1Z5d8JHGDXKeur6d1bXvMZRMvW8SguMyp",
"capa": false
},
{
"id": "sede-piso-0-patio2",
"t": "Pátio 2",
"p": "sede",
"piso": "Piso 0",
"d": "1rRQfD_gmgOJVa66yUVkRkHc5clfHcdmy",
"capa": false
},
{
"id": "sede-piso-0-patio3",
"t": "Pátio 3",
"p": "sede",
"piso": "Piso 0",
"d": "1HM-o3wWg-IDgx4mZrQBPoK_ystlGA1MV",
"capa": false
},
{
"id": "sede-piso-0-recepcao-1",
"t": "Recepção 1",
"p": "sede",
"piso": "Piso 0",
"d": "1UotGrjFMmJKL4vDb6vji43aAFwEXcoJW",
"capa": false
},
{
"id": "sede-piso-0-recepcao2",
"t": "Recepção 2",
"p": "sede",
"piso": "Piso 0",
"d": "19-91XVHgorRmJ6p14n0-3dPOzOBp_nKz",
"capa": false
},
{
"id": "sede-piso-0-rh",
"t": "RH",
"p": "sede",
"piso": "Piso 0",
"d": "1BP_bi6aJUWG0YAekc4_caXIxeI1dQuTg",
"capa": false
},
{
"id": "sede-piso-1-clinica-3",
"t": "Clínica 3",
"p": "sede",
"piso": "Piso 1",
"d": "12xmMLAPWXBImg-PYv16jTlDWeL6cgAUF",
"capa": false
},
{
"id": "sede-piso-1-clinica-4",
"t": "Clínica 4",
"p": "sede",
"piso": "Piso 1",
"d": "1WJ_auMfqe9Tfthr40PuaCIjrCuFaoJid",
"capa": false
},
{
"id": "sede-piso-1-clinica-5",
"t": "Clínica 5",
"p": "sede",
"piso": "Piso 1",
"d": "1v-_68P6yhwwj00tKrFYN6QaFkO2oHVlo",
"capa": false
},
{
"id": "sede-piso-1-clinica-box",
"t": "Clínica box",
"p": "sede",
"piso": "Piso 1",
"d": "1xGqo0ebWDG0-a67r_7Sqb31ToT0WcwMc",
"capa": false
},
{
"id": "sede-piso-1-clinica-invisalign",
"t": "Clínica Invisalign",
"p": "sede",
"piso": "Piso 1",
"d": "1r2Uv9BC73c6GE51nMXSOjM7YJ44C53dy",
"capa": false
},
{
"id": "sede-piso-1-esterilizacao",
"t": "Esterilização",
"p": "sede",
"piso": "Piso 1",
"d": "1ryLAA9NidaKBsM9SzJxUPp_F3tsXLJ7g",
"capa": false
},
{
"id": "sede-piso-1-expurgo",
"t": "Expurgo",
"p": "sede",
"piso": "Piso 1",
"d": "12JwNDua7F6fGL1BAjrMtWFfdq7fnMV94",
"capa": false
},
{
"id": "sede-piso-1-recepcao",
"t": "Recepção",
"p": "sede",
"piso": "Piso 1",
"d": "1QcTuy3p32KrAT9qZhQpkSvOp4SLIUZZ1",
"capa": false
},
{
"id": "sede-piso-1-tomografo",
"t": "Tomógrafo",
"p": "sede",
"piso": "Piso 1",
"d": "1RV2o4P6Qxeqp33ywqzJ1APHk2SryWG0E",
"capa": false
},
{
"id": "sede-piso-2-box",
"t": "Box",
"p": "sede",
"piso": "Piso 2",
"d": "1fa0hUNHUwjGm58FynLAogDJHKbz4ttZR",
"capa": false
},
{
"id": "sede-piso-2-box2",
"t": "Box 2",
"p": "sede",
"piso": "Piso 2",
"d": "1edD35qPmLH6hjckbVeYZlaBqJ6k7fOsF",
"capa": false
},
{
"id": "sede-piso-2-clinica6",
"t": "Clínica 6",
"p": "sede",
"piso": "Piso 2",
"d": "1H1wRALAYMj5CQ1p0PDve2FTzdRPPrKpt",
"capa": false
},
{
"id": "sede-piso-2-hall",
"t": "Hall",
"p": "sede",
"piso": "Piso 2",
"d": "1e-NA3UIPBeR5ypLy6X24wFrmvbydeWMB",
"capa": false
},
{
"id": "sede-piso-2-lab1",
"t": "Laboratório 1",
"p": "sede",
"piso": "Piso 2",
"d": "1q8-tPXkzOoNf4Yeu9wOxWEF0sIujOPcd",
"capa": false
},
{
"id": "sede-piso-2-lab2",
"t": "Laboratório 2",
"p": "sede",
"piso": "Piso 2",
"d": "1JQ9H5j80lS2HVYghuguX1d-8NSm6PxhH",
"capa": false
},
{
"id": "sede-piso-2-meio",
"t": "Corredor central",
"p": "sede",
"piso": "Piso 2",
"d": "10XFzS6l1pP8lhDz4NTxOBcl_tQqqcDYj",
"capa": false
},
{
"id": "sede-piso-2-recepcao",
"t": "Recepção",
"p": "sede",
"piso": "Piso 2",
"d": "1_CFBGHSuVMV-6lwzXICNXp2XK_E78bSV",
"capa": false
},
{
"id": "sede-piso-3-corredor",
"t": "Corredor",
"p": "sede",
"piso": "Piso 3",
"d": "1uF-nkQrCW36ypPZMdtUHyAs-CT-GSr1l",
"capa": false
},
{
"id": "sede-piso-3-corredor2",
"t": "Corredor 2",
"p": "sede",
"piso": "Piso 3",
"d": "1Bhy8ZVPInv51WBK7qEBl_4U3y7syrgnN",
"capa": false
},
{
"id": "sede-piso-3-hall",
"t": "Hall",
"p": "sede",
"piso": "Piso 3",
"d": "17GsaFkLurLu2SzsUxV6DxSWeTEawihVM",
"capa": false
},
{
"id": "sede-piso-3-morfo1",
"t": "Morfologia 1",
"p": "sede",
"piso": "Piso 3",
"d": "1evz6N6b_KLVkaxS_r-Q2Xo_Aday2HagD",
"capa": false
},
{
"id": "sede-piso-3-morfo2",
"t": "Morfologia 2",
"p": "sede",
"piso": "Piso 3",
"d": "1a_0Jnj6aPX9sMZj-XC3ZIw8TjghrR7e7",
"capa": false
},
{
"id": "sede-piso-3-morfo3",
"t": "Morfologia 3",
"p": "sede",
"piso": "Piso 3",
"d": "1BX2GOhO5XHF3dS-NsgzPXi9Z1YNJU5hV",
"capa": false
},
{
"id": "sede-piso-3-sala1",
"t": "Sala 1",
"p": "sede",
"piso": "Piso 3",
"d": "1ODg1bSpedlqTXehp-6dWEHlr0CNVMqBk",
"capa": false
},
{
"id": "sede-piso-3-sala2",
"t": "Sala 2",
"p": "sede",
"piso": "Piso 3",
"d": "1YmZgmVntGJ9eJS0P2EvgCKA3DMBSkfpc",
"capa": false
},
{
"id": "sede-piso-3-sala3",
"t": "Sala 3",
"p": "sede",
"piso": "Piso 3",
"d": "1nuBilaNGJ2Lk2xKuVce6_SyRx7f0cBce",
"capa": false
},
{
"id": "sede-piso-3-sala4",
"t": "Sala 4",
"p": "sede",
"piso": "Piso 3",
"d": "14TKiyrh0G14bNDRBsdv7XwY4jFO_GVfq",
"capa": false
},
{
"id": "sede-piso-3-sala6",
"t": "Sala 6",
"p": "sede",
"piso": "Piso 3",
"d": "1Ul5-0ELhgA9uKQMovyeXQtcHV9L1B-8I",
"capa": false
},
{
"id": "sede-piso-3-sala7",
"t": "Sala 7",
"p": "sede",
"piso": "Piso 3",
"d": "1WEncHx0rqjfN6yyfTmcQ8QlZMd4iteRD",
"capa": false
},
{
"id": "sede-piso-4-academico",
"t": "Acadêmico",
"p": "sede",
"piso": "Piso 4",
"d": "1TsQ-shaZABmt0Kggm1QCt0z1AHmswPv9",
"capa": false
},
{
"id": "sede-piso-4-biblioteca",
"t": "Biblioteca",
"p": "sede",
"piso": "Piso 4",
"d": "15aVBtxqx5O6ZrrJBHPt3QgNDjnzoX3dV",
"capa": false
},
{
"id": "sede-piso-4-corredor",
"t": "Corredor",
"p": "sede",
"piso": "Piso 4",
"d": "1yHXy_4eW4F1ggQ43bQKcOfcY_OfA5Uu3",
"capa": false
},
{
"id": "sede-piso-4-sala-comercial-priv",
"t": "Sala comercial (privada)",
"p": "sede",
"piso": "Piso 4",
"d": "1AQeTTmOnPPbA1gBgK31N_MU24ZGSl6rU",
"capa": false
},
{
"id": "sede-piso-4-sala-comercial",
"t": "Sala comercial",
"p": "sede",
"piso": "Piso 4",
"d": "1Krb9pTdNq5sxHmqFl4vgT9F-mrAR1a8g",
"capa": false
},
{
"id": "sede-piso-4-sala-int1",
"t": "Sala internacional 1",
"p": "sede",
"piso": "Piso 4",
"d": "1YnG1FBDBznZGl_-7a6IzDHXXdA6EPaU3",
"capa": false
},
{
"id": "sede-piso-4-sala-professores",
"t": "Sala dos professores",
"p": "sede",
"piso": "Piso 4",
"d": "1zMj-PXipAJMtSwbSY8qz-phjFjwnpaWj",
"capa": false
},
{
"id": "sede-piso-4-sala-reuniao",
"t": "Sala de reunião",
"p": "sede",
"piso": "Piso 4",
"d": "1tUxXJow8gBY-GVMFcHtRxjM-iMLbWF12",
"capa": false
},
{
"id": "sede-piso-4-sala1",
"t": "Sala 1",
"p": "sede",
"piso": "Piso 4",
"d": "1x8s74yco_mUmTklCpym6-e0RTGxg3kbG",
"capa": false
},
{
"id": "sede-piso-4-sala2",
"t": "Sala 2",
"p": "sede",
"piso": "Piso 4",
"d": "16XKhnW6wY8SE9IeoOMSj8xT9HhxtaB3w",
"capa": false
},
{
"id": "sede-piso-4-sala3",
"t": "Sala 3",
"p": "sede",
"piso": "Piso 4",
"d": "1ioXLDq9PKrBIOTw7V68uKUARy8p6y2pX",
"capa": false
},
{
"id": "sede-piso-4-sala4",
"t": "Sala 4",
"p": "sede",
"piso": "Piso 4",
"d": "1twn942Wa2VoE5JLTdY6w5Pu_--tfchBu",
"capa": false
},
{
"id": "sede-piso-4-salastudio",
"t": "Sala estúdio",
"p": "sede",
"piso": "Piso 4",
"d": "1kW2zXdObJhneNJH_oZKaQZCxf8sBMmpc",
"capa": false
},
{
"id": "sede-00fachada",
"t": "Fachada",
"p": "sede",
"piso": "",
"d": "1bE1VUBVyQpxGAkiWCAJLQVhSr-vGp4md",
"capa": true
},
{
"id": "homero-00fachada",
"t": "Fachada",
"p": "homero",
"piso": "",
"d": "19L80dvCrC94gF6lZU-kk76vGtb5-X19G",
"capa": true
},
{
"id": "homero-box-clinica",
"t": "Box da clínica",
"p": "homero",
"piso": "",
"d": "1ZuHbq0HG7DrByfFhQln26TK8VwHouAsi",
"capa": false
},
{
"id": "homero-clinica-geral",
"t": "Clínica geral",
"p": "homero",
"piso": "",
"d": "1q6uuxbPGWfQEGxxujuJGxPzK1xz4fG-v",
"capa": false
},
{
"id": "homero-esterilizacao-1",
"t": "Esterilização 1",
"p": "homero",
"piso": "",
"d": "1zxefc0i6Cfv1jCY5dGgqWV5uQkJhzP59",
"capa": false
},
{
"id": "homero-esterilizacao-e-expurgo-2",
"t": "Esterilização e expurgo 2",
"p": "homero",
"piso": "",
"d": "17VPoSUpVMvuxmbanf8nuVl3ymcfd24pY",
"capa": false
},
{
"id": "homero-esterilizacao-e-expurgo-3",
"t": "Esterilização e expurgo 3",
"p": "homero",
"piso": "",
"d": "1oIJs-ttKaoQ1Mb_b_p942JY98NtrsZU9",
"capa": false
},
{
"id": "homero-laboratorio",
"t": "Laboratório",
"p": "homero",
"piso": "",
"d": "1La_CxcEuOLjujtIw_PhYbm3HIj_1tHev",
"capa": false
},
{
"id": "homero-recepcao-1-1",
"t": "Recepção 1.1",
"p": "homero",
"piso": "",
"d": "1AqNcn0V9Hu_6a_h7yOSBofyKfCXpeSbL",
"capa": false
},
{
"id": "homero-recepcao-1",
"t": "Recepção 1",
"p": "homero",
"piso": "",
"d": "1NnV8W7oTpyuhMu_XB_3_0ihysHnAti_e",
"capa": false
},
{
"id": "homero-recepcao-2",
"t": "Recepção 2",
"p": "homero",
"piso": "",
"d": "1rNLj7NBodC6tWHFA_Rv76K1wndLBaDw_",
"capa": false
},
{
"id": "auxiliar-00fachada-1",
"t": "Fachada 1",
"p": "auxiliar",
"piso": "",
"d": "1iU8GvZH3EfMASsGb10GG2KKdHFRWmXmE",
"capa": true
},
{
"id": "auxiliar-00fachada",
"t": "Fachada",
"p": "auxiliar",
"piso": "",
"d": "1mxzf8sh1wRhw7qx-EmTAt5FU0QttoeKg",
"capa": true
},
{
"id": "auxiliar-auditorio-1",
"t": "Auditório 1",
"p": "auxiliar",
"piso": "",
"d": "1BnhiKcMEVJDBSfj10XTEOCmEe1KkEwIY",
"capa": false
},
{
"id": "auxiliar-auditorio-2",
"t": "Auditório 2",
"p": "auxiliar",
"piso": "",
"d": "1xBVQ4CitDk5fJhquHcZWcyJAJSSiv2RK",
"capa": false
},
{
"id": "auxiliar-cadeiras-clinica",
"t": "Cadeiras da clínica",
"p": "auxiliar",
"piso": "",
"d": "1-0UZfBkUpAz-vKryrmcurER7OsCA36sa",
"capa": false
},
{
"id": "auxiliar-clinica-box",
"t": "Clínica box",
"p": "auxiliar",
"piso": "",
"d": "1P2G1vEz5WVAkcpsdpWKRPbRVLZnavyc-",
"capa": false
},
{
"id": "auxiliar-recepcao",
"t": "Recepção",
"p": "auxiliar",
"piso": "",
"d": "1gPY6wF4DrzraABgQepsjxP9525d39zp6",
"capa": false
},
{
"id": "auxiliar-sala-2",
"t": "Sala 2",
"p": "auxiliar",
"piso": "",
"d": "1pdI6_DnLMX4aRRW8kF_ongTeZO_0PYv-",
"capa": false
},
{
"id": "auxiliar-sala-de-estar",
"t": "Sala de estar",
"p": "auxiliar",
"piso": "",
"d": "1ydifCdoCqWYXK31bJQHZm5-c0op0iD8V",
"capa": false
},
{
"id": "auxiliar-sala-de-reuniao-e-aula",
"t": "Sala de reunião e aula",
"p": "auxiliar",
"piso": "",
"d": "1PO-iCncjzeYnC8U2LFHmknvKMEAw8_6H",
"capa": false
},
{
"id": "auditorio-00fachada",
"t": "Fachada",
"p": "auditorio",
"piso": "",
"d": "16areEOZJHYDPFA40-DafPQMVPmiNYCia",
"capa": true
},
{
"id": "auditorio-auditorio-1",
"t": "Auditório 1",
"p": "auditorio",
"piso": "",
"d": "15OoKCV5b8iM7XWPP_nOBrNSmszCZZvpS",
"capa": false
},
{
"id": "auditorio-auditorio-2",
"t": "Auditório 2",
"p": "auditorio",
"piso": "",
"d": "12Y8ZsUDIRiHZPqzVM2Sy1CmI39NKoGFg",
"capa": false
},
{
"id": "auditorio-auditorio-3",
"t": "Auditório 3",
"p": "auditorio",
"piso": "",
"d": "1R7IpZuJ7b7tcmqBX0ac9fDMPrMXlYb9v",
"capa": false
},
{
"id": "auditorio-auditorio-4",
"t": "Auditório 4",
"p": "auditorio",
"piso": "",
"d": "1xzTspfWPH6nkYkUTRINTdpdVQiEwd1Dp",
"capa": false
}
];
MM.area({
  id:'fotos', layout:'galeria',
  aviso:{pt:'Clique na foto para ver grande e baixar. "Original em alta" baixa o arquivo do Drive, sem compressão.', es:'Haz clic en la foto para verla grande y descargarla. "Original en alta" descarga el archivo de Drive, sin compresión.'},
  filtros:[
    {campo:'categoria', rotulo:{pt:'Prédio', es:'Edificio'}},
    {campo:'piso', rotulo:{pt:'Piso (prédio sede)', es:'Piso (edificio sede)'}}
  ],
  itens: FOTOS.map(function(f){
    var piso = f.piso ? {pt:f.piso.replace('Piso','Piso'), es:f.piso} : null;
    return {id:f.id, titulo:f.capa ? {pt:'Fachada', es:'Fachada'} : f.t, categoria:PRED[f.p], piso:piso,
      imagem:'../assets/fotos/predio/mini/' + f.id + '.jpg', detalheImagem:'../assets/fotos/predio/' + f.id + '.jpg',
      resumo:f.piso || null,
      links:[{rotulo:{pt:'Baixar (web, 1800 px)', es:'Descargar (web, 1800 px)'}, url:'../assets/fotos/predio/' + f.id + '.jpg', baixar:true},
             {rotulo:{pt:'Original em alta (Drive)', es:'Original en alta (Drive)'}, url:'https://drive.usercontent.google.com/download?id=' + f.d + '&export=download'}]};
  }).concat([
    {id:'tour-3d', titulo:{pt:'Tour 3D das clínicas 3, 4, 5 e 6', es:'Tour 3D de las clínicas 3, 4, 5 y 6'}, categoria:PRED.sede,
     resumo:{pt:'Passeio virtual em 360° pelas clínicas do prédio sede.', es:'Recorrido virtual en 360° por las clínicas del edificio sede.'},
     links:[{rotulo:{pt:'Abrir o tour', es:'Abrir el tour'}, url:'https://tour.panoee.net/tourclinicaunicpo/puerta-de-las-clinicas'}]},
    {id:'funcionarios', titulo:{pt:'Fotos dos funcionários', es:'Fotos de los funcionarios'}, categoria:{pt:'Funcionários', es:'Funcionarios'}, status:'preencher',
     resumo:{pt:'A receber. As fotos dos professores ficam no Perfil dos professores.', es:'Por recibir. Las fotos de los profesores están en el Perfil de los profesores.'}}
  ])
});
