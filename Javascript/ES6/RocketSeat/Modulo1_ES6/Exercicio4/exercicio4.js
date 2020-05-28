"use strict";

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    cidade = empresa.endereco.cidade,
    estado = empresa.endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
});
