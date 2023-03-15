let p1 = new Promise(function (resolve, reject) {
    console.log("Promise is pending");
    setTimeout(() => {
            // console.log("I was a promise that's been resolved");
            resolve(true);
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

// To get the value (after p1 has been completed)
p1.then((value) => {
    console.log(value)
})

// To catch the errors
p2.catch((error) => {
        console.log("some error occurred in p2")
})

// p2.then((value)=>{
//     console.log(value) 
// },(error)=>{
//     console.log(error)
// })