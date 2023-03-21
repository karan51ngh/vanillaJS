/*
- In JS, a programm's source code is always read twice.
- Before running it, an Execution Context is created.
- in an Execution Context, in the Memory-part all the variables encountered are assigneed a value 'undefined' and
  for all the functions encountered, their source code is stored.
- after bieng read once, the source code is again read and executed (code-part of the Execution Context).
- Everytime a function call is encountered, an Execution Context for that particular function is created again, and pushed to the Call Stack.
*/

// CODE-1

// printSomething();
// console.log(x);
// var x = 64;
// function printSomething() {
//     console.log("Hello Friend!");
// }


// output:
/*
Hello Friend!
undefined
*/


// CODE-2

// console.log(printSomething);
// function printSomething() {
//     console.log("Hello Friend!");
// }

// output:
/*
ƒ printSomething() {
    console.log("Hello Friend!");
}
*/

// CODE-3 ArrowFunctions (they behave like variables)

printSomething();
console.log(x);
var x = 64;
var printSomething = () => {
    console.log("Hello Friend!");
}
// output:
/*
script.js:43 Uncaught TypeError: printSomething is not a function
*/