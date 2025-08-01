//  Reverse an Array

var arr = [1,2,3,4,5];
var Reverse = arr.reverse();
console.log(Reverse); // Output: [5, 4, 3, 2, 1]

// Remove Duplicates 

var arr2 = [1, 2, 3, 3, 4, 5, 5];

var uniqueArr = arr2.filter((value, index , self )=> {
    return self.indexOf(value) === index;
})
console.log(uniqueArr); // output: [1, 2, 3, 4, 5]

// Find Maximum Value

var arr3 = [1, 2, 3, 4, 5]
var maxValue = Math.max(...arr3);
console.log(maxValue); // output: 5

// Flatten a Nested Array

var arr4 = [1, [2, 3], [4, [5]]];
var flatten = arr4.flat(Infinity);
console.log(flatten); // output: [1,2,3,4,5]

//  Sum of Array Elements
var arr5 = [1, 2, 3, 4, 5];

var sum = 0;
for(var i = 0; i < arr5.length; i++) {
    sum += arr5[i];
}
console.log(sum);  // output: 15

// Check for Voting Eligibility array in js

var ages = [16, 18, 20, 15, 22];
var eligibilityVoters = ages.filter(age => age >= 18);
console.log(eligibilityVoters); // output: [18, 20, 22]

// even and odd numbers in an array
var arr6 = [1,2,3,4,5,6,7,8,9,10];
var evenNumbers = arr6.filter(num => num % 2 === 0);
var oddNumbers = arr6.filter(num => num % 2 !== 0);
console.log(evenNumbers); // output: [2, 4, 6, 8, 10]
console.log(oddNumbers); // output: [1, 3, 5,7, 9]



function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrade(85)); // Output: B

// leap year array

var isLeapYear = function(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

var createLeapYearArray = function(startYear, endYear) {
    var years = [];
    for (var year = startYear; year <= endYear; year++) {
        var isLeap = isLeapYear(year);
        years.push({ year: year, isLeapYear: isLeap });
    }
    return years;
}

var startYear = 2000;
var endYear = 2025;
var leapYears = createLeapYearArray(startYear, endYear);
console.log(leapYears);


