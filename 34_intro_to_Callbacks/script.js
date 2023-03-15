//  Async Programming:

// console.log("Start");

// setTimeout(function(){
//     console.log("Between Start and End");
// },2000);

// console.log("End");

/*
setTimeout() is a built-in function that allows you to schedule the execution of a function or a code snippet after a specified delay (in milliseconds).
It takes 2 parameters: 
1st parameter: the function to be executed
2nd parameter:  the delay in ms.
*/

// Callback Fucntion:
/*
A function passed as a function into another function as an argument,
which is then invoked inseide the outer function to complete an action.
*/

// Callbacks
function loadScript(src, callback) 
{
    let script = document.createElement("script");
    script.src = src;
    script.onload = function() 
    {
        console.log("Loaded script, SRC: " + src);
        callback(null,src);
    }
    
    script.onerror = function() 
    {
        console.log("Error loading script " + src);
        callback(new Error("Wrong URL"))
    }
    document.body.appendChild(script);

}

function hello(error,name) 
{
    if(error)
    {
        console.log("The Error is: "+error);
        return;
    }
    alert('Hello Friend!, your script is: '+ name);
}

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello);
loadScript("https://cdn.WRONGURLLLLLL.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello);