/*
element selectors:
1. Single element selector
2. Multi element selector
*/


// 1. Single element selector

let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;

element.innerText = 'Hey wassup!';
element.innerHTML = '<b>Hey wassup!</b>';
element.style.color = 'red';
// console.log(element.innerText);


let sel = document.querySelector('#myfirst');  // # for id
sel = document.querySelector('.child'); // . for class
sel = document.querySelector('div'); // tag name, returns first tag NOT all
sel.style.color = 'green';
console.log(sel)

// 2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems)

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
   element.style.color = 'blue'; 
}
// Array.from(elems).forEach(element => {
//     console.log(element);
//    element.style.color = 'blue'; 
// });
// console.log(elems[0].getElementsByClassName('child'))