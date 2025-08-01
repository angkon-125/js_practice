// logical operators 
// logical operators are used to combine two or more conditions
// logical and operator (&&) - returnds true if both conditions are true
// logical or pperator (//) - returns true if at least one condition is true
// logical not operator (!) - reverses the result of a condition
 
// for example
const age = 20;
const isadult = (age >= 18) && (age <= 65);
console.log(isadult); // true
//for example 
const age2 = 20;
const isadult2 = (age2 >= 18) || (age2 <= 65);
console.log (isadult2); // true
// for example 
const age3 = 20;
const isadult3 = !(age3 >= 18);
console.log (isadult3); // false
// for example
const age4 = 20;
const isadult4 = !(age4 >= 18 && age4 <= 65);
console.log (isadult4); // false
// for example
const age5 = 20;
const isadult5 = !(age5 >= 18 || age5 <= 65);
console.log (isadult5); // false
// for example
const age6 = 20;
const isadult6 = !(age6 >= 18 && age6 <= 65);
console.log (isadult6); // false
// for example 


