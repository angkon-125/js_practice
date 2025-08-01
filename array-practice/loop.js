// var arr = [4,7,3]
// if(arr[0]>arr[1] && arr[0]>arr[2]){
//    console.log('first aaary is big number')
// }
// else if(arr[1]>arr[2]){
//     console.log('2nd number is big')
// }
// else{
//     console.log('third number is big')
// }

// var arr2 = [5,2,8];
// if(arr2[0] > arr2[1] && arr2[0] > arr2[2]){
//     console.log("first number is big");
// }
// else if(arr2[1] > arr2[2]){
//     console.log("second number is big");
// }
// else {
//     console.log("third number is big");
// }

// var arr3 = [12,4,9]

// if(arr3[0]<arr3[1] && arr3[0]<arr3[2]){
//     console.log('first number is small')
// }
// else if(arr3[1] < arr3[0] && arr3[1] < arr3[2]){
//     console.log("second number is small")
// }
// else{
//     console.log('third number is small')
// }

// var arr4 = [13,5,10]

// if ((arr4[0] > arr4[1] && arr4[0] < arr4[2]) || (arr4[0] < arr4[1] && arr4[0] > arr4[2])) {
//     console.log("middle number is " + arr[0]);
// }
// else if ((arr4[1] > arr4[0] && arr[1] < arr4[2]) || (arr4[1] < arr4[0] && arr4[1] > arr4[2])) {
//     console.log("middle number is " + arr4[1]);
// }
// else {
//     console.log("middle number is " + arr[2]);
// }

// var arr5 = [12, 4, 9];

// var biggest;
// var smallest;
// var middel
// if (arr5[0] > arr5 [1]&& arr5[0] > arr5[2]) {
//     biggest = arr5[0];
// }
 
// if(arr5[2]>arr5[1]){
//     middel = arr5[1]
// }

// if(arr5[1]<arr5[2]){
//     smallest = arr5[2]
// }


// var difference = biggest - smallest;

// console.log("largest difference is " + difference);

// console.log('big',biggest)
// console.log('is middel',middel)
// console.log('is small',smallest)

// var arr = [5, 5, 5];

// if((arr[0] === arr[1]) && (arr[1] === arr[2])){
//     console.log("All are same")
// }

// var arr = [3, 4, 5];

// if((arr[0] !== arr[1]) && (arr[0] !== arr[2]) && (arr[1] !== arr[2])){
//     console.log( "all different")
// }

// var arr = [2, 5, 9];

// if(arr[0] < arr[1] && arr[1] < arr[2]){
//     console.log('yes, ascending order')
// }
// else{
//     console.log('not in ascending order')
// }

// var arr = [15,9,3]

// if(arr[0] < arr[1] && arr[1] < arr[2]){
//     console.log('yes, ascending order')
// }
// else{
//     console.log('not in ascending order')
// }

// if(arr[0]> arr[1] && arr [1] > arr[2]){
// }

// var arr2 = [];

// var arr = [1,2,3,4,5]

//  var sum = 0;

// for(var i=0; i <arr.length; i++){
//     sum = sum + arr[i];
// }

// console.log('totel sum', sum)

// var arr = [10, 25, 7, 99, 5]

// var max = arr[0];

// for(var i=0; i < arr.length; i++){
//    if(arr[i]>max){
//     max = arr[i]
//    }
// }

// console.log("Maximum number is:", max)

// var arr = [1,2,3,4,5,6]

// var count = 0;

// for(var i=0; i<arr.length; i++){
//    if(arr[i]%2===0 ){
//     count ++ 
//    }
// }

// console.log('this is a even number',count)

// var arr = [1, 2, 3, 4, 5];
// var reversed = [];

// for (var i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }

// console.log("Reversed array:", reversed);

// var arr = [1, 2, 2, 3, 4, 4, 5];
// var unique = [];

// for (var i = 0; i < arr.length; i++) {
//     if (unique.indexOf(arr[i]) === -1) {
//         unique.push(arr[i]);
//     }
// }

// console.log("Unique values:", unique);


// var arr = [1, 2, 3, 4];
// var squared = [];

// for (var i = 0; i < arr.length; i++) {
//     squared.push(arr[i] * arr[i]);
// }

// console.log("Squared values:", squared);


// var arr = [1, 2, 3, 4, 5];
// var isSorted = true;

// for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isSorted = false;
//         break;
//     }
// }

// console.log("Is array sorted in ascending order?", isSorted);

// var arr = [10, 3, 25, 6, 7, 15, 8];

// count = 0;

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 5 === 0){
//         count++
//     }
// }

//  console.log('this my code',count)

// var arr = [10, 15, 3, 8, 5, 7];

// var sum = 0;
// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {  
//         sum += arr[i];     
//         count++;              
//     }
// }

// if (count > 0) {
//     var average = sum / count;
//     console.log("Average of odd numbers:", average);
// } else {
//     console.log("No odd numbers found.");
// }

// var arr = [5, 12, 34, 51, 49, 9, 10, 50, 60];

// var count = 0;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10 && arr[i] <= 50) {
//         count++;
//     }
// }

// console.log("Total numbers between 10 and 50:", count);

var arr = [10, 20, 30, 40, 50];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

// var average = sum / arr.length;

console.log("Total sum:", sum);
// console.log("Average:", average);








