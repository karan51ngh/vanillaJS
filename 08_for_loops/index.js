let sum =0;
let n = prompt("enter n");
n=Number.parseInt(n);

for (let i =1; i <= n; i++) {
    sum += i;
}
console.log("Sum of 1st "+ n + " natty numbers is "+ sum);


let obj = {
    fischer:1,
    magnus: 2,
    garry: 3,
    tal: 4,
    anand: 5
}
// for-in loop
for (let a in obj){
    console.log("Marks of " + a + " are "+ obj[a]);
}

// for-of loop (iterable abjects)
for (let b of "karan51ngh"){
    console.log(b)
}
