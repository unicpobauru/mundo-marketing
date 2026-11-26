/* Materiais por curso.
   CURSOS: copiado do Gravações Técnicas em 25/11/2026 (turmas canceladas ficaram de fora).
   Quando o cronograma mudar, atualize as turmas aqui (ou, no futuro, leia direto do banco de dados).
   codigo = como o curso aparece na Videoteca, para contar e abrir os vídeos.
   Turmas, valores, cronograma de módulos e PDFs vêm de dados/cursos-material.js (material comercial do Drive),
   gerado por ferramentas/cursos/gerar_cursos.py. Quando há turma nos dois, vale a do material comercial. */
var CURSOS_COORD = {"c_eric": "Dr. Eric Tinoco", "c_vinicius": "Dr. Vinicius Porto", "c_gustavo": "Dr. Luis Gustavo Tramontin", "c_henrique": "Dr. Henrique Quevedo", "c_john": "Dr. John Alexis", "c_augusto": "Dr. Augusto Rodrigues", "c_juan": "Dr. Juan Carlos Castañeda", "c_fabricio": "Dr. Fabricio Valarelli", "c_andreia": "Dra. Andreia Pavani", "c_vanessa": "Dra. Vanessa Dainezi", "c_patrick": "Dr. Patrick Alves", "c_suedam": "Dr. Valdey Suedam", "c_mariel": "Dra. Mariel Ruivo Biancardi", "c_claudia": "Dra. Claudia Pinheiro"};
var CURSOS = [
{
"nome": "Dipl. AOF Step One",
"tipo": "dipl",
"coord": [
"c_augusto"
],
"codigo": "DIPL AOF STEP ONE",
"turmas": [
{
"t": "T379",
"inicio": "2027-01-18"
}
]
},
{
"nome": "Dipl. AOF Step Two",
"tipo": "dipl",
"coord": [
"c_augusto"
],
"codigo": "DIPL AOF STEP TWO",
"turmas": [
{
"t": "T382",
"inicio": "2027-01-25"
}
]
},
{
"nome": "Dipl. Alargamiento de Corona Estético y Funcional",
"tipo": "dipl",
"coord": [
"c_andreia"
],
"codigo": "DIPL AUMENTO DE CORONA",
"turmas": [
{
"t": "",
"inicio": ""
}
]
},
{
"nome": "Dipl. Alineadores Orto",
"tipo": "dipl",
"coord": [
"c_fabricio"
],
"codigo": "DIPL ALIN ORTO",
"turmas": [
{
"t": "T396",
"inicio": "2027-05-03"
}
]
},
{
"nome": "Dipl. Avanzado en Alineadores Ortodóncicos",
"tipo": "dipl",
"coord": [
"c_fabricio"
],
"codigo": "DIPL ALIN ORTO",
"turmas": [
{
"t": "",
"inicio": ""
}
]
},
{
"nome": "Dipl. Biomecánica Ortodóncica",
"tipo": "dipl",
"coord": [
"c_fabricio"
],
"codigo": "DIPL BIOMEC ORTO",
"turmas": [
{
"t": "T386",
"inicio": "2027-04-12"
}
]
},
{
"nome": "Dipl. Blefaroplastia y Lifting de Cejas",
"tipo": "dipl",
"coord": [
"c_gustavo"
],
"codigo": "DIPL BLEFAROPLASTIA",
"turmas": [
{
"t": "",
"inicio": "2026-11-30"
}
]
},
{
"nome": "Dipl. Carillas de Resina",
"tipo": "dipl",
"coord": [
"c_john"
],
"codigo": "DIPL CARILLAS",
"turmas": [
{
"t": "T388",
"inicio": "2027-03-15"
}
]
},
{
"nome": "Dipl. Cirugía Virtual Guiada",
"tipo": "dipl",
"coord": [
"c_eric"
],
"codigo": "",
"turmas": [
{
"t": "T393",
"inicio": "2027-05-10"
}
]
},
{
"nome": "Dipl. DDE Endo",
"tipo": "dipl",
"coord": [
"c_claudia"
],
"codigo": "DIPL ENDO",
"turmas": [
{
"t": "T370",
"inicio": "2026-11-16"
},
{
"t": "T391",
"inicio": "2027-04-26"
}
]
},
{
"nome": "Dipl. Excelencia en Laminados Cerámicos",
"tipo": "dipl",
"coord": [
"c_suedam"
],
"codigo": "DIPL EXCELENCIA LAMINADO CERÂMICA",
"turmas": [
{
"t": "T394",
"inicio": "2027-03-01"
}
]
},
{
"nome": "Dipl. Implantes para Iniciantes",
"tipo": "dipl",
"coord": [
"c_eric"
],
"codigo": "DIPL IMPLANTES BASIC",
"turmas": [
{
"t": "T392",
"inicio": "2027-04-05"
}
]
},
{
"nome": "Dipl. Master Implante",
"tipo": "dipl",
"coord": [
"c_eric"
],
"codigo": "",
"turmas": [
{
"t": "T398",
"inicio": "2027-02-01"
}
]
},
{
"nome": "Dipl. Master en Cirugías Plásticas Periodontales y Periimplantarias",
"tipo": "dipl",
"coord": [
"c_andreia"
],
"codigo": "DIPL MASTER IMPL PERIO",
"turmas": [
{
"t": "T389",
"inicio": "2027-04-05"
}
]
},
{
"nome": "Dipl. Mini Implantes",
"tipo": "dipl",
"coord": [
"c_fabricio"
],
"codigo": "DIPL MINI IMPL",
"turmas": [
{
"t": "T395",
"inicio": "2027-04-19"
}
]
},
{
"nome": "Dipl. Odontopediatría",
"tipo": "dipl",
"coord": [
"c_vanessa"
],
"codigo": "DIPL ODONTOPEDIATRIA",
"turmas": [
{
"t": "T377",
"inicio": "2027-03-01"
}
]
},
{
"nome": "Dipl. Ortodoncia Preventiva",
"tipo": "dipl",
"coord": [
"c_fabricio"
],
"codigo": "DIPL ORTO PREV",
"turmas": [
{
"t": "T385",
"inicio": "2027-03-08"
}
]
},
{
"nome": "Dipl. Prótesis Metal Free",
"tipo": "dipl",
"coord": [
"c_suedam"
],
"codigo": "DIPL METAL FREE",
"turmas": [
{
"t": "",
"inicio": ""
}
]
},
{
"nome": "Dipl. Prótesis sobre Implante",
"tipo": "dipl",
"coord": [
"c_eric"
],
"codigo": "DIPL PROTESIS SOBRE IMPLANTES",
"turmas": [
{
"t": "",
"inicio": ""
}
]
},
{
"nome": "Dipl. Tercer Molar",
"tipo": "dipl",
"coord": [
"c_eric"
],
"codigo": "DIPL 3 MOLAR",
"turmas": [
{
"t": "T373",
"inicio": "2026-11-09"
},
{
"t": "T387",
"inicio": "2027-03-29"
},
{
"t": "T397",
"inicio": "2027-07-19"
}
]
},
{
"nome": "Esp. AOF",
"tipo": "esp",
"coord": [
"c_augusto"
],
"codigo": "ESP AOF",
"turmas": [
{
"t": "T33",
"inicio": "2026-11-23"
},
{
"t": "T34",
"inicio": "2027-03-01"
},
{
"t": "T35",
"inicio": "2027-07-26"
}
]
},
{
"nome": "Esp. Dentística",
"tipo": "esp",
"coord": [
"c_john",
"c_juan"
],
"codigo": "ESP DENTISTICA",
"turmas": [
{
"t": "T41",
"inicio": "2026-11-09"
},
{
"t": "T42",
"inicio": "2027-03-22"
},
{
"t": "T43",
"inicio": "2027-06-28"
}
]
},
{
"nome": "Esp. Endodoncia",
"tipo": "esp",
"coord": [
"c_claudia"
],
"codigo": "ESP ENDO",
"turmas": [
{
"t": "T56 (9 módulos)",
"inicio": "2027-03-08"
},
{
"t": "T57 (7 módulos)",
"inicio": "2027-05-31"
}
]
},
{
"nome": "Esp. Implante",
"tipo": "esp",
"coord": [
"c_eric",
"c_patrick"
],
"codigo": "ESP IMPLANTES",
"turmas": [
{
"t": "T40",
"inicio": "2027-03-15"
},
{
"t": "T41",
"inicio": "2027-06-07"
}
]
},
{
"nome": "Esp. Odontopediatría",
"tipo": "esp",
"coord": [
"c_vanessa"
],
"codigo": "ESP ODONTOPEDIATRIA",
"turmas": [
{
"t": "T19",
"inicio": "2027-03-29"
}
]
},
{
"nome": "Esp. Ortodoncia",
"tipo": "esp",
"coord": [
"c_fabricio"
],
"codigo": "ESP ORTO",
"turmas": [
{
"t": "T63",
"inicio": "2026-11-16"
},
{
"t": "T64",
"inicio": "2027-03-22"
},
{
"t": "T65",
"inicio": "2027-07-26"
}
]
},
{
"nome": "Esp. Periodoncia",
"tipo": "esp",
"coord": [
"c_andreia"
],
"codigo": "ESP PERIO",
"turmas": [
{
"t": "T11",
"inicio": "2026-11-09"
},
{
"t": "T12",
"inicio": "2027-03-08"
}
]
},
{
"nome": "Esp. Rehabilitación Oral",
"tipo": "esp",
"coord": [
"c_vinicius",
"c_henrique"
],
"codigo": "ESP PROTESIS",
"turmas": [
{
"t": "T36",
"inicio": "2027-06-07"
}
]
}
];
MM.area({
  id:'cursos', layout:'cards',
  aviso:{pt:'Turmas, valores e PDFs do material comercial (Drive, 25/11/2026). Valores em dólar (US$).', es:'Grupos, valores y PDF del material comercial (Drive, 25/11/2026). Valores en dólares (US$).'},
  botoes:[
    {rotulo:{pt:'Documento informativo comercial (PT)', es:'Documento informativo comercial (PT)'}, url:'../assets/cursos/geral/documento-informativo-comercial-pt.pdf', baixar:true},
    {rotulo:{pt:'Documento informativo comercial (ES)', es:'Documento informativo comercial (ES)'}, url:'../assets/cursos/geral/documento-informativo-comercial-es.docx', baixar:true}
  ],
  filtros:[
    {campo:'categoria', rotulo:{pt:'Tipo', es:'Tipo'}},
    {campo:'coordenador', rotulo:{pt:'Coordenador', es:'Coordinador'}, ordem:'alfa'},
    {campo:'situacao', rotulo:{pt:'Turmas', es:'Grupos'}}
  ],
  gerar: function(CAT){
    var hoje = new Date().toISOString().slice(0,10);
    var MAT = window.CURSOS_MATERIAL || {turmas:[], cursos:{}};
    var nVid = {};
    (CAT.items || []).forEach(function(v){ if (v.c) nVid[v.c] = (nVid[v.c] || 0) + 1; });
    var fmt = MM.fmtData;
    var iso = function(d){ var m = /^(\d\d)\/(\d\d)\/(\d{4})$/.exec(d || ''); return m ? m[3] + '-' + m[2] + '-' + m[1] : ''; };
    var usd = function(v){ return v ? 'US$ ' + v : ''; };
    return CURSOS.map(function(c){
      // turmas: as do material comercial têm prioridade; as do Gravações Técnicas completam
      var mat = MAT.turmas.filter(function(t){ return t.curso === c.nome; });
      var turmas = mat.map(function(t){ return {t:t.codigo.replace('-2', ' (entrada 2)'), inicio:iso(t.inicio), m:t}; });
      c.turmas.forEach(function(t){
        if (!turmas.some(function(x){ return t.t && x.t.indexOf(t.t.split(' ')[0]) === 0; }) && !(t.t === '' && turmas.length)) turmas.push({t:t.t, inicio:t.inicio});
      });
      turmas.sort(function(a,b){ return (a.inicio || '9').localeCompare(b.inicio || '9'); });
      var futuras = turmas.filter(function(t){ return t.inicio && t.inicio >= hoje; });
      var semData = turmas.filter(function(t){ return !t.inicio; }).length;
      var coords = c.coord.map(function(id){ return CURSOS_COORD[id] || id; });
      var nv = c.codigo ? (nVid[c.codigo] || 0) : 0;
      var ger = MAT.cursos[c.nome] || {};
      var prox = futuras[0];
      var preco = prox && prox.m ? (prox.m.tipo === 'esp' ? {pt:' · mensalidade a partir de ' + usd(prox.m.mensalidade), es:' · cuota desde ' + usd(prox.m.mensalidade)}
                                                         : {pt:' · ' + usd(prox.m.valor), es:' · ' + usd(prox.m.valor)}) : {pt:'', es:''};
      // detalhe: uma seção por turma (estrutura, valores, cronograma recolhível e PDFs da turma)
      var secoes = [], links = [], conferir = [];
      turmas.forEach(function(t){
        var m = t.m;
        if (!m){ secoes.push({titulo:t.t || {pt:'Turma', es:'Grupo'}, linhas:[{pt:(t.inicio ? 'Início ' + fmt(t.inicio) + '. ' : '') + 'Sem material comercial ainda (data do Gravações Técnicas).', es:(t.inicio ? 'Inicio ' + fmt(t.inicio) + '. ' : '') + 'Sin material comercial todavía (fecha de Grabaciones Técnicas).'}]}); return; }
        var lin = [];
        lin.push({pt:[m.inicio && ('Início ' + m.inicio), m.termino && ('término ' + m.termino)].filter(Boolean).join(' · '),
                  es:[m.inicio && ('Inicio ' + m.inicio), m.termino && ('fin ' + m.termino)].filter(Boolean).join(' · ')});
        var est = [m.modulos && (m.modulos + ' módulos'), m.duracao && (m.duracao + ' meses'), m.periodicidade && m.periodicidade.toLowerCase(), m.carga && (m.carga + ' h')].filter(Boolean).join(' · ');
        if (est) lin.push(est);
        if (m.mensalidade){
          lin.push({pt:'Matrícula ' + usd(m.matricula) + ' · mensalidade ' + usd(m.mensalidade) + ' com pontualidade (' + usd(m.mensalidade_cheia) + ' cheia)',
                    es:'Matrícula ' + usd(m.matricula) + ' · cuota ' + usd(m.mensalidade) + ' con puntualidad (' + usd(m.mensalidade_cheia) + ' sin descuento)'});
          lin.push({pt:'Total ' + usd(m.total) + ' com desconto (' + usd(m.total_cheio) + ' cheio)', es:'Total ' + usd(m.total) + ' con descuento (' + usd(m.total_cheio) + ' sin descuento)'});
        } else if (m.valor){
          lin.push({pt:'Matrícula ' + usd(m.matricula) + ' · valor do curso ' + usd(m.valor), es:'Matrícula ' + usd(m.matricula) + ' · valor del curso ' + usd(m.valor)});
        }
        if (m.conferir){ lin.push({pt:'Conferir: ' + m.conferir, es:'Verificar: ' + m.conferir}); conferir.push(t.t); }
        var a = m.arquivos || {}, ls = [];
        if (a.completo) ls.push({rotulo:{pt:'Apresentação (PDF)', es:'Presentación (PDF)'}, url:'../' + a.completo, baixar:true});
        if (a.resumido) ls.push({rotulo:{pt:'Resumida (PDF)', es:'Resumida (PDF)'}, url:'../' + a.resumido, baixar:true});
        if (a.informativo) ls.push({rotulo:{pt:'Informativo da turma', es:'Informativo del grupo'}, url:'../' + a.informativo, baixar:true});
        if (a.cronograma) ls.push({rotulo:{pt:'Cronograma (imagem)', es:'Cronograma (imagen)'}, url:'../' + a.cronograma, baixar:true});
        secoes.push({titulo:{pt:'Turma ' + t.t, es:'Grupo ' + t.t}, linhas:lin,
          recolhido:{titulo:{pt:'Datas dos ' + (m.cronograma || []).length + ' módulos', es:'Fechas de los ' + (m.cronograma || []).length + ' módulos'},
                     linhas:(m.cronograma || []).map(function(r){ return {pt:'Módulo ' + r[0] + ': ' + r[1] + ' a ' + r[2], es:'Módulo ' + r[0] + ': ' + r[1] + ' al ' + r[2]}; })},
          links:ls});
      });
      if (ger.matriz) links.push({rotulo:{pt:'Matriz curricular', es:'Matriz curricular'}, url:'../' + ger.matriz, baixar:true});
      if (ger.apoio) links.push({rotulo:{pt:'Material de apoio', es:'Material de apoyo'}, url:'../' + ger.apoio, baixar:true});
      return {
        id: c.nome.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),
        titulo: c.nome,
        categoria: c.tipo === 'esp' ? {pt:'Especialização', es:'Especialización'} : {pt:'Diplomado', es:'Diplomado'},
        coordenador: coords,
        situacao: futuras.length ? {pt:'Com turma marcada', es:'Con grupo programado'} : (semData ? {pt:'Sem data', es:'Sin fecha'} : {pt:'Sem turma futura', es:'Sin grupo futuro'}),
        resumo: prox ? {pt:'Próximo início: ' + fmt(prox.inicio) + ' (' + prox.t + ')' + preco.pt, es:'Próximo inicio: ' + fmt(prox.inicio) + ' (' + prox.t + ')' + preco.es}
                     : {pt:'Sem turma futura com data', es:'Sin grupo futuro con fecha'},
        tags: nv ? [{pt: nv + ' vídeos', es: nv + ' videos'}] : [],
        status: conferir.length ? 'confirmar' : (mat.length ? null : 'preencher'),
        secoes: secoes,
        campos: [
          {rotulo:{pt:'Coordenação', es:'Coordinación'}, valor: coords.join(', ')},
          {rotulo:{pt:'Vídeos na Videoteca', es:'Videos en la Videoteca'}, valor: c.codigo ? String(nv) : {pt:'sem código ligado', es:'sin código vinculado'}}
        ],
        links: links,
        videos: nv ? {q: c.codigo, rotulo:{pt:'Ver os ' + nv + ' vídeos deste curso', es:'Ver los ' + nv + ' videos de este curso'}} : null
      };
    });
  }
});
