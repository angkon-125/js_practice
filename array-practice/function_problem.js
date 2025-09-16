// // easy function exaples
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Angkon"));

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 10));

// function multiple(a, b) {
//     return a * b;
// }
// console.log(multiple(4, 5));

// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(4)); // true

// // medium function examples

// function maxofThree(a, b, c){
//     return Math.max(a, b, c);
// }
// console.log(maxofThree(10, 20, 30)); // 30

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("Angkon")); // "nokgnA"

// function isPalindrome(str) {
//     var len = str.length;
//     for (var i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false

var allowedUsers = ["Alice", "Bob", "Charlie"];
function isUserAllowed(users)
{
    return users.every(user => allowedUsers.includes(user));
}




