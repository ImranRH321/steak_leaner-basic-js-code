// 044. How to Declare an Array in Javascript-----------------------

// var arr = [1,2,3,4,5]
// arr[5] = 10
// arr[10] = 14
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[7]);
// console.log(arr);
// arr[2] = 20
// console.log(arr);
// console.log(arr.length);


// var arr2 = Array(1,2,3,4)
// console.log(arr2);

// 045. How to Traverse an Array in Javascript-------------------------------

// akta array ar potom take last porjonto tas kora hoy take bole taversing 

// var arr = [4,5,1,6,8,9] 
// arr[0]
// arr[1] 
// arr[2]
// arr[3]
// arr[arr.length - 1]

// array last index hossce array length ar take -1 ak kom 

// for(var i = 0; i< arr.length; i++){
//     // console.log(arr[i]);
//     arr[i] = arr[i] + 2 
// }

// console.log(arr);

// var sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// // console.log(sum);

// for(var i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0)
//     console.log(i);
// }


// 046. Insert, Remove and Replace Elements in an Array of Javascript------------------

// insert and remove Element 

var arr = [1,2,3,4,5,6,7,8]
// Insert 9 to index 3 

// arr[3] = 9
// arr.push(9)  
// arr.unshift(9)  //fast e add korar jonno

arr.splice(3, 0, 9, 10) //fst, kon pojition take start korbo, sec,remve, thirt kon pojisone inset korte chaitaci


// kono akta element ar akta element ba akadik element change korte chai tokon splice use korbo 

// arr[3] = undefined 
// arr.pop()
// arr.shift()

// arr.splice(3, 1)

// arr.splice(3, 1, 44)
// console.log(arr);

// kivabe akta index a inset korte remove korte hoy add korte hoy 

// 047. How to Search Data from an Array-----------------------------

// var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27]

// var find = 555  // ai array 10 ase kina koje ber korte pari 

// var isFound = false 
// for(var i = 0; i < arr.length; i++){
//     if(arr[i] === find){
//         console.log('Data Found at Index' + i) 
//         isFound = true 
//         break
//     }
// }

// if(!isFound){
//     console.log('Data Not Found');
// }


// var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27]

// var find = 73
// var isOk = true 
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === find){
//         console.log('paya gase index', i)
//         isOk = false  
//         break
//     } 
// }

// if(isOk === true){
//     console.log('poya jai nai');
// }


// var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27]

// var find = 90
// var is = false 

// for(var i = 0;  i < arr.length; i++){
//     if(arr[i] === find){
//         console.log('poya gase index', i);
//     }
// }

// if(find !== 9){
//     console.log('poya jai nai');
// }

// Amar moto korlam arki // 

// 048. What is Multidimensional Array-------------------------------

// 2 Dimensional Array
// 3 Dimensional  Array

// Multi Dimensional Array 

// var arr = [
//   [],
//   [],2 Dimensional Array // doita loop diya korte hobe
//   [],
// ]

// var arr = [
//     [
//         [],
//         [],
//         [],
//     ],
//     [
//         [],
//         [],  // 3 Dimensional Array // hole 3 ta loop diye korte hobe
//         [],
//     ],
//     [
//         [],
//         [],
//         [], 
//     ],
// ]


// var arr = [
//     [78, 71, 80, 90],
//     [80, 75, 30, 85],
//     [71, 75, 79, 80]
// ]

// // console.log(arr[0][0]);
// // console.log(arr[1][1]);

// for(var i = 0; i < arr.length; i++){
//     for(var j = 0; j < arr[i].length; j++) {
//       console.log('Element' + i + ': ' + arr[i][j]);
//     }
// }

// var str = [
//     [10, 20, 30, 40, 50],
//     [50 ,40, 30, 20, 10],
//     [60, 70, 80, 90, 30]
// ]

// console.log(str[0][4]);
// console.log(str[1][4]);
// console.log(str[2][4]);

// for(let i = 0; i < str.length; i++){
//     for(var j = 0; j < str[i].length; j++){
//       console.log('Element' + i + ': ' + str[i][j]);
//     }
// }

// var str = [

//     [10, 20, 30, 40, 50],
//     [50 ,40, 30, 20, 10],
//     [60, 70, 80, 90, 30]

// ]

// for(let i = 0; i < str.length; i++){
//     // console.log(str[i]);
//     for(let j = 0 ; j < str[i].length; j++){
//         console.log('Element' + i + ': ' +str[i][j]);
//     }
// }

// var arr = [
//   [1,2,3,4,5,6],
//   [1,2,3,4,5,6],
//   [1,2,3,4,5,6]
// ]

// for(var i = 0; i < arr.length; i++){
//   for(var j = 0; j < arr[i].length; j++){
//     console.log('Element' + i + ' ' +arr[i][j]);
//   }
// }

// -----------------------049. How to Reverse Array Elements Completely
// --------------------------------------

// [1,2,3,4,5]
// [5,4,3,2,1]

//  var arr = [1,2,3,4,5,6,7,8]


// for(var i = 0; i < arr.length / 2; i++){
// var temp = arr[i] 
//  arr[i] = arr[arr.length - 1]
//  arr[arr.length - 1 - i] = temp 
// }

// console.log(arr);

// var newArray = arr.reverse()

// 050. Array Methods Provided by Javascript-------------------------------
// var arr = [4, 5, 9, 6]
// var arr2 = [5, 2, 3, 4, 5, 6]
// console.log(arr.join(' * ')); // array take string kore nibe space dile nibe ba koma dite aniting dite pari 


// arr.fill(true) // babohar kore pora element ke fil korbo 0 dara jei dei seta full array modde takbe


// arr3 = arr.concat(arr2) // return korbe

// console.log(arr3);

// console.log(Array.isArray(arr)); // jodi array hoy taile true bolbe

// var arr2 = Array.from(arr)

// console.log(arr2);


// var a = [1, 2] 
// var b = Array.from(a) //array copy korte hobe abave 

// b[0] = 5 

// console.log(a);g

// 050. Array Methods Provided by Javascript---------------------




// var arr = [4,5,6,7 ,8] 
// console.log(arr.join(' * '));

// console.log(arr.fill('10'));

// var arr2 = [2,4,5,6,7] 
// // var arr3= arr.concat(arr2)
// var arr3 = Array.from(arr2)
// arr3[3] = 100 
// console.log(arr3);









// console.log(Array.isArray(arr));

// var arr2 = [2,4,5,6,7] 
// var arr3 = Array.from(arr2)
// console.log(arr3);

// var a = [1, 3] 
// var b = Array.from(a) 
// // akta  arry arek variable rakle original copy array jai na // sejonno amra from method bobohar korbo 

// b[0] = 10

// console.log(a);
// console.log(b);

// 051. What is Object-----------------------------------------------------

// object holo akta data type ata amader mon moto kore data toiri korte pari 

// strdent 1:
// math: 50
// chemistry: 75
// physices: 95
// higher math: 90

// [80, 75, 95, 90]

// 052. Object Literal vs Constructor------------------------------

// var obj = {}
//   obj.x = 10

// console.log(typeof obj);
// console.log(obj);


// var point = {
//   x: 10,
//   y: 20
// }

// point.y = 30
// point.z = 30 
// console.log(point);

// var obj = Object()
// obj.a = 10 

// console.log(obj);

// var obj2  = new Object()
// obj2.b = 20

// console.log(obj2);


// var obj = {}
// obj.x = 10 

// var obj1 = Object(obj)
// obj1.y = 20 

// var obj2 = new Object(obj1)
// obj2.x = 30

// // console.log(obj); 
// // console.log(obj1);
// console.log(obj2);


// 052. Object Literal vs Constructor-----------------------------------------


// var sr = {
//    person: 'jhankar',
//    person1: 'sagor',
//    person2: 'rohim'
// }

// var arr = [2,3,4,5,6,7,8,9] 

// var func = function () {
//    console.log('He is wesome!!');
//    return 7 + 5
// }

// console.log(typeof sr);
// console.log(typeof arr);
// console.log(typeof func);
// // console.log(typeof );

// typeof "John"              // Returns "string"
// typeof 3.14                // Returns "number"
// typeof true                // Returns "boolean"
// typeof false               // Returns "boolean"
// typeof x                   // Returns "undefined" (if x has no value)



// typeof "John"                 // Returns "string"
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined" *
// typeof null                   // Returns "object"

// console.log(typeof [1,2,3,4] );


// "John".constructor                // Returns function String()  {[native code]}
// (3.14).constructor                // Returns function Number()  {[native code]}
// false.constructor                 // Returns function Boolean() {[native code]}
// [1,2,3,4].constructor             // Returns function Array()   {[native code]}
// {name:'John',age:34}.constructor  // Returns function Object()  {[native code]}
// new Date().constructor            // Returns function Date()    {[native code]}
// function () {}.constructor        // Returns function Function(){[native code]}


// var str = String(100000000000000)
// var num = Number('50000000000000')
// var bool = Boolean('booooooooooolean')
// var err = Array([1,2,3,4])
// var obj = Object({name:'imran', sagor: 'helo'})
// var dat = Date()
// var fun = function () {} 


// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof err);
// console.log(typeof obj);
// console.log(typeof dat);
// console.log(typeof fun);


// console.log(Date.parse('2020-01-01'))
// console.log(Date.parse('abcdddd'))

// const isDate = (date) => {
//   return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
// }

// console.log(isDate('2020-01-01'))
// console.log(isDate('abc'))

// 054. Setting Object Properties in Javascript-------------------------------

// var point = {
//   x: 10,
//   y: 20
// }

// point.x = 200
// point.y = 400
// point.z = 600
// console.log(point);
// console.log(point.d);

// point['y'] = 100 

// var prop = 'abcd'
// point[prop] = 55
// console.log(prop);

// var str = {
//   a: 5,
//   b: 5
// }

// str.a = 10 
// str['b'] = 20
// str.c = 30
// var sar = 'Aa'
// str[sar] = 'Aa' 

// delete str.a 
// delete str.b
// delete str.c


// console.log(str);
// console.log(str.d);

// 056. How to Compare Two Objects in Javascript ---------------------------------------

// var obj1 =  {
//   a: 10,
//   b: 20
// }

// var obj2 =  {
//   a: 10,
//   b: 2
// }


// // console.log(obj1 === obj2) avabe object compare kora jabe na.than

// if(obj1.a === obj2.a && obj1.b === obj2.b){
//   console.log(true);
// } else {
//   console.log(false);
// }

// console.log(obj1);

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));


// var obj1 =  {
//   a: 10,
//   b: 20
// }

// var obj2 =  {
//   a: 10,
//   b: 20
// }

// // if(obj1.a === obj2.b && obj1.b === obj2.a){
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// // object compare abave korte pari 


// 057. How to Iterate Object Properties in Javascript-----------------------------------------------------

// var obj = {
//   x: 40,
//   y: 60,
//   z: 75
// }

// console.log('x' in obj); // in /aseni
// console.log('p' in obj);


// for ( var i in obj){
//   console.log(i);
//   console.log(i + ': ' + obj[i]);
// }

// var per = {
//   person1: 'korim',
//   person2: 'rohim',
//   person3:  1000000
// }

// // console.log('person1' in per);

// for(var x in per){
//   console.log(x + ': ' + per[x]);
// }

// 058. Object Methods Provided by Javascript-------------------------------------------

var obj = {
  x: 40,
  y: 60,
  z: 75
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj ));

// var obj2 = obj 
// obj2.x = 50
// obj2.y = 100

// console.log(obj);
// console.log(obj2);

// var obj2 = Object.assign({}, obj)
// obj2.x = 100 

// assign diye object copy korle new add kora jay
// var newObj = Object.assign({} , obj)
// newObj.x = 2000

// console.log(obj);
// console.log(newObj);


// ------------------------------------

// var student = {
//   fname : 'Babik miya',
//   sname : 'Steak Leaner',
//   lname : 'rakibul Hassan'
// }

// student.fname = 'Auntor'
// student['sname'] = 'Morsalin'
// student.add = 'Osam boy Imran'

// delete student.lname  

// console.log(JSON.stringify(obj) === JSON.stringify(student1));

// for(var pv in student){
//   console.log(pv + ': ' + student[pv]);
// }

// console.log(Object.entries(student ));
// var soo = Object.assign({}, student)

// console.log(student);
// console.log(soo);












// rakibul praktis korlam today------------------------------------------


// function fullName (fname, lname) {
//   console.log(fname + ' ' + lname);
// }

// fullName('auntor', 'nova')


// function add (a , b){
//   // console.log(a + b);
//   // console.log(arguments);
//   var arr = arguments
//   var sum = 0
//   for(var i = 0; i < arr.length; i++){
//     // console.log(arr[i]);
//      sum += arr[i]
//   }
//   console.log(sum);
// }

// add(2,3,4,5,6, 7, 8, 9)


// function add (a, b) {
//   var result = a + b
//   return result; // return pore kono code rakle seta kaj korbe na 
// }

// var r = add(2,3)
// console.log(r);

// function add (a, b) {
// var sum  = a + b 
// function sqr (){
//   var result = sum * sum;
//   return result
// }
// return sqr()
// }

// console.log(add(2,5));

// js pora jaigay hossce gobal scope 

// akta function korle akta jaiga toiri hoi tai hossce scope 



// function call(a, b, cb){
//   var c = a - b
//   var d = a + b

//   var res = cb()
//   return res
// }


// console.log(call(5,2));