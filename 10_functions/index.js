function averagee(x,y) {
    return (x+y)/2; 
}

let a = Number.parseInt(prompt("enter a"));
let b = Number.parseInt(prompt("enter b"));

console.log("Average of "+a+" and "+b+" is "+ averagee(a,b));

// arrow function

const summ = (a,b)=> {
    return a+b;
}

console.log("sum of "+a+" and "+b+" is "+ summ(a,b));