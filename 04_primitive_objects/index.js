// Primitive Datatypes
console.log('null');
console.log('number');
console.log('Boolean');
console.log('BigInt');
console.log('string');
console.log('Symbol');
console.log('undefined');

let a = null;
let b = 64;
let c = true;
let d = BigInt("960");
let e = "karan51ngh";
let f =Symbol("A Symbol");
let g = undefined;
let h;

console.log(a,b,c,d,e,f,g,h);

console.log(typeof d);

// Non Primitive Datatype - Objects

const item = {
    "name" : "karan51ngh",
    "system" : "zephyrus",
    "age" : 21,
    "OS" : undefined
};

console.log(item)
console.log(typeof item) //prints object as the type

// Objects are like Python Dictionaries
