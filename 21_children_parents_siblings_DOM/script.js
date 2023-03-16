/*
In the DOM, each node has a parent, a list of children, and possibly one or more siblings.

- The parent of a node is the node that is one level above it in the DOM tree. 
  It is the node that directly contains the current node.

- The children of a node are the nodes that are one level below it in the DOM tree. 
  They are the nodes that are directly contained within the current node.

- The siblings of a node are the nodes that have the same parent as the current node. 
  They are the nodes that share the same level in the DOM tree.
*/

// For Example in the following DOM tree:

/*
<body>
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>
</body>
*/

/*
The parent of the div element is the body element.
The children of the div element are the h1 and p elements.
The siblings of the div element are none, since it is the only child of the body element.
The parent of the h1 element is the div element.
The siblings of the h1 element are the p element, since they share the same parent (div).
*/

// CHILDREN
console.log(document.body.firstChild) // first child node of an element 
/* 
>    will return #textNode if the code is:

    <body>      
        <div>
            <p> Don't you give up!</p>
            <span> Used to Believe.</span>
        </div>
        <script src = 'script.js'></script>
    </body>

>    will return div if the code is:

    <body><div>
            <p> Don't you give up!</p>
            <span> Used to Believe.</span>
        </div>
        <script src = 'script.js'></script>
    </body>

*/
console.log(document.body.lastChild) // last child node of an element

console.log(document.body.childNodes) //Nodelist of all the child nodes (not an array)
let arr = Array.from(document.body.childNodes) // To convert to an Array

console.log(document.body.childNodes.length)

console.log(document.body.firstChild === document.body.childNodes[0])
console.log(document.body.lastChild === document.body.childNodes[document.body.childNodes.length - 1])

console.log(document.body.hasChildNodes()) // return True/False


let cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;

// console.log(nodeName)
// console.log(nodeType)

// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('div.container');

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount); // Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);

// SIBLINGS
/*
In the DOM, nextSibling and previousSibling are properties of a node that represent the next or previous sibling node of the same parent node.
nextSibling refers to the next node in the list of children of the parent node, 
while previousSibling refers to the previous node in the same list.
*/

// PARENT
/*
In the DOM, the .parentNode property is a reference to the parent node of a given node. 
It returns the parent node of the current node, or null if the node has no parent.
*/

let a = document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)

/*
Both the .parentNode and .parentElement properties in the DOM refer to the parent node of a given element node. 
- The main difference between them is that:

- .parentNode can refer to any type of node that is a parent of the current node, including non-element nodes such as text nodes and comment nodes.
- .parentElement specifically refers to the immediate parent element node of the current element node. 
- If the current node does not have an immediate parent element node, then .parentElement returns null.
*/