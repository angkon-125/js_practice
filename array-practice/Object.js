// var person = {
//     name: "Armaan",
//     age: 25,
//     city: "Dhaka"
// };

// console.log(person.name); // Armaan

// var car = { brand: "Toyota", color: "Red", year: 2020 };
// console.log(car.brand); // Toyota

// car.color = "Blue";
// console.log(car.color); // Blue

// car.price = 20000;
// console.log(car.price); // 20000
// for (var key in car) {
//     console.log(key + ": " + car[key]);
// }
// // Output: price: 20000

// var student = { name: "Armaan", marks: { math: 90, english: 85 } };
// console.log(student.marks.math); // 90

// delete car.year;
// console.log(car.year); // undefined

// console.log("price" in car); // true
// console.log("year" in car);  // false

// var person = { name: "Armaan", hobbies: ["guitar", "coding", "reading"] };
// console.log(person.hobbies[0]); // guitar

// for (var i = 0; i < person.hobbies.length; i++) {
//     console.log(person.hobbies[i]);
// }

// var calculator = {
//     add: function (a, b) {
//         return a + b;
//     }
// };
// console.log(calculator.add(5, 7)); // 12

// var users = [
//     { name: "Armaan", age: 20 },
//     { name: "Rahim", age: 22 },
//     { name: "Karim", age: 19 }
// ];

// for (var i = 0; i < users.length; i++) {
//     console.log(users[i].name);
// }

// // output: 10, 20, 30

// var numbers = [10, 20, 30];
// var sum = 0;
// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];

// }
// console.log("Sum of numbers:", sum); // Sum of numbers: 60

var objects = [
    { name: "Armaan", age: 25 },
    { name: "Abbir", age: 33 },
    { name: "Arean", age: 26 },
    { name: "Rakib", age: 23 }
];

objects.forEach(function (obj) {
    console.log(obj.name + " is " + obj.age + " years old.");
});

// output: 
// Armaan is 25 years old.
// Abbir is 33 years old.
// Arean is 26 years old.
// Rakib is 23 years old.

