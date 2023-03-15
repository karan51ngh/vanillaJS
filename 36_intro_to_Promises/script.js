// PROMISE:
/*
Solution to callback-hell
it is "promise of code execution"
Code either executes or fails, in both cases the programmer is notified
*/

let promise = new Promise(function(resolve, reject) 
{
    // resolve and reject are predefined in JS
    console.log("Hello Friend! PROMISE ME!!!");
    resolve(64);
});

console.log("Hello Friend!")
setTimeout(function() {
    console.log("Hello Friend! It's a slippery slope... (2 secs inside timeout block)")
}, 2000);

console.log("My name is " + "karan51ngh")
console.log(promise)
