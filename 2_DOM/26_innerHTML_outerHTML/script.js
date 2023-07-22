// console.log() vs console.dir()
/*
    console.log shows the DOM tree
    console.dir shows the element as an object with it's properties
*/

let x = document.getElementsByTagName('span')[0];
console.log(x);
let y = document.getElementsByTagName('span')[0];
console.dir(y);

console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);


// innerHTML property allows to get the HTML inside an element as a string

first = document.getElementById("first");
console.log(first.innerHTML);
first.innerHTML = "<i>hey I am italic</i>";
console.log(first.innerHTML);

 
// outerHTML innerHTML + the element itself

first = document.getElementById("first");
console.log(first.outerHTML); 
first.outerHTML = "<div>hey</div>"
console.log(first.outerHTML);

// textContent provides access to all the text inside an element and no tags
console.log(document.body.textContent);

let azk = document.getElementById("magic");
console.log(azk)
azk.hidden = false;