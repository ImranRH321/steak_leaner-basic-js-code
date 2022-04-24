// ------------------------------dom_laibari------------------------

// 1. javascript pora akta website ar designe ar  behebiar change kore dite pare 

// 2. jar mard dome javasceipt akta website ar behebiar change kore html document ar behebiar change kore se hossce dom 

// 2. dom == introduction to DOM-Document Object Model 

// 3. what is dom Document Object model 

// ans : It just an API to interact with HTML document and Change it Later on demand 

// dom = data steakture = tree 

// 4. browser amader html document take line line read kore and parse kore 


// 5. javascript basay agolo akta string kemne dil korbe . tai amader broweser string take read kore bibonno element take node akare sajiye fele 

// ----ul element , li element node, text node,  arokom node covert kore fele . 

// 6. document object model amader onek rokom node niye kaj korte hoy 

// * amader html a joto element ase = h1, p, span, body, document, sobkico hossce element Node 

// * jekono html Element akta element Node 

// * Element node 
// * Text Node 
// * Attribute Node 
// Comment Node 

// 7. dom menupalition bolte = amader je dom tree ta ase seta amra menupalition korbo . update korbo, remove korbo, noto element jog korbo, show korbo. bibonno eppext korbo , tranjition korbo 

// 7. dom menupalition bolte= dom tree ta amra kaj korbo 

// 196. Understanding The Window Object in DOM----------------------

// 1. dom menupalition ketre = window object amader document take dore rake | amader document ar je paren se hossce window object 

// 2. javasceipt ar ketre window hossce gobal  object je object ar modde somohosto kico addas take somohosto function , method , build din method - img, Audio,  math, array, sob kico addas ase window object ar sate . wondow hossce sobar paren object . 

// = html holo akta document 


// 198. Basic Selectors in DOM Manipulation-----------------------------------

// Id, Class, TagName, Name

// let title = document.getElementById('title')
// // console.log(title);

// let pera = document.getElementsByClassName('lead')
// // console.log(pera);

// let li = document.getElementsByTagName('li')
// // console.log(li);

// let listItemOne = document.getElementsByName('list')
// console.log(listItemOne);


// 199. Query Selectors in DOM Manipulation------------------------------
// css selektor same 

// let title = document.querySelector('#title')
// console.log(title);

// let pera = document.querySelector('.lead')
//querySelector potom class tai nibe ata tar poblem  
// console.log(pera);

// let pera = document.querySelectorAll('.lead')
// querySelectorAll jomohosto mess kora element ke nibe 
// console.log(pera);

// let list = document.querySelectorAll('li')

// console.log(list);

// let list_one = document.querySelector('[name^="list-one"]')

// console.log(list_one);


// ------------fuker-paktis--------------

// let id = document.getElementById('one')
// console.log(id.style.color = 'red');

// let  clas = document.getElementsByClassName('peragrap')
// console.log(clas);

// let tagName = document.getElementsByTagName('li')
// console.log(tagName); 

// let Attribute = document.getElementsByName('just_one')
// console.log(Attribute);

// css selektor ::

// let ide = document.querySelector('#one')
// console.log(ide); 

// let classes = document.querySelector('.peragrap') //just akta maching kora potom class ta pabo
// console.log(classes); 

// let classes = document.querySelectorAll('.peragrap') // metching kora sob class pabo
// console.log(classes); 
// ------------------------ 

// 200. What is The Difference Between Two Selectors (getElement vs Query Selector)------------------------------

// let li1 = document.getElementsByTagName('li') // Element Node

// let li2 = document.querySelectorAll('li') // Node [Element, Comment, Text]

// console.log(li1);
// console.log(li2);

// let ul = document.querySelector('ul') 

// console.log(ul.children);
// console.log(ul.childNodes);

// node mane je kono node hote pare 

// element mane shodo element just html element , h1, body, p, head, tag


// 201. How to Traverse DOM Elements--------------------------------------------

// let  list  = document.getElementById('list')

// let parent = list.parentElement 
// console.log(parent);

// let children = list.children
// console.log(children);

// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);

// let li = document.querySelector('li')
// console.log(li.nextElementSibling);

// console.log(list.firstElementChild);
// console.log(list.lastElementChild);


// 202. How to Loop Throw HTML Collections-------------------------------


// let listItem = document.getElementsByTagName('li')

// // let listItems = Array.from(listItem)
// // let listItems = Array.prototype.slice.applay(listItem)
// let listItems = [...listItem] 
// console.log(listItems);


// listItems.forEach( (li, ind) => {
//     let text = li.innerHTML
//     li.innerHTML = `${ind + 1} ${text}`
// })

// 203. How to Create DOM Elements-------------------------

// let li = document.createElement('li')
// li.className = 'list-group-item'
// li.classList = 'list-one' 
// li.setAttribute('title', 'I am fourth Item')
// li.innerHTML = "Four"
// console.log(li);

// -----------------
// li data amader virtual dome ase mani memorite ase 

let li = createElement('li', 'four', list-group-item)

let list = document.getElementById('list').appendChild(li)




let p1  = createElement('p', 'lead', '
Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis deserunt.')

let div = createElement('div' )
append(div, [p1, p2])
console.log(div);

function createElement (tagName, innerHTML, className) {
    let tag =  document.createElement(tagName) 
    tag.innerHTML = innerHTML || ''
    tag.className = className 
|| ''
   return tag
}

function append(parent, children){
   children.forEach(child => parent.appendChild(child))
}