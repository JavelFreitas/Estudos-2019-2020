var button1 = document.querySelector("button") || [];
var input1 = document.querySelector("input#input1") || [];

function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade > 18) {
            
            setTimeout(resolve, 5000);
        } else {
            setTimeout(reject, 2000);
        }
    })
}

button1.onclick = checaIdade(input1.value)
.then(function () {
    alert("resolve");
    document.querySelector('h1').innerHTML = "Tudo certo";
    console.log("Maior que 18");
})
.catch(function () {
    document.querySelector('h1').innerHTML = "Algo errado";
    console.log("Menor que 18");
});;
    
