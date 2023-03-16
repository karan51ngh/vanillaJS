let a = document;
a = document.all;
a= document.body;
a= document.forms; // returns all the form elements
a= document.forms[0];

a = document.all;
a = Array.from(a).forEach(function(element){
    console.log(element);    
});

// a = document.links; // returns all the link elements
console.log(a);