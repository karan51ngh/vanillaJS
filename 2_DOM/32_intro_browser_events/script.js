/*
An Event is a signal that something has happened.
All the DOM nodes events generate such events.

Ex:
- Mouse Events: Click, Context Menu (right click), mouseover, mousedown etc.
- Keyboard Events: Keydown, Keyup etc.
- Form ELement Events: Submit, Focus etc.

*/

let a = document.getElementsByClassName("container")[0];
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "Hello Friend!";
  console.log("Override of the HTML embeddede JS");
}