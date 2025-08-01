var age =("25");

console.log(age);
// this is a string
age = "Angkon";
console.log(age);

// var is a global variable

if(true){
    var age = 30;
// this is a local
}
console.log(age);
// this is a number

// let is a block scope variable
let name = "Angkon";
console.log(name);
if(true){
    let name = "Sarkar";
    console.log(name);
}
// this is a local variable
console.log(name);
// this is a global variable

// const is a block scope variable
const name1 = "Angkon";
console.log(name1);
if(true){
    const name1 = "Sarkar";
    console.log(name1);
}
// this is a local variable
console.log(name1);
// this is a global variable
// const name1 = "Sarkar"; // this will give an error
