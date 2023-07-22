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

function aFunctionThatReturnsAPromise(x) {
    const pr = new Promise((resolve, reject) => {
        // resolve and reject are predefined functions
        console.log("It's a slippery slope...");
        if (x != 64) {
            setTimeout(() => {
                reject(new Error("I don't play Checkers!!!"));
            }, 5000);

        }
        else {
            setInterval(() => {
                resolve("Chess");
            }, 5000);
        }
    });
    return pr;
}

const samplePr = aFunctionThatReturnsAPromise(6);
console.log(samplePr);
samplePr.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err.message);
})

console.log("Hello Friend!");
setTimeout(() => {
    console.log(samplePr);
    samplePr.then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err.message);
    })
}, 7000);