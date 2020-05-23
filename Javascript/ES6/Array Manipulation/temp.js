window.addEventListener('load', () => {
    const arr = ['Ana', 'Julia', 'Matheus', 'Javel', 'Julio', 'Livia', 'Lyse', 'Viviane'];
    let inputArray = "s";
    if (!inputArray){
        console.log("Empty input");
        return;
    }
    let inputFirstUpper = inputArray;
    inputFirstUpper = inputFirstUpper[0].toUpperCase() + inputFirstUpper.slice(1);
    let inputUpper = inputArray.toUpperCase();
    let inputLower = inputArray.toLowerCase();
    
    // console.log(inputUpper);
    // console.log(inputLower);
    // console.log(inputFirstUpper[0]);

    console.log(arr.filter((element) => { return (element.indexOf(inputArray) !== -1 
        || element.indexOf(inputUpper) !== -1
        || element.indexOf(inputLower) !== -1
        || element.indexOf(inputFirstUpper) !== -1) }));
});