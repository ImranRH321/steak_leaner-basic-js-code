
// var obj = {
//     x: 10,
//     y: 20
// }


// function pointer(obj){
//   obj.x = 100;
//   obj.y = 200,
//   console.log(obj);
// }

// console.log(pointer(obj)); 


// console.log(obj);


// function helo(a, b){
//    return a + b
// }

// let sum = helo
// console.log( sum(2,3));
// console.log(typeof sum);



// var arr = []
// arr.push(helo)
// console.log(arr);
// console.log(arr[0](3,4));

// const obj = {
//     sum: helo 
// }

// console.log(obj);
// console.log(obj.sum(20,30));


// setTimeout(function(){
//     console.log('i have created...');
// }, 1000)



function add(a,b){
    return a + b
}

function minupalute(a,b, func){
     
    let c = a + b  // 15
    let d = a -b    // 5

    function multi(){
        let m = func(c,d) 
        return c * d * m
    }
       return minupalute;
}

let mul = minupalute(10,5,add)  
console.log(mul);