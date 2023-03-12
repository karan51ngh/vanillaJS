console.log(document.body.firstChild) 
/* 
>    will return eithre #textNode if the code is:

    <body>      
        <div>
            <p> Don't you give up!</p>
            <span> Used to Believe.</span>
        </div>
        <script src = 'script.js'></script>
    </body>

>    will return eithre div if the code is:

    <body><div>
            <p> Don't you give up!</p>
            <span> Used to Believe.</span>
        </div>
        <script src = 'script.js'></script>
    </body>

*/

console.log(document.body.lastChild)
console.log(document.body.childNodes) //Nodelist of all the child nodes
let arr = Array.from(document.body.childNodes)

console.log(document.body.childNodes.length)

console.log(document.body.firstChild === document.body.childNodes[0])

console.log(document.body.lastChild === document.body.childNodes[document.body.childNodes.length - 1])

console.log(document.body.hasChildNodes()) // return True/False


let a = document;
a = document.all;
a= document.body;
a= document.forms;
a= document.forms[0];

a = document.all;
a = Array.from(a).forEach(function(element){
    console.log(element);    
});

// a = document.links;
console.log(a);