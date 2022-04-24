
function firstName(a,b, cd){
    
    let c = a + b
    let d = a - b
  
    let m = cd(c,d) 
    return m 

}

function sum (a, b){
    return a + b
}

let result = firstName(10,5, sum)
console.log(result);