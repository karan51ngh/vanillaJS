// ELement only navigation

/*
When we don't want text or comment nodes.
Ex:
- document.previousElementSibling VS document.previousSibling
- document.nextElementSibling VS document.nextSibling
- document.firstElementChild VS document.firstChild
*/

// let b = document.body
// console.log("First child of b is: ", b.firstChild)
// console.log("First Element child of b is: ", b.firstElementChild)

function changeBodyRed()
{
    document.body.firstElementChild.style.background = 'red';
}

changeBodyRed();