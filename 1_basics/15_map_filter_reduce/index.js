// map

let myArray = [1, 2, 3, 4, 5];
let multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray); // [2, 4, 6, 8, 10]

//  filter

 myArray = [1, 2, 3, 4, 5];
let evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// reduce

myArray = [1, 2, 3, 4, 5];
let summ = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(summ); // 15