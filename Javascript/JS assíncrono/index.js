var button1 = document.querySelector("button") || [];
var input1 = document.querySelector("input#input1") || [];

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade > 18) {
            setTimeout(resolve, 1000);
        } else {
            setTimeout(reject, 500);
        }
    });
}


button1.onclick = function () {
    var idade = input1.value;
    input1.value = '';
    checaIdade(idade)
        .then(function () {
            document.querySelector('h1').innerHTML = "Tudo certo(Maior que 18)";
            console.log("Maior que 18");
        })
        .catch(function () {
            document.querySelector('h1').innerHTML = "Algo errado(Menor que 18)";
            console.log("Menor que 18");
        });

}

