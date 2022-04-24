
/* what is programming language meaning ?
একটি প্রোগ্রামিং ভাষা হল এক ধরনের লিখিত ভাষা যা কম্পিউটারকে কী করতে হবে তা বলে। উদাহরণ হল: Python, Ruby, Java, JavaScript, C, C++, এবং C#। সমস্ত কম্পিউটার প্রোগ্রাম এবং কম্পিউটার সফ্টওয়্যার লিখতে প্রোগ্রামিং ভাষা ব্যবহার করা হয়। */

// --------------------------------javascript_start_Leaning ---------------------------

/* 
console.log('Helo world'); 
console.log(" I Love Bangladesh");
console.log(47);
console.log(50.443);

console.log('My Fav No: ' + 9);
console.log(9 +  9 );
*/


/* ১.যদি একটা নম্বর আর সাথে স্টিং যোগ করি তাইলে স্ট্রিং হয়ে যাবে 
২.নম্বর এবং স্ট্রিং ব্যাবহার করে পুরা প্রোগ্রামিং জগত ক্যাপাইয়া  দিতে পারে  ,

৩.জাভাস্ক্রিপ্ট যে কোনো ডাটা কে ভ্যারিয়েবল এ স্টোর করে রাখতে পারি , 
৪. ভ্যারিয়েবল এ আমাদের প্রোগ্রামের সমস্ত ডাটা রাখতে পারি */


/*
 var name = "Rohim"
var age = 22 ;
var corse = 'Steak Leaner Corse';

console.log(name +  ' this is my name');
console.log('My age: ' + age );
console.log('I am Leaning to Javascript' + corse); 
*/

// -----------------------------------variable----------------------------------------

// variable ar name jeta isca seta dete pari kinto javascript kico reserved words keyword ase. segolo babohar kora jabe na .

/*
 1.Exjample
var else = 'somting' ;
console.log(else);
 */

/*
 javascipt camelcase syestem leka hoy.
 var studentCollageName = 'commilla govt collage'
 */

// variable nam deke jeno pore bortite bujte pari se onosare nam dibo.
/* var mathNumber = 10 ;
 var mySchollName = 'T.T.c '
 */

// *=================================Data_type=========================================
// 009. What is Data Types in Javascript.
// 2. amader javascipt bibono typier data ase ?

// = Data type a doi doroner data ase - 1. Primitive type, Object type.

// 1. primitive data type?
 // primitive type javascript a define kora nigiccho data type.

// 2. object type ?
// object type gotito hoy primitve data type take.


// oi primitve ba javasciprt ar nigicco data type diye toiri kora amader mon moto data type. object.
// object javasciprt jan pan sob kico.


// primitive ar bitor ase -
// 1. Number  = 20, 4.5 6.6 ;
//    2. String = 'This is text' + 'this is also', `` bek tik ;
// 3. Boolean = true / false ;
// 4. undifined = kono kico defin kora hoi nai.
// 5. null = kono value nei.


/* // object type ar bitor ase -
* Arry 
* Object 
*Function  */

// 1.*********************************_Number_******************************************
// je number sate kono dosomik number nei take integer bole

// var n = 1234 ;

// je number sate kono dosomik number ase take float sonkha bole 

// var f = 3.12 ;

// *

// var nn = Number('45')   // 45  string to number covert
// var nn = Number(4.432)   // 45  integer

// console.log(nn)           

/* var num = '1032.2';
// console.log(Number(num));
// console.log(Number.parseInt());
// console.log(Number.parseFloat(num))
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE); */

// console.log(Number.parseFloat(nn)) dosmik soho asbe 

// console.log(Number.parseInt(nn))  //dosmik pore asbe na - parseInt- 4

// console.log(Number.MAX_VALUE); // javasciprt store korte parbo

// console.log(Number.Min_VALUE);

// console.log(1/0); // infinity
// var n = '3' ;
// // console.log(n * 3);  multiply korle gon hobe.
// console.log(n + 3); //  string convert jog hobe 


// console.log('abc' * 10); // text ke 10 dara gon kora posiable na tai  ata NaN. asbe.

// 2.*********************************_String_******************************************

// je kono kico single ba dobel code ase tai String . bek tik diye kico declare korle string hobe.


// var str = 'String' 
// var str2 = "String"
// var str3 = `String`
// var str4 = String('ddfdfd')    // number ke string convert 
// var str5 = String(124)        // number ke string convert
// var str6 = String(3.2344)     // number ke string convert

// console.log(str4,str5,str6);



// 3.********************************_Boolean_****************************************
// 012. Basic Booleans in Javascript

// Boolean 2 ta value ase - true ar false 


// var b1 = true 
// var b2 = false 

// var b3 = Boolean(true)
// var b4 = Boolean(false)

// console.log(b3,b4);


// / 3.********************************Null vs Undefined*******************************
// 013. What is Null & Undefined in Javascript 

// javascrpt a amra jokon variable deklare kori kinto kono value assign na kore takhi tokon bole =undefined 

// kono akta value expect korsi tokon define korte pari null dara 

// kinto doita same jinas na 

// var abc  // undifined
// var xyz = null // null

// console.log(null);
// console.log(abc);
 
// var hex =  0xff  // hex 0x
// console.log(hex);

// var oct = 0756 
// console.log(oct);  // octal 0


// <--------------------------Type Conversion with Truthy Falsy------------------------->
// 014. Type Conversion with Truthy Falsy Value

// type Conversion mane ki ?
//  akta data type takhe jokon onno arek ta data type a chole jay ba convert kori sei concepts bola hoy type Conversion


// var str = '1000' 
// var n  = 10 

// console.log(str * n); // 1000
// console.log(str + n); // string hobe 1000 

// string ke number a sotik babe convert korte chai ?
// console.log(Number(str)); 
// console.log(Number.parseInt(str));


// number ke string kivabe opanto korbo abave ?
// console.log(n.toString());
// Number = constektor 

// console.log(String(Infinity)); // Infinity ke string kara jabe

// console.log(Boolean(-Infinity)) // akta infinity ke jodi Boolean a convert kore tokon true return kore.


// javascript kico kico value ase je value golo ke falsi dore ney.

// Falsy values = '' , 0 , null , undifined , NaN  


//  console.log(Boolean(''));
// console.log(Boolean('dfdfsdfsd'));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(-0));
// console.log(Boolean(456));


// 0 , -0 bade je kono number dile true return korbe ba tuty value

// poyejoner katire onek somoy compilar nije nije type ke converstion  kore ney . abar onek somoy amader ke convet kore dite hoy. ata kei bolbo type convertion.

// console.log(true);
// var x = false ;
// console.log(x.toString());  // boolean ke string convert kora jay.

//  conektaksion: String, Number, Boolean .


// <--------------------------All Operators in Javascript------------------------->
// 016. All Operators in Javascript

// Arithmetic Operator 
// + - * / % ++ --

/* 
var a = 11 ;
var b = 6 ;

// console.log(a % b); //5    // bag ses ber korar kaje babhoar kora hoy % mudolas


// Increamental
// pre Increament - post Incremental
console.log(a++) // a + 1
console.log(a);
console.log(b--);
// ++ Jodi variabe ar pore thake take bolbo - post Incremental. porer line 1 add hobe.

// ++ Jodi variabe ar samne thake take bolbo - pre Incremental. aki line 1 jog hobe. 
*/

// Assingment operator 

/* var a = 10 ;
var b = 20 ;

// a = a + b 
a += b

console.log(a );

a -= b
console.log(a);

a *= b
console.log(a);

a /= b
console.log(a);

a %= b
console.log(a); */

// Comparistion operators
/* // Comparistion operators Boolean value return kore 
var a = 10 
var b = 20 
console.log(a == b); // false
console.log(a != b); // true 

console.log(a > b);  // false
console.log(a < b);  // true

a = 20

console.log(a >= b); // false 
console.log(a <= b); // true

var c = '50'
var d = 50

console.log(c === d); // value ar type mass korte hobe.

console.log( c !== d);  // value ar type mass korte hobe. */


// Logical Operoter ?
/*
&&  // doita sorto poron hote hobe.
||  // akta sorto poron hole hobe
!  // je result a retrun korok na negetive value return korbe. */


// Bitwise Operator?
// & 
// | 
// ~ 
// ^ 
// << 
// >> 
// bainary jara kaj kore tara ai golo kaje lage 

// console.log(typeof 'String');

// ----------------------------------Statements_in Javascript----------------------------
// 017. What is Statements in Javascript 
  
/* 
console.log('Hello World'); // Statements 
// je kono programing lengos a ba javascript a je kono line of code kono menning full orto pokas kore take bole Statements 
                                
var str = 'string' // statement   
var number = 10 + (30 / 5) * 5 

var a = 10 
var b = 20 
// ai gola sob simple statement abong last semikolon dite hoy ta opsonal na dile hoy
var c = a >= b   
*/


// new line create koro ?
// -----------------------------Math Functions---------------------------------
// 018. Math Functions Provided by Javascript

// * problem niye kaj korar jonno javascript a kota object ase jar nam Math 
// * Object holo akta boro hap jar bitor akta nidisto probelm solve korar somohosto bisoy bosto take jemn Mathmetics.
/* 
console.log(Math.E)
console.log(Math.PI)

var n = 4.584
console.log(Math.abs(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));
console.log(Math.round(n)); // 4 operar takle 1 biddi pay
console.log(Math.max(400,500, 600));
console.log(Math.min(400, 500, 200));
console.log(Math.pow(2, 3));
console.log(Math.pow(3, 5));
console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.round(Math.random() * 50 + 1));   */

// -------------------------Date Functions----------------------------
// 019. Date Functions Provided by Javascript
/* 
var date = new Date()  // bortoman somoy dibe
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());

console.log(date.getFullYear());
console.log(date.getMonth());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
 */

// 020. What is Comments in Javascript ------------
