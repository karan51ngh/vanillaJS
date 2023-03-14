// getAttribute returns the value of the attribute
let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a);

// hasAttribute tells wether an element has a particular Attribute set or not
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// first.setAttribute("hidden", "true")
// first.setAttribute("class", "cutie pie")

// first.removeAttribute("class")
// console.log(first.attributes)


/*
 custom attributes: FORMAT: data-*
 a custom attribute data-woffer is avaiable as element.data.woffer 
*/
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)