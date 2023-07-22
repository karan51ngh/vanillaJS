/* 
    addEventListener is used to assign multiple handlers to an event
    element.addEventListener(event,handler)

    removeEventListener is to remove a eventHandler, works only  for same function-objects
*/

let btn = document.getElementById("btn");
// console.log(btn);



let x = function(event) {
    // event is the EVENT-OBJECT
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
    // alert("Hello Friend!")
}

/*
The Event object in JavaScript is a built-in object that provides information about an event that has occurred, 
such as a user clicking a button or pressing a key on the keyboard. 

When an event is triggered, 
a corresponding Event object is automatically created and passed to the event handler function, 
which can then access the information in the Event object to respond to the event.

The Event object contains properties that provide information about the event, such as:

type: the type of event that has occurred (e.g. "click", "keydown", etc.)
target: the DOM element that triggered the event
currentTarget: the DOM element that the event handler is attached to
timeStamp: the time at which the event occurred, in milliseconds since the epoch
keyCode or which: the key code of the key that was pressed (for keyboard events)
clientX and clientY: the coordinates of the mouse pointer when the event occurred (for mouse events)
*/

let y = function(e) {
    // e is the EVENT-OBJECT
    console.log(e)
    alert("It's a slippery slope!")
}

btn.addEventListener('click', x)
btn.addEventListener('click', y)


let a = prompt("Enter a number?");


if (a == "64") {
  btn.removeEventListener('click', x);
//   removeEventListener only works if the function-object is same.
}