let p1 = new Promise(function (resolve, reject) {
    console.log("Promise is pending");
    setTimeout(() => {
            // console.log("I was a promise that's been resolved");
            resolve("Value passed as a string after being resolved");
            // console.log(p1);
    }, 2000)
})

// console.log(p1);

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))
            // console.log(p2);
    }, 5000)
})

// console.log(p2);

// then and catch are consumers

// To get the value (after p1 has been resolved) (if we are only interested in SUCCESFUL execution)
p1.then((value) => {
    console.log(value)
})

// To catch the errors (after p2 has been rejected) (if we are only interested in catching ERROR)
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })


// general syntax of promises
p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})