// Create a function that calculates the factorial of a number.

function fac(num){
    if(num === 0 || num === 1){
        return 1;
    } else {
        return result = num*fac(num-1);
    }
}
console.log(fac(5));