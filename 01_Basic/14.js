// Use the `map` function to double each element in an array.

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);