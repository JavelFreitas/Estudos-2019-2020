window.addEventListener('load', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 6, 4];

    const colors = [color = "blue" , { "brightness": "100%" }];

    spreadExample(arr1, arr2);

    restExample(1, 2, 3, 4);

    destructionExample(colors);
});

function spreadExample(arr1, arr2) {
    arrx = [...arr1, ...arr2];
    arrx.sort();
    console.log(arrx);
    // unify the two vectors
}

function restExample(...numbers) {
    console.log(numbers);
    // unify all arguments
}

function destructionExample(colors) {
    const [color, brightness] = colors;
    console.log(color);
    console.log(brightness);
    // segments colors to each constants
}