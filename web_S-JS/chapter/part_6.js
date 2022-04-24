// 059. What is Function------------------------------------------------------

// what is function
// Input Output Processing

// var date = new Date()
// date.getFullYear()

// 060. How to Define a Function--------------------------------

// function functionName () {
//   console.log('I am a Function');
// }

// function add(){
//     var a = 10
//     var b = 20
//     console.log(a + b);
// }

// function sub(){
//     var a = 50
//     var b = 20
//     console.log(a - b);
// }

// // functionName()
// // functionName()

// // for(var i = 0; i < 10; i++){
// //     functionName()
// // }

// add()
// add()
// add()
// add()
// sub()

// console.log(add());

// 062. Arguments and Parameter of a Function------------------------------------------------------------

// function add(a, b) {
//   var result = a + b
//   console.log(result);
// }

// add(10, 20)
// add(7, 3)
// add(500, 700)

// var arr1 = [1, 2, 3]
// var arr2 = [5, 7, 9, 10]
// var arr3 = [9, 7, 1, 20]

// var sum1 = 0
// for(var i = 0; i < arr1.length; i++){
//     sum1 += arr1[i]
// }
// console.log(sum1);

// var sum2 = 0
// for(var i = 0; i < arr2.length; i++){
//     sum2 += arr2[i]
// }
// console.log(sum2);

// var sum3 = 0
// for(var i = 0; i < arr3.length; i++){
//     sum3 += arr3[i]
// }
// console.log(sum3);

// function sumOfArray(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum);

// }

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)
// --
// var arr1 = [10,20,30,40,50]

// function add (arr){
//  var sum = 0;
//  for(var i = 0; i < arr.length; i++){
//      sum += arr[i]
//  }
//  console.log(sum);
// }

// add(arr1)

// 063. Argument Object in Javascript Function-----------------------------------------------------

// function test() {
//     // console.log(arguments); // fnc btor tke
//     // console.log(typeof a);

//     for(var  i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }

// test(10, 20, 30)

// function addAll() {
//     var sum = 0
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     console.log(sum);
// }

// // addAll(1, 2, 4)
// // addAll(1, 2, 3, 4, 5, 6, 7, 8)

// var a = addAll(1, 2, 4)
// var b = addAll(1, 2, 3, 4, 5, 6, 7, 8)
// console.log(a, b);

// ---------------

// 064. How to Return Anything from a Function-------------------------------------------

// function addAll() {
//     var sum = 0
//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// var result = addAll(1,2,3)
// console.log(result);

// function person(name, email) {
//   return {
//       name: name,
//       email: email
//   }
//   console.log('I will never be shown');
// }

// var p1 = person('HM Imran', 'Sagor.mabc@gamil.com')
// console.log(p1);

// 065. Function Expressions in Javascript------------------------------------------------------------
// je function nam nai take bole animas function..

// var addition = function (a, b) {
//     return  a+b
// }

// addition(10, 30)

// setTimeout(function () {
//  console.log('I will call after 5 SECOND');
// }, 5000)

// var another = addition

// console.log(another(7, 9));

// var add = function () {
//     console.log('I will go for evereday');
// }

// var fname = add()

// console.log(fname);

// setInterval(function (){
//  console.log('I Love Programing Javascript');
// }, 7000)

// 066. Inner Functions in Javascript---------------------------------

// function something(greet, name){
//     function getFirstName (){
//         if(name){
//             return name.split(' ')[0]
//         } else {
//             return ''
//         }
//     }

//     var message  = greet + ' ' + getFirstName()
//     console.log(message);
// }

// something('Good Morning', 'MD Imran')

// 067. What is Function Scoping in Javascript-----------------------------------------------------------

// 067. What is Function Scoping in Javascript-------------------------------------------------

// var a = "abc";

// if (true) {
//   if (true) { 
//     var b = 'I am B'
//   }
// }

// console.log(b);

// function x () {
//     // var a = 20
//     function y (){
//         // var a = 10
//         console.log(a);
//     }
//     console.log(a);
//   y()
// }

// x() 

// function test(n){

//     function a (){
//       return n % 3 === 0
//     }

//     function b () {
//         return n % 5 === 0
//     }

//     if(a() && b()){
//         console.log(n + ' is divisible by both 3 and 5');
//     } else {
//         console.log('Not a vaild nubmer');
//     }
// }

// test(15)