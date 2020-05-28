const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

let idades = usuarios.map(user => user.idade);

console.log(idades);

let rocketDeMaior = usuarios.filter(user => {
    return user.idade > 18 && user.empresa === "Rocketseat";
});

console.log(rocketDeMaior);

let googleWorkers = usuarios.find(user => user.empresa === "Google");
console.log(googleWorkers);

let usuariosModificados = usuarios.map(user => {
    user.idade *= 2
    return user
});

usuariosModificados = usuariosModificados.filter(user => { return user.idade < 50 })
console.log(usuariosModificados);
