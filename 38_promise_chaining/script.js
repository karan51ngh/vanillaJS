let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
            console.log("Resolved after 2 seconds");
            resolve("p1's value");
    }, 2000);
})

p1.then((value) => {
    console.log(value);
    // returning a promise
    return new Promise((resolve, reject) => {
            setTimeout(() => { resolve("p1.then's value") }, 2000);
    }) 
}).then((value) => {  // then for the returned promise
    console.log(value);
    return 2; // JS converts it to a promise automatically
}).then((value)=>{         
    console.log("last then");
    console.log(value);
})