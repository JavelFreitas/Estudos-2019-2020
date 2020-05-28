"use strict";

// 3.1
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);
