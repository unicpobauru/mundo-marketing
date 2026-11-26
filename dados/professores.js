/* Perfil dos professores.
   Para preencher, edite cada linha abaixo:
   - especialidade  {pt, es}. As que estão preenchidas foram deduzidas dos cursos que a pessoa coordena (conferir).
   - instagram      só o @, sem o link. Ex.: "unicpo" ou "@unicpo"
   - telefone       com DDI e DDD. Ex.: "+55 14 99999-9999". Vira botão de WhatsApp.
   Coordenadores: copiados do Gravações Técnicas em 25/11/2026 (nome, foto e cursos que coordenam).
   chave = parte do nome usada para achar os vídeos da pessoa na Videoteca. */
var PROFESSORES = [
  {"id": "andreia", "nome": "Dra. Andreia Pavani", "especialidade": {"pt": "Periodontia", "es": "Periodoncia"}, "instagram": "andreia.psp", "telefone": "+55 14 99136-5816", "foto": true, "coord": true, "cursos": ["Dipl. Alargamiento de Corona Estético y Funcional", "Dipl. Master en Cirugías Plásticas Periodontales y Periimplantarias", "Esp. Periodoncia"], "chave": "andreia"},
  {"id": "augusto", "nome": "Dr. Augusto Rodrigues", "especialidade": {"pt": "Harmonização Orofacial", "es": "Armonización Orofacial"}, "instagram": "dr.augustorodrigues", "telefone": "+55 14 99111-9865", "foto": true, "coord": true, "cursos": ["Dipl. AOF Step One", "Dipl. AOF Step Two", "Esp. AOF"], "chave": "augusto rodrigues"},
  {"id": "claudia", "nome": "Dra. Claudia Pinheiro", "especialidade": {"pt": "Endodontia", "es": "Endodoncia"}, "instagram": "dra.claudia.pinheiro", "telefone": "+55 14 99124-8056", "foto": true, "coord": true, "cursos": ["Dipl. DDE Endo", "Esp. Endodoncia"], "chave": "claudia pinheiro"},
  {"id": "eric", "nome": "Dr. Eric Tinoco", "especialidade": {"pt": "Implantodontia", "es": "Implantología"}, "instagram": "dr.erictinoco", "telefone": "+55 14 99118-6968", "foto": true, "coord": true, "cursos": ["Dipl. Cirugía Virtual Guiada", "Dipl. Implantes para Iniciantes", "Dipl. Master Implante", "Dipl. Prótesis sobre Implante", "Dipl. Tercer Molar", "Esp. Implante"], "chave": "eric tinoco"},
  {"id": "fabricio", "nome": "Dr. Fabricio Valarelli", "especialidade": {"pt": "Ortodontia", "es": "Ortodoncia"}, "instagram": "", "telefone": "", "foto": true, "coord": true, "cursos": ["Dipl. Alineadores Orto", "Dipl. Avanzado en Alineadores Ortodóncicos", "Dipl. Biomecánica Ortodóncica", "Dipl. Mini Implantes", "Dipl. Ortodoncia Preventiva", "Esp. Ortodoncia"], "chave": "valarelli"},
  {"id": "henrique", "nome": "Dr. Henrique Quevedo", "especialidade": null, "instagram": "profhenriquemuller", "telefone": "+55 14 99832-9218", "foto": true, "coord": true, "cursos": [], "chave": "quevedo"},
  {"id": "john", "nome": "Dr. John Alexis", "especialidade": {"pt": "Dentística", "es": "Odontología Restauradora"}, "instagram": "johnalexis.dominguez", "telefone": "+51 949 725 704", "foto": true, "coord": true, "cursos": ["Dipl. Carillas de Resina", "Esp. Dentística"], "chave": "john alexis"},
  {"id": "juan", "nome": "Dr. Juan Carlos Castañeda", "especialidade": {"pt": "Dentística", "es": "Odontología Restauradora"}, "instagram": "juancarloscastanedaespinosa", "telefone": "+55 14 99168-0686", "foto": true, "coord": true, "cursos": ["Esp. Dentística"], "chave": "juan carlos"},
  {"id": "gustavo", "nome": "Dr. Luis Gustavo Tramontin", "especialidade": null, "instagram": "", "telefone": "", "foto": false, "coord": true, "cursos": ["Dipl. Blefaroplastia y Lifting de Cejas"], "chave": "tramontin"},
  {"id": "mariel", "nome": "Dra. Mariel Ruivo Biancardi", "especialidade": null, "instagram": "", "telefone": "", "foto": false, "coord": true, "cursos": [], "chave": "mariel"},
  {"id": "patrick", "nome": "Dr. Patrick Alves", "especialidade": {"pt": "Implantodontia", "es": "Implantología"}, "instagram": "patrick_alves11", "telefone": "+55 14 99163-9276", "foto": true, "coord": true, "cursos": ["Esp. Implante"], "chave": "patrick"},
  {"id": "suedam", "nome": "Dr. Valdey Suedam", "especialidade": {"pt": "Prótese", "es": "Prótesis"}, "instagram": "suedamodontologia", "telefone": "+55 14 99773-7550", "foto": true, "coord": true, "cursos": ["Dipl. Excelencia en Laminados Cerámicos", "Dipl. Prótesis Metal Free"], "chave": "suedam"},
  {"id": "vanessa", "nome": "Dra. Vanessa Dainezi", "especialidade": {"pt": "Odontopediatria", "es": "Odontopediatría"}, "instagram": "", "telefone": "", "foto": true, "coord": true, "cursos": ["Dipl. Odontopediatría", "Esp. Odontopediatría"], "chave": "dainezi"},
  {"id": "vinicius", "nome": "Dr. Vinicius Porto", "especialidade": {"pt": "Reabilitação Oral", "es": "Rehabilitación Oral"}, "instagram": "viniciuscarvalhoporto", "telefone": "+55 14 99785-3998", "foto": true, "coord": true, "cursos": ["Esp. Rehabilitación Oral"], "chave": "vinicius"},
  {"id": "thiago", "nome": "Dr. Thiago Tinoco", "especialidade": null, "instagram": "", "telefone": "", "foto": false, "coord": false, "cursos": [], "chave": "thiago tinoco"},
  {"id": "renzo", "nome": "Prof. Dr. Renzo Iwasaki", "especialidade": null, "instagram": "", "telefone": "", "foto": false, "coord": false, "cursos": [], "chave": "iwasaki"},
  {"id": "ludmila", "nome": "Profª Dra. Ludmila Lima", "especialidade": null, "instagram": "", "telefone": "", "foto": false, "coord": false, "cursos": [], "chave": "ludmila"},
  {"id": "marcelo", "nome": "Prof. Dr. Marcelo Valerio", "especialidade": null, "instagram": "", "telefone": "", "foto": false, "coord": false, "cursos": [], "chave": "marcelo valerio"},
  {"id": "tabata", "nome": "Dra. Tábata Ribas", "especialidade": null, "instagram": "", "telefone": "", "foto": false, "coord": false, "cursos": [], "chave": "tabata"}
];
MM.area({
  id:'professores', layout:'perfis',
  filtros:[{campo:'categoria', rotulo:{pt:'Papel', es:'Rol'}}],
  gerar: function(CAT){
    var norm = MM.norm, PREENCHER = {pt:'a preencher', es:'por completar'};
    return PROFESSORES.map(function(p){
      var n = (CAT.items || []).filter(function(v){ return norm((v.p || '') + ' ' + (v.qa || '')).indexOf(p.chave) >= 0; });
      var ig = String(p.instagram || '').trim().replace(/^@/, '').replace(/^https?:\/\/(www\.)?instagram\.com\//, '').replace(/\/.*$/, '');
      var tel = String(p.telefone || '').trim(), digitos = tel.replace(/\D/g, '');
      var links = [];
      if (ig) links.push({rotulo:'Instagram', url:'https://instagram.com/' + ig});
      if (digitos) links.push({rotulo:'WhatsApp', url:'https://wa.me/' + digitos});
      return {
        id: p.id, titulo: p.nome,
        foto: p.foto ? '../assets/fotos/professores/' + p.id + '.jpg' : null,
        categoria: p.coord ? {pt:'Coordenador(a)', es:'Coordinador(a)'} : {pt:'Professor(a)', es:'Profesor(a)'},
        especialidade: p.especialidade,
        contato: [ig ? '@' + ig : null, tel || null].filter(Boolean).join(' · '),
        resumo: p.cursos.length ? p.cursos.slice(0,2).join(' · ') + (p.cursos.length > 2 ? ' +' + (p.cursos.length - 2) : '') : null,
        status: (ig && digitos && p.especialidade) ? null : 'preencher',
        campos: [
          {rotulo:{pt:'Especialidade', es:'Especialidad'}, valor: p.especialidade || PREENCHER},
          {rotulo:'Instagram', valor: ig ? '@' + ig : PREENCHER},
          {rotulo:{pt:'Telefone', es:'Teléfono'}, valor: tel || PREENCHER},
          {rotulo:{pt:'Coordena', es:'Coordina'}, valor: p.cursos.join(', ')}
        ],
        links: links,
        videos: n.length ? {q: p.chave, rotulo:{pt:'Ver vídeos na Videoteca', es:'Ver videos en la Videoteca'}} : null
      };
    });
  }
});
