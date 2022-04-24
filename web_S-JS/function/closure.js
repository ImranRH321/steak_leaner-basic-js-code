
var b  = 10;

function a (){
    let x = 5
    
   return function(){
       console.log(x);
   }
}

var abc = a()
console.log(abc);