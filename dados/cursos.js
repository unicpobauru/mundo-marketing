/* Materiais por curso.
   CURSOS: copiado do Gravações Técnicas em 25/11/2026 (turmas canceladas ficaram de fora).
   Quando o cronograma mudar, atualize as turmas aqui (ou, no futuro, leia direto do banco de dados).
   codigo = como o curso aparece na Videoteca, para contar e abrir os vídeos.
   Programa, valores e PDF ainda precisam ser preenchidos pelo marketing/comercial. */
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
"c_vinicius"
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
  aviso:{pt:'Turmas e datas de início copiadas do Gravações Técnicas em 25/11/2026. Programa, valores e PDF ainda estão a preencher.', es:'Grupos y fechas de inicio copiados de Grabaciones Técnicas el 25/11/2026. Programa, valores y PDF todavía están por completar.'},
  filtros:[
    {campo:'categoria', rotulo:{pt:'Tipo', es:'Tipo'}},
    {campo:'coordenador', rotulo:{pt:'Coordenador', es:'Coordinador'}, ordem:'alfa'},
    {campo:'situacao', rotulo:{pt:'Turmas', es:'Grupos'}}
  ],
  gerar: function(CAT){
    var hoje = new Date().toISOString().slice(0,10);
    var nVid = {};
    (CAT.items || []).forEach(function(v){ if (v.c) nVid[v.c] = (nVid[v.c] || 0) + 1; });
    var fmt = MM.fmtData;
    return CURSOS.map(function(c){
      var futuras = c.turmas.filter(function(t){ return t.inicio && t.inicio >= hoje; });
      var semData = c.turmas.filter(function(t){ return !t.inicio; }).length;
      var coords = c.coord.map(function(id){ return CURSOS_COORD[id] || id; });
      var nv = c.codigo ? (nVid[c.codigo] || 0) : 0;
      var turmasTxt = c.turmas.map(function(t){ return (t.t ? t.t + ': ' : '') + (t.inicio ? fmt(t.inicio) : '—'); }).join(' · ');
      return {
        id: c.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),
        titulo: c.nome,
        categoria: c.tipo === 'esp' ? {pt:'Especialização', es:'Especialización'} : {pt:'Diplomado', es:'Diplomado'},
        coordenador: coords,
        situacao: futuras.length ? {pt:'Com turma marcada', es:'Con grupo programado'} : (semData ? {pt:'Sem data', es:'Sin fecha'} : {pt:'Sem turma futura', es:'Sin grupo futuro'}),
        resumo: futuras.length ? {pt:'Próximo início: ' + fmt(futuras[0].inicio) + (futuras[0].t ? ' (' + futuras[0].t + ')' : ''), es:'Próximo inicio: ' + fmt(futuras[0].inicio) + (futuras[0].t ? ' (' + futuras[0].t + ')' : '')}
                               : {pt:'Sem turma futura com data', es:'Sin grupo futuro con fecha'},
        tags: nv ? [{pt: nv + ' vídeos', es: nv + ' videos'}] : [],
        status: 'preencher',
        campos: [
          {rotulo:{pt:'Coordenação', es:'Coordinación'}, valor: coords.join(', ')},
          {rotulo:{pt:'Turmas', es:'Grupos'}, valor: turmasTxt},
          {rotulo:{pt:'Vídeos na Videoteca', es:'Videos en la Videoteca'}, valor: c.codigo ? String(nv) : {pt:'sem código ligado', es:'sin código vinculado'}},
          {rotulo:{pt:'Programa', es:'Programa'}, valor:{pt:'a preencher', es:'por completar'}},
          {rotulo:{pt:'Carga horária', es:'Carga horaria'}, valor:{pt:'a preencher', es:'por completar'}},
          {rotulo:{pt:'Valores', es:'Valores'}, valor:{pt:'a preencher', es:'por completar'}},
          {rotulo:{pt:'PDF do curso', es:'PDF del curso'}, valor:{pt:'a preencher', es:'por completar'}}
        ],
        videos: nv ? {q: c.codigo, rotulo:{pt:'Ver os ' + nv + ' vídeos deste curso', es:'Ver los ' + nv + ' videos de este curso'}} : null
      };
    });
  }
});
