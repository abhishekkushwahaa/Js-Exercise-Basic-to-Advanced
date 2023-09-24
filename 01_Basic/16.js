// Use the `reduce` function to find the sum of elements in an array.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, current){
    return accumulator + current;
})
console.log(sum);