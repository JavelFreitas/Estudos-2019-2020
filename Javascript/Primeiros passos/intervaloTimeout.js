function exibeAlgo(){
    console.log("Hello World");
}

function intervalo(){
    console.log("Hellooooo");
    setInterval(exibeAlgo(),1000);

    console.log("Teste2");
    setInterval(exibeAlgo, 1000);
}

function timeOut(){
    console.log("Hellooooo");
    setTimeout(exibeAlgo, 2000);
}