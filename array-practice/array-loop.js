// var arr = [10,20,30,40,50]
// var sum = []

// for(var i = 0; i<arr.length; i++){
//     sum = sum + arr[i]
   
// }
//  console.log("totel sum",sum)

// var arr = [4, 7, 9, 12, 3, 10]

// var count = 0;

// for(var i= 0; i<arr.length;i++){
//     if(arr[i] % 2 !== 0){
//         count ++ ;
//     }
// }

// console.log('odd numbers',count)

// var arr = [3, 5, 9, 12, 14, 7];
 
// var sum = 0;

// for(var i= 0;i<arr.length;i++){
//     if(arr[i]% 3 === 0){
//         sum= sum+ arr[i] ;
//     }
// }

// console.log('sum for a numbers divisible',sum)

// var arr = [1,2,3,4,5,6,7,8,9,10]

// var even = 1;
// var odd = 1;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even =  arr[i];
//         console.log('Even numbers product:', even);
//     }

//     if (arr[i] % 2 !== 0) {
//         odd = arr[i];
//         console.log('Odd numbers product:', odd);
//     }
// }

// var arr = [12, 45, 67, 89, 23, 100, 55];

// var max = 0;

// for(var i=0;i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log('the max number',max)

// var arr = [12, 45, 67, 3, 89, 23, 100, 1];

// var min =arr[5];

// for(var i = 0 ; i < arr.length; i++){
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }

// console.log('the min number', min)

// var arr = [45, 67, 23, 89, 51, 30, 100];

// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 50) {
//         count++;
//     }
// }

// console.log('Numbers less than 50:', count);

// var arr = [4, 7, 10, 23, 12, 8, 3];

// var i = 0;
// var count = 0;

// while(i < arr.length){
//     if(arr[i] % 2===0){
//         count++
//     }
//     i ++ 
    
// }

// console.log("totel even numbers", count)

// var arr = [4, 7, 10, 23, 12, 8, 3];

// var i = 0;
// var sum = 0;

// while(i<arr.length){
//     if(arr[i] % 2 !==0){
//         sum = sum + arr[i]
//     }

//     var arr = [4, 7, 10, 23, 12, 8, 3];

// var i = 0;
// var newArr = [];

// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i]);
//     }
//     i++;
// }

// console.log("This is a even numbers:", newArr);

// }

// console.log("total sum",sum)

// var arr = [4, 7, 10, 23, 12, 8, 3];

// var i = 0;
// var newArr = [];

// while (i < arr.length) {
//     if (arr[i] % 2 === 0) {
//         newArr.push(arr[i]);
//     }
//     i++;
// }

// console.log("This is a even numbers:", newArr);


// var arr = [5, 10, 15, 20, 25, 30];

// var i = 0;
// var evenArr = [];

// do {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
//     i++;
// } while (i < arr.length);

// console.log("Even numbers:", evenArr);

// var arr = [1, 2, 2, 4, 5, 6, 1, 2, 3, 4, 0, 10];

// var maxLength = 1;
// var maxStart = 0;

// var currentLength = 1;
// var currentStart = 0;

// for (var i = 1; i < arr.length; i++) {
//     console.log("Checking:", arr[i-1], "->", arr[i]);

//     if (arr[i] > arr[i - 1]) {
//         currentLength++;
//         console.log("Increasing found. currentLength:", currentLength);
//     } else {
//         console.log("Break found.");
//         if (currentLength > maxLength) {
//             maxLength = currentLength;
//             maxStart = currentStart;
//             console.log("New max found! maxLength:", maxLength, "Starting at index:", maxStart);
//         }
//         currentLength = 1;
//         currentStart = i;
//     }
// }

// // লুপ শেষ হবার পরে চেক করো, যদি শেষে গিয়ে একটা বড় সাবঅ্যারে থেকে থাকে
// if (currentLength > maxLength) {
//     maxLength = currentLength;
//     maxStart = currentStart;
//     console.log("Final check: New max at the end. maxLength:", maxLength, "Starting at:", maxStart);
// }

// // এখন রেজাল্ট বানাও
// var result = [];
// for (var i = maxStart; i < maxStart + maxLength; i++) {
//     result.push(arr[i]);
// }

// console.log("sub array:", result);

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var evenArr = [];
// var oddArr = [];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     } else {
//         oddArr.push(arr[i]);
//     }
// }

// var even = 0;
// var odd = 0;

// for (var i = 0; i < arr.length; i++){
//     if (arr[i] % 2 ===  0) {
//         even += arr[i];
//     }
//     else {
//         odd += arr[i];
//     }
// }

// console.log("Sum of even numbers:", even);
// console.log("Sum of odd numbers:", odd);

// console.log("Even numbers:", evenArr);
// console.log("Odd numbers:", oddArr);


// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// var target = 5;
// var found = false;

// for (var row = 0; row < matrix.length; row++) {
//   for (var col = 0; col < matrix[0].length; col++) {
//     if (matrix[row][col] === target) {
//       console.log("Target found at: " + row + ", " + col);
//       found = true;

//       if (row - 1 >= 0) {
//         console.log("Top: " + matrix[row - 1][col]);
//       } else {
//         console.log("No top value");
//       }

//       if (row + 1 < matrix.length) {
//         console.log("Bottom: " + matrix[row + 1][col]);
//       } else {
//         console.log("No bottom value");
//       }

//       if (col - 1 >= 0) {
//         console.log("Left: " + matrix[row][col - 1]);
//       } else {
//         console.log("No left value");
//       }

//       if (col + 1 < matrix[0].length) {
//         console.log("Right: " + matrix[row][col + 1]);
//       } else {
//         console.log("No right value");
//       }

//       break;
//     }
//   }
//   if (found) break;
// }

// console.log("Target not found in the matrix.");
// if (!found) {
//   console.log("NO target found")
// }

// var arr = [
//   [3, 5, 9],
//   [1, 7, 2],
//   [6, 4, 8]
// ];

// var max = arr[0][0];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] > max) {
//       max = arr[i][j];
//     }
//   }
// }

// console.log("Max value:", max);
// var min = arr[0][0];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] < min) {
//       min = arr[i][j];
//       console.log("Min value:", min);
//     }
//   }
// }

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
//   console.log("Sum of row " + i + ":", sum);
//   sum = 0; // reset sum for the next row
// }

// var even = [];
// var odd = [];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] % 2 === 0) {
//       even.push(arr[i][j]);
//     }
//   }
//   console.log("Even numbers in row " + i + ":", even);
// }


// var dArray = [ 
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// var target = 5;
// var found = false;

// for (var i = 0; i < dArray.length; i++) {
//     for (var j = 0; j < dArray[i].length; j){
//         if(dArray[i][j] === target) {
//             found = true; 
//             console.log('Target found at:', i, j);
//             if(i - 1 >= 0) {
//                 console.log('Top:', dArray[i - 1][j]);
//             }
//             if(i + 1 < dArray.length) {
//                 console.log('Bottom:', dArray[i + 1][j]);
//             }
//             if(j - 1 >= 0) {
//                 console.log('Left:', dArray[i][j - 1]);
//             }
//         }
//         if(j + 1 < dArray[i].length) {
//             console.log('Right:', dArray[i][j + 1]);
//         }
//         j++;
//     }
//     if (found) break;
// }

// var a = [
//     [1,2,3],
//     [4,5,6],
// ]

// var b = [
//     [7,8,9],
//     [1,2,3]
// ];

// var result = [];

// for( var i = 0; i < a.length; i++) {
//     var row = [];
//     for(var j = 0; j < a[i].length; j++) {
//         row.push(a[i][j] + b[i][j]);
//         var sum = 0 ;
//     }
//     result.push(row);
// }

// console.log('Resultant Array:', result);
// console.log('Sum of all elements:', result.flat().reduce((acc, val) => acc + val, 0));

var arr = [1,2,3,4,5,6,7,8,9,10];

var evenArr = [];
var oddArr = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    }
    else {
        oddArr.push(arr[i]);
    }
}

console.log("Even numbers:", evenArr);
console.log("Odd numbers:", oddArr);


























