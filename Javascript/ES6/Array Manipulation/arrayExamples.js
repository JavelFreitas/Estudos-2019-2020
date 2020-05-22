window.addEventListener('load', () => {
    let vector = [1, 2, 3, 4, 5, 6, 7];
    mapExample(vector);
    filterExample(vector);

});



function mapExample(vector){
    console.log(vector.map(number => {return number + 1;}));
    // for each number inside of the vector the function on the right side is being used
}

function filterExample(vector){
    console.log(vector.filter(num => {return num > 3;}))
    // returns a new array with the elements that are suitable to the conditions
}