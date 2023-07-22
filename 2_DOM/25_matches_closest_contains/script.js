let id1 = document.getElementById("id1");
console.log(id1);

// matches checks if an element matches a CSS selctor
console.log(id1.matches(".fake-class"));
console.log(id1.matches(".box"));

// closest looks for the nearest ancestor that matches the CSS selector, starting from the element itself
let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));

// contains True/False depending on if an element is inside a particular element or not
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));