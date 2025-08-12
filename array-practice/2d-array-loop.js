// var arr = [
//   [3, 5, 9],
//   [1, 7, 2],
//   [6, 4, 8]
// ];

  // this a 2d array sum
// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         sum += arr[i][j];
//     }
// }
// console.log("Total sum of all elements:", sum);

// this is a 2d Count Even and Odd Numbers

// var evenCount = 0;
// var oddCount = 0;
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] % 2 === 0) {
//             evenCount++;
//         }
//         else {
//             oddCount++;
//         }
//     }
// }


// console.log("Total even numbers:", evenCount);
// console.log("Total odd numbers:", oddCount);

// this is a 2d array search for a target value

// var target = 7;
// var found = false;

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] === target) {
//       found = true;
//     }
//   }
// }
// console.log(found ? "Found" : "Not Found");

// this is a 2d array row sum 

// for (var i = 0; i < arr.length; i++) {
//   var rowSum = 0;
//   for (var j = 0; j < arr[i].length; j++) {
//     rowSum += arr[i][j];
//   }
//   console.log("Sum of row", i, ":", rowSum);
// }

// var a = [
//   [1,2,3],
//   [4,5,6]

// ];

// var b = [
//   [7,8,9],
//   [1,2,3]
// ];

// var reslit = [];

// for(var i =0; i <a.length; i++){
//   var row = [];
//   for(var j = 0; j <a[i].length; j++){
//      row.push(a[i][j] + b[i][j]);

//   }
//   reslit.push(row)
// }


// console.log(reslit)

//   var A = [
//   [2, 4],
//   [6, 8],
//   [10, 12]
// ];

// var  B = [
//   [1, 3],
//   [5, 7],
//   [9, 11]
// ];

// var reslit = [] ;

// for(var i = 0; i < A.length; i++){
//   var row = [];
//   for(var j = 0; j < A [i].length; j++){
//     row.push(A[i][j] + B[i][j])
//   }
//   reslit.push(row)
// }

// console.log(reslit);

// var  A = [
//   [5, 8, 12],
//   [14, 18, 20]
// ];

// var  B = [
//   [2, 4, 6],
//   [10, 5, 15]
// ];

// var reslit = [];

// for(var i = 0; i < A.length; i++){
//   var row = [];
//   for(var j = 0; j <A[i].length; j++){
//     row.push(A[i][j] - B[i][j])
//   }
//   reslit.push(row);
// }

// console.log(reslit);
// var A = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8]
// ];

// var B = [
//   [9, 8, 7, 6],
//   [5, 4, 3, 2]
// ];

// var reslit = [];

// for(var i = 0; i < A.length; i++){
//   var row = [];
//   for(var j = 0; j <A[i].length; j++){
//     row.push(A[i][j] + B[i][j])
//   }
//   reslit.push(row);
// }

// console.log(reslit)

// var A = [
//   [10, 20],
//   [30, 40]
// ];

// var B = [
//   [1, 2],
//   [3, 4]
// ];

// var C = [
//   [5, 6],
//   [7, 8]
// ];

// var result = [] ;

// for(var i = 0; i < A.length; i++){
//   var row = [];
//   for(var j = 0; j<A[i].length; j++){
//     row.push(A[i][j]+ B[i][j] - C[i][j])
//   }
//   result.push(row);
// }

// console.log(result)

// var A = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// var B = [
//   [7, 8],
//   [9, 10],
//   [11, 12]
// ];

// var result = [];

// for (var i = 0; i < A.length; i++) {
//   var row = [];
  
//   for (var j = 0; j < B[0].length; j++) {
//     var sum = 0;
    
//     for (var k = 0; k < A[0].length; k++) {
//       sum += A[i][k] * B[k][j];
//     }
    
//     row.push(sum);
//   }
  
//   result.push(row);
// }

// console.log(result);




