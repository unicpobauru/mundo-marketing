/* Banco de fotos — cada foto é um item com imagem, categoria e autorização de uso.
   autorizacao: 'Autorizada' | 'Sem autorização' | 'A confirmar'
   Só use em anúncio ou redes as fotos marcadas como "Autorizada".
   Para acrescentar: salve a foto em assets/fotos/<categoria>/ e crie um item. */
var AUT = {
  ok:{pt:'Autorizada', es:'Autorizada'},
  conf:{pt:'A confirmar', es:'Por confirmar'},
  nao:{pt:'Sem autorização', es:'Sin autorización'}
};
var CAT = {predio:{pt:'Prédio',es:'Edificio'}, func:{pt:'Funcionários',es:'Funcionarios'}};
MM.area({
  id:'fotos', layout:'galeria',
  aviso:{pt:'Antes de usar uma foto em anúncio ou rede social, confira se ela está marcada como "Autorizada". Fotos de pessoas precisam de autorização de uso de imagem.', es:'Antes de usar una foto en un anuncio o red social, verifica que esté marcada como "Autorizada". Las fotos de personas necesitan autorización de uso de imagen.'},
  filtros:[
    {campo:'categoria', rotulo:{pt:'Categoria', es:'Categoría'}},
    {campo:'autorizacao', rotulo:{pt:'Autorização', es:'Autorización'}}
  ],
  itens: [
    {id:'predio', titulo:{pt:'Fotos do prédio',es:'Fotos del edificio'}, categoria:CAT.predio, autorizacao:AUT.ok, status:'preencher',
     resumo:{pt:'Fachada, recepção, salas, clínicas e laboratórios.',es:'Fachada, recepción, salas, clínicas y laboratorios.'}},
    {id:'funcionarios', titulo:{pt:'Fotos dos funcionários',es:'Fotos de los funcionarios'}, categoria:CAT.func, autorizacao:AUT.conf, status:'preencher',
     resumo:{pt:'Foto de cada funcionário, por setor. As fotos dos professores ficam no Perfil dos professores.',es:'Foto de cada funcionario, por sector. Las fotos de los profesores están en el Perfil de los profesores.'}}
  ].map(function(it){
    it.tags = [it.autorizacao];
    return it;
  })
});
