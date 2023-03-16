// PROMISE:
/*
Solution to callback-hell
A promise is an object in JavaScript that represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value.

A promise has three states:
- pending: The initial state when the promise is created and before it has been resolved or rejected.
- fulfilled: The state when the promise has been resolved with a value.
- rejected: The state when the promise has been rejected with a reason (an error or exception).

A promise is typically created using the Promise constructor, which takes a function (called an executor) as its argument.
- The executor function takes two parameters: resolve and reject. 
- The resolve function is used to fulfill the promise with a value. 
- The reject function is used to reject the promise with a reason.
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
