alert("Enter the Value of a");
let a = prompt("Enter a Here");
a = Number.parseInt(a);
let write = confirm("DO you wqnt to write a to the document?");
if(write) {
    document.write(a);
}
else {
    document.write("Please allow");
}
    