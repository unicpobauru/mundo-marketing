/* Provas sociais — calculadas a partir da Videoteca, então se atualizam sozinhas quando o catálogo muda.
   Os números institucionais (alunos formados, países) ainda precisam ser informados. */
MM.area({
  id:'provas', layout:'cards',
  filtros:[{campo:'categoria', rotulo:{pt:'Tipo', es:'Tipo'}}],
  gerar: function(CAT){
    var items = CAT.items || [], cats = (CAT.meta && CAT.meta.cats) || [];
    var deps = items.filter(function(v){ return v.t === 'Depoimento'; });
    var paises = {};
    deps.forEach(function(v){ String(v.pa || '').split(/\s*\/\s*/).forEach(function(p){ p = p.trim().replace('Rep. Dominicana','República Dominicana'); if (p && p !== 'vários') paises[p] = 1; }); });
    var bombou = items.filter(function(v){ return v.ig && v.ig.b; });
    var nPaises = Object.keys(paises).length;
    this.destaques = [
      {valor:String(deps.length), rotulo:{pt:'depoimentos em vídeo', es:'testimonios en video'}},
      {valor:String(nPaises), rotulo:{pt:'países nos depoimentos', es:'países en los testimonios'}},
      {valor:String(bombou.length), rotulo:{pt:'vídeos que bombaram no Instagram', es:'videos con éxito en Instagram'}},
      {valor:'—', rotulo:{pt:'alunos formados', es:'alumnos graduados'}, status:'preencher'}
    ];
    var ES = {'Corpo docente e nível de ensino':'Cuerpo docente y nivel de enseñanza','Infraestrutura e Tecnologia':'Infraestructura y tecnología','Título validado':'Título convalidado','Técnica e Segurança':'Técnica y seguridad','Superação de Medo':'Superación del miedo','Pacientes':'Pacientes','Língua':'Idioma','Família e distância da própria':'Familia y distancia','Clínica e empreendedorismo':'Clínica y emprendimiento','Flexibilidade de regresso ao país e aprendizado modular':'Flexibilidad para volver al país y aprendizaje modular','Ascensão profissional':'Crecimiento profesional','Investimento compensado':'Inversión que vale la pena','Troca de faculdade':'Cambio de facultad','Comparação de País':'Comparación entre países','Visto e documentação':'Visa y documentación','Acolhimento e suporte da equipe':'Acogida y apoyo del equipo'};
    var porTema = cats.map(function(c){
      var n = deps.filter(function(v){ return (v.ca || []).indexOf(c) >= 0; }).length;
      return {
        id:'tema-' + MM.norm(c).replace(/[^a-z0-9]+/g,'-'),
        titulo:{pt:c, es:ES[c] || c},
        categoria:{pt:'Depoimentos por objeção', es:'Testimonios por objeción'},
        resumo:{pt:n + ' depoimentos que respondem a este tema.', es:n + ' testimonios que responden a este tema.'},
        texto:{pt:'Use quando o lead trouxer essa dúvida ou objeção. Abra os vídeos, escolha um do país do lead e mande na versão de 16 MB.', es:'Úsalo cuando el lead traiga esta duda u objeción. Abre los videos, elige uno del país del lead y envíalo en la versión de 16 MB.'},
        videos:{q:c, rotulo:{pt:'Ver os ' + n + ' depoimentos', es:'Ver los ' + n + ' testimonios'}},
        _n:n
      };
    }).filter(function(x){ return x._n > 0; }).sort(function(a,b){ return b._n - a._n; });
    var top = bombou.slice().sort(function(a,b){ return ((b.ig.dash ? b.ig.s : 0) - (a.ig.dash ? a.ig.s : 0)); }).slice(0, 24).map(function(v){
      return {
        id:'video-' + v.v,
        titulo:v.no,
        categoria:{pt:'Vídeo que bombou', es:'Video con éxito'},
        resumo:v.de,
        tags:[v.c, v.pa].filter(Boolean),
        campos:[
          {rotulo:{pt:'Curso', es:'Curso'}, valor:v.c},
          {rotulo:{pt:'País', es:'País'}, valor:v.pa},
          {rotulo:'Instagram', valor: v.ig.dash ? {pt:(v.ig.vw || 0).toLocaleString('pt-BR') + ' visualizações', es:(v.ig.vw || 0).toLocaleString('es') + ' visualizaciones'} : {pt:(v.ig.l || 0) + ' curtidas', es:(v.ig.l || 0) + ' me gusta'}}
        ],
        videos:{q:'"' + v.v + '"', rotulo:{pt:'Abrir na Videoteca', es:'Abrir en la Videoteca'}}
      };
    });
    var institucional = [
      {id:'numeros-unicpo', titulo:{pt:'Números da UniCPO', es:'Números de UniCPO'}, categoria:{pt:'Números institucionais', es:'Números institucionales'}, status:'preencher',
       resumo:{pt:'Alunos formados, países atendidos, anos de história, professores, nota no MEC.', es:'Alumnos graduados, países atendidos, años de historia, profesores, nota en el MEC.'},
       texto:{pt:'Preencher com os números oficiais. Eles aparecem no topo desta página e podem virar arte para o comercial.', es:'Completar con los números oficiales. Aparecen arriba en esta página y pueden convertirse en arte para el comercial.'}},
      {id:'prints-depoimentos', titulo:{pt:'Prints de depoimentos escritos', es:'Capturas de testimonios escritos'}, categoria:{pt:'Números institucionais', es:'Números institucionales'}, status:'preencher',
       resumo:{pt:'Mensagens e avaliações de alunos, com autorização, para mandar no WhatsApp.', es:'Mensajes y evaluaciones de alumnos, con autorización, para enviar por WhatsApp.'}}
    ];
    return institucional.concat(porTema, top);
  }
});
