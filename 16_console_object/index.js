console.log(console); // prints out all details about console
console.log(typeof console);


console.log("Hey karan51ngh!"); // returns nothing

console.error("This is for prininting errors in the console");

console.assert(64 > 960);  // assert throws an exception pnly if the assertion fails
console.assert(64 > 8); // assertion passes so nothing happens

obj = {
    a:1,
    b:2,
    c:3
}

console.table(obj)

console.warn("Don't consume sugar") // prints warning
console.info("chess has 64 squares") // similar to log, just gets added under the info tag

console.time("lable-here");
let i = 5;
while(i >= 0)
{
    i--;
}
console.timeEnd("lable-here");

console.time("lable-here-2");
for(let i = 5; i>=0; i--)
{
    
}
console.timeEnd("lable-here-2");