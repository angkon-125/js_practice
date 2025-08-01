// funtion - 09 function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)) // output: 5

// note: this is a simple function that takes two arguments and returns their sum.
// it can be used to add any two numbers together.

// next function example
function multiply(a, b){
    return a * b;
}
console.log(multiply(2, 3)) // output: 6

// note: this function takes two arguments and returns their product.
// it can be used to multiply any two numbers together.

// next function example
// function subtract(a, b);{
//     return a - b;
// }
// console.log(subtract(5, 3)) // output: 2
// note: this function takes two arguments and returns their difference.
// it can be used to subtract any two numbers.

// next function example 

function divide(a , b)
{
    if (b === 0) {
        return "error: division";
    }
    return a / b;
}

console.log(divide(6, 3)) // output: 2
// note: this function takes two arguments and returns their quotient.
// it can be used to divide any two numbers together.

// next function example
function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(2, 3)) // output: 8
// note: this function takes two arguments and returns the base raised to the exponent.
// it can be used to calculate powers of any number.

// next function example
function squareroot(number){
    if (number < 0) {
        return "error: negative number";
    }
    return Math.sqrt(number);
}
console.log(squareroot(9)) // output: 3
// note: this function takes one argument and returns the square root of the number.
// it can be used to calculate the square root of any non-negative number.

// next function example
function absolutevalue(number){
    return Math.abs(number);
}
 console.log(absolutevalue(-5)) // output: 5
 // note: this function takes one argument and returns the absolute value of the number.
 // it can be used to calculate the absolute value of any number.

 // next function example
 function factorial(n) {
        if (n < 0) {
            return "error: negative number";
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let returnValue = 1;
        for (let i = 2; i <= n; i++) {
            returnValue *= i;
        }
        returnValue;
    }
    console.log(factorial(5)) // outpt: 120

    // note: this function takes one argument and returns the factorial of the number.
    // it can be used to calculate the factorial of any non-negative integer.

    // next function example
    function fib (n) {
        if (n < 0) {
            return " error: negative number";
        }
        if (n === 0) {
            return 0 ;
        }
        if (n === 1) {
            return 1
        }
    }


console.log(fib(5)) // output: 5
// note: this function takes one argument and returns the nth Fibonacci number.
// it can be used to calculate Fibonacci numbers for any non-negative integer n.

// next function example
function isprime(num) {
    if (num <= 1) {
        return false;
    }
    if (num ===2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    {
        if (num % i === 0) {
            return false;
        }
    }
}

 // note: this function takes one argument and returns true if the number is prime, false otherwise
    // it can be used to check if any number is prime or not.
    console.log(isprime(7)) // output: true 
    console.log(isprime(10)) // output: false

    // next function example
    function gcd(a , b) {
        if (b === 0) {
            return a;
        }
    }
  console.log(gcd(48, 18)) // output: 6
// note: this function takes two arguments and returns the greatest common divisor (GCD) of the two numbers.
