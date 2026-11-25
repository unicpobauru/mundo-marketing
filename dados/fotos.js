/* Banco de fotos — cada foto é um item com imagem, categoria e autorização de uso.
   autorizacao: 'Autorizada' | 'Sem autorização' | 'A confirmar'
   Só use em anúncio ou redes as fotos marcadas como "Autorizada".
   Para acrescentar: salve a foto em assets/fotos/<categoria>/ e crie um item. */
var AUT = {
  ok:{pt:'Autorizada', es:'Autorizada'},
  conf:{pt:'A confirmar', es:'Por confirmar'},
  nao:{pt:'Sem autorização', es:'Sin autorización'}
};
var PROF = [
  ['andreia','Dra. Andreia Pavani'],['augusto','Dr. Augusto Rodrigues'],['claudia','Dra. Claudia Pinheiro'],['eric','Dr. Eric Tinoco'],
  ['fabricio','Dr. Fabricio Valarelli'],['henrique','Dr. Henrique Quevedo'],['john','Dr. John Alexis'],['juan','Dr. Juan Carlos Castañeda'],
  ['patrick','Dr. Patrick Alves'],['suedam','Dr. Valdey Suedam'],['vanessa','Dra. Vanessa Dainezi'],['vinicius','Dr. Vinicius Porto']
];
MM.area({
  id:'fotos', layout:'galeria',
  aviso:{pt:'Antes de usar uma foto em anúncio ou rede social, confira se ela está marcada como "Autorizada". Fotos de alunos sempre precisam de autorização por escrito.', es:'Antes de usar una foto en un anuncio o red social, verifica que esté marcada como "Autorizada". Las fotos de alumnos siempre necesitan autorización por escrito.'},
  filtros:[
    {campo:'categoria', rotulo:{pt:'Categoria', es:'Categoría'}},
    {campo:'autorizacao', rotulo:{pt:'Autorização', es:'Autorización'}}
  ],
  itens: PROF.map(function(p){
    return {id:'prof-' + p[0], titulo:p[1], categoria:{pt:'Professores',es:'Profesores'}, imagem:'../assets/fotos/professores/' + p[0] + '.jpg',
      autorizacao:AUT.conf, status:'confirmar',
      campos:[{rotulo:{pt:'Autorização',es:'Autorización'}, valor:AUT.conf},{rotulo:{pt:'Origem',es:'Origen'}, valor:{pt:'Cadastro de coordenadores do Gravações Técnicas',es:'Registro de coordinadores de Grabaciones Técnicas'}}]};
  }).concat([
    {id:'ex-equipe', titulo:{pt:'Equipe do marketing',es:'Equipo de marketing'}, categoria:{pt:'Equipe interna',es:'Equipo interno'}, autorizacao:AUT.conf, status:'exemplo',
     resumo:{pt:'Espaço para as fotos oficiais da equipe.',es:'Espacio para las fotos oficiales del equipo.'}},
    {id:'ex-alunos', titulo:{pt:'Turma em aula prática',es:'Grupo en clase práctica'}, categoria:{pt:'Alunos',es:'Alumnos'}, autorizacao:AUT.nao, status:'exemplo',
     resumo:{pt:'Exemplo de foto de alunos sem autorização: pode ser vista aqui, mas não vai para anúncio.',es:'Ejemplo de foto de alumnos sin autorización: se puede ver aquí, pero no va a anuncios.'}},
    {id:'ex-estrutura', titulo:{pt:'Fachada e clínicas',es:'Fachada y clínicas'}, categoria:{pt:'Estrutura',es:'Estructura'}, autorizacao:AUT.ok, status:'exemplo',
     resumo:{pt:'Espaço para fotos do prédio, clínicas e laboratório.',es:'Espacio para fotos del edificio, clínicas y laboratorio.'}},
    {id:'ex-eventos', titulo:{pt:'Formatura',es:'Graduación'}, categoria:{pt:'Eventos',es:'Eventos'}, autorizacao:AUT.conf, status:'exemplo',
     resumo:{pt:'Espaço para fotos de formaturas, congressos e festas.',es:'Espacio para fotos de graduaciones, congresos y fiestas.'}}
  ]).map(function(it){
    it.tags = [it.autorizacao];
    return it;
  })
});
