let age = prompt("What's your age mate?");
console.log(typeof(age)); //promt always take string
age = Number.parseInt(age) //converting the string to a number
console.log(typeof(age)); 

if (age > 18){
    alert("You can drive Legally");
}
else if(age == 18){
    alert("Heavy Driving");
}

else {
    alert("NEIN!!!");
}

// ternary method:

console.log("You can ", (a < 18? "not drive" : "drive"));