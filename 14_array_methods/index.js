let tournament_score = [9,8,8,7.5,6,'forfeited']

let b = tournament_score.toString()
console.log(b, typeof b)

let c = tournament_score.join(" and ")
console.log(c, typeof c)

// pop
let d = tournament_score.pop() // pop returns the popped element
console.log(d)
console.log(tournament_score)

// push
let e = tournament_score.push(4) // push returns the new length
console.log(e)
console.log(tournament_score)

// delete
let num = [1,2,3,4,5,6,7,8,9];
console.log(num)
console.log(num.length)
delete num[0];
console.log(num)
console.log(num.length)

// concat
let num1 = [1,2,3,4,5,6,7,8,9];
let num2 = [10,11,12,13,14,15,16,17,18,19];
let num3 = [20,21,22];
let num_total = num1.concat(num2,num3);
console.log(num_total);

// sort 
// alphabetically by default
num = [5,1,4,2,3];
num.sort(); // modifies original array
console.log(num);

num = [11,222,3,44,55555];
num.sort(); 
console.log(num);
//  custom comparator function
// let compare = (a,b) => {
//     return b-a;
// }

function compare(a,b)
{
    return b-a; // decending
    return a-b; // ascending
}
num = [5,1,4,2,3];
num.sort(compare);
console.log(num);

//  reverse
num = [5,1,4,2,3];
num.reverse();
console.log(num);

// splice
// modifies source array
num = [11,222,3,44,55555];
console.log(num);
num.splice(2,2,33333,444444,55,666);
console.log(num);

/*  splice: (arg1,agr2,args...)
    arg1: index at which to delete
    arg2: how many to delete
    args...: all the elemets are added
*/
// slice
num = [11,222,3,44,55555];
console.log(num);
console.log(num.slice(1,3));