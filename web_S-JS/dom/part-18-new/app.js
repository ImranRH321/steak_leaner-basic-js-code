// function byid(id){
//   return document.getElementById(id)
// }

// const input = byid('input')

// input.addEventListener("keypress", function(e){
//   console.log(e);
//    if(e.code === 'Enter'){
//      document.getElementById('p').innerHTML = `name is ${e.target.value}`
//      e.target.value = ''
//    }
// })


// --

// input.addEventListener("keypress", function(e){
//     if(e.code == 'Enter'){
//       document.getElementById('p').innerHTML = `name is ${e.target.value}`
//       e.target.value = ''
//     }
//   })



// ------checkbox----- 

let form = document.getElementById('form')
console.log(form);

form.addEventListener("submit", function(e){
   e.preventDefault()
  // console.log(this.elements[0]);
  // console.log(this['email']);
let data = {}
let isvalid = false ;
   let elements =  [...this.elements]
   elements.forEach((el) => {
     if(el !== 'submit'){
       isvalid = validetion(el)
       if(isvalid){
        data[el.name] = el.value
       }
      else{
        alert(`${el.name}  is requied`)
      }
     }
  })
   if(isvalid){
    console.log(data);
    this.reset()
   }
})

function validetion (el){
  if(!el.value){
    return false
  }
  return true 
}