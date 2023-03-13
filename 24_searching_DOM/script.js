// Making the card title red

let ctitle = document.getElementById("firstcardtitle");
ctitle.style.color = "red";

let ctitles = document.getElementsByClassName("card-title");
ctitles = document.querySelectorAll(".card-title"); // . for class name

ctitles[1].style.color = "blue";
ctitles[2].style.color = "green";
console.log(ctitles);

document.querySelector(".this").style.color = "black";
document.querySelector(".this").style.background = "red";

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

// queryselector -> 1 element
// queryselectors -> all elements