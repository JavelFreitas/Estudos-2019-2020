window.addEventListener('load', () => {
    let vector = [1, 2, 3, 4, 5, 6, 7];
    mapExample(vector);
    filterExample(vector);
    forEachExample(vector);
    reduceExample(vector);
    findExample(vector);
    somaExample(vector);
    everyExample(vector);
    sortExample(vector);
});



function mapExample(vector) {
    console.log(vector.map(number => { return number + 1; }));
    // for each number inside of the vector the function on the right side is being used (has return)
}

function filterExample(vector) {
    console.log(vector.filter(num => { return num > 3; }))
    // returns a new array with the elements that are suitable to the conditions
}

function forEachExample(vector) {
    let sum = 0;
    vector.forEach((number) => { sum += number; });
    console.log(sum);
    // same as map but modifies the elements inside vector and do not have return
}

function reduceExample(vector) {
    console.log(vector.reduce((total, current) => { return total += current; }, 0));
    // arguments: accumulator, the current value and the start index (0)
}

function findExample(vector) {
    console.log(vector.find((num) => {
        return num > 3;
    }));
    // find and returns the first element that satifies the condition in the function
}

function somaExample(vector) {
    console.log(vector.some((number) => { return number < 3 }));
    // same as find but returns a boolean
}

function everyExample(vector) {
    console.log(vector.every(number => { return number > 0; }));
    // conditional response if every element of the vector satisfies the condition
}

function sortExample(vector) {
    console.log(vector.sort((a, b) => { return b-a; }));
    /*  the function compares 2 arguments depending on a function,
        as the result return as 1, 0 or -1 the function sort will 
        replace the elements inside the vector */
}