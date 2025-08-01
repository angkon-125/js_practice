// arrow functions
// Arrow functions are a more concise way to write function expressions in JavaScript.
// they are particularly useful for writing short functions and can make your code cleaner and more readable.

// Here is an example of how to use arrow functions:
const factorial = (n) => {
    if (n < 0) {
        return "error: negative number";
    }
    if (n === 0  || n === 1) {
        return 1;
    }
    let returnValue = 1;
    for (let i = 2 ; i <= n; i++){
        returnValue *= i;
    }
    return returnValue;
}
// Example usage of the factorial function
console.log(factorial(5)); // output: 120
console.log(factorial(0)); // output: 1
console.log(factorial(-1)) // output: error: negative number

// Arrow functions can also be used for simple one-liners:
const square = x => x * x; // no need for parentheses if there's only one parameter
console.log(square(4)); // output: 16
//  if the function has no parameters, you need to use empty parentheses:
const greet = () => "fuck you"; 
console.log(greet)

// next arrow function 
 
const arrow = (n => 0);{

}