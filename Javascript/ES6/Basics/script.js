window.addEventListener('load', start);


function start() {
    variableDeclaration();
    const arrowFunction = () => {
        let a = "Hello";
        let b = " everyone";
        console.log(`${a}${b}`); // template literals
    };
    arrowFunction();

    defaultParameters();
    defaultParameters("Hi");
    defaultParameters("Hi", "!");
}

function defaultParameters(a = "Hello", b = " everyone"){
    console.log(`${a}${b}`);
}



function variableDeclaration(){
    for (var i = 1; i < 10; i++) {
        console.log(i);
    }
    console.log(i + 1);

    for (let j = 1; j < 10; j++) {
        console.log(j);
    }
    // j cannot be accessed outside of the loop
 
    const k = [];
    console.log(k);
    k.push(1);
    console.log(k);
    // k can not have its value altered as a primitive
}