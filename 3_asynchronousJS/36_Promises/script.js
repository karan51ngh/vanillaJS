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

function aFunctionThatReturnsAPromise() {
    let p = new Promise((resolve, reject) => {
        const randomInt = (Math.floor(Math.random() * 9) + 1) * 1000; // Generates a random integer between 1000 and 9000
        if (randomInt >= 5000) {
            setTimeout(() => {
                resolve("resolvedValue" + randomInt);
            }, randomInt);
        }
        else {
            setTimeout(() => {
                reject(Error("rejectedValue" + randomInt));
            }, randomInt);
        }
    });
    return p;
}

let p1 = aFunctionThatReturnsAPromise();
console.log(p1);
setTimeout(() => {
    console.log(p1);
}, 10000)

p1.then((val) => {
    console.log(val);
}).catch((error) => {
    console.error(error);
})