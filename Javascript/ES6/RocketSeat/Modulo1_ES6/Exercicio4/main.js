const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

let { nome, endereco: { cidade }, endereco: { estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);


function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })