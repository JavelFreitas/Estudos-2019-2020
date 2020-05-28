"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (user) {
  return user.idade;
});
console.log(idades);
var rocketDeMaior = usuarios.filter(function (user) {
  return user.idade > 18 && user.empresa === "Rocketseat";
});
console.log(rocketDeMaior);
var googleWorkers = usuarios.find(function (user) {
  return user.empresa === "Google";
});
console.log(googleWorkers);
var usuariosModificados = usuarios.map(function (user) {
  user.idade *= 2;
  return user;
});
usuariosModificados = usuariosModificados.filter(function (user) {
  return user.idade < 50;
});
console.log(usuariosModificados);
