// --------------------------String---------------------------

// 037. What is String


// je kono text rap kora ase single code ba dubel coder bitor 

// 'string' "sfsdfsd"
// ['s', 't', 'r', 'i','n', 'g'] c langues bola string abave 

// tiping ar sobidarte single code babohar kora valo lekte onek easy karon shirt dorte hoy na 

// 038. String Literal vs Constructor-------------------

// var str = 'Something' // String literal 
// var str2 = String('Something') // String Constructor

// console.log(str2);

// var n = 10 
// // var str  = n + ''
// // var str = new String(n)   //New Constructor babhar korbo na just String babohar korbo
// // string ba number ba Boolean babohar korle akta object return korbe 

// // var str  = n.toString()
// console.log(str);

// var x = 100 
// var one = x + '' 
// var two = String(x)
// var three = new String(x) // new ta babohar korbo na. korle akta object dibe
// var four = String(x)  
// console.log(four);

// 039. What is Escape Notation---------------------------

// var str  = 'This  \'String\'' 
// var str  = 'This  \nString' link bek kore 
// var str  = 'This  \tString'  // gap asbe
// var str  = 'This  \\tString'  // deyer joono

// console.log(str);

// 040. How to Compare Two String---------------------

// var a = 'aaaZ'
// var b = 'aaaz'

// jokon doita curreter jodi mile jay tokon compure hobe second curretter dara 

// console.log(a > b);

// console.log('a' > 'Z');
// jekono small letter jekono capital letter take boro .
// small letter ar modde sob take chato letter hossce a ar sob take boro letter hossce z

// captal sob take boro Z ar sob take choto A 


// console.log('001' == 1)
// comparition korar somoy porapori olto comparition korar somoy jodi string take jodi number ar sate comparition kora hoy tokon string take number a convert kore fele 


// 041. String Methods Provided by Javascript---------------------------------------

// method age take kora ase choto kore coll kore babohar korte pari  

// var a = 'I am'
// var b = 'MD Imran'

// var c = a.concat(' ', b)
// var d = c.substring(5,7) // 8 ar por take last porjoto nibe
// console.log(d);

// console.log(c.charAt(2)); // kono akta string ar bitor kono akta index a kon currecter ase seta jodi jante chai taile charAt method babohar korte pari, ata eror moto kolpona kore 

// console.log(c.startsWith('I am')); // jodi startsWith i am start hoy taile true retrun korbe ar jodi hoy taile false return korbe 

// console.log(c.endsWith('Imran')); // ai text endsWith dara start hoice kina hoile true retrun korbe na hole false reutrn korbe 

// console.log(a.toUpperCase());
// console.log(b.toLocaleLowerCase());

// console.log('      fddf       '.trim()); // samne picone space remove korar jonno trim method babohar korte pari 

// spit method akta text ke word  bege akta a akta array te ropanto korbe 
// console.log(c.split(' ')); // boro akta string ke array te ropanto korar korar jonno split method babohar korte pari


// 042. How to Get Length of a String--------------------------------

// var str = 'DM Imran'

// var length = 0 
// while (true) {
//     if(str.charAt(length) == ''){
//         break
//     } else {
//         length++
//     }
// }

// console.log(length);
// console.log(str.length);
// console.log('dfdssssssssssssssdfdsfds'.length);

// There is nating to ory just chill 

// var name = 'heloBoroVkklklklai'

// var len = 0
// while(true){
//     if(name.charAt(len)  == ''){
//         break
//     } else {
//         len++ 
//     }
// }

// console.log(len);