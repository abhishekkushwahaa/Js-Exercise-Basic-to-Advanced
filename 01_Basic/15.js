// Use the `filter` function to filter out even numbers from an array.

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(function(num){
    return num % 2 === 0;
});
console.log(even);