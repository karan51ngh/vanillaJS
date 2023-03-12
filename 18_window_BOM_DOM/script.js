/*

The Window object: The Window object is the top-level object in the client-side JavaScript environment. 
It represents the browser window or frame that contains the web page. 
The Window object provides access to a range of properties and methods related to the browser window, such as the location, history, and screen objects.

The Browser Object Model (BOM): 
The BOM is a collection of objects that represent various parts of the browser window and its functionality. 
This includes objects like the navigator, which provides information about the browser, and the window object, which represents the browser window.

The Document Object Model (DOM): 
The DOM is a programming interface for HTML and XML documents. 
It represents the structure of the document as a tree-like structure, with each node representing an element, attribute, or text content. 
The DOM provides a way for scripts to access and manipulate the content and structure of a web page.

*/

let a = window;
// window.alert("Hello Friend!") AND alert("Hello Friend!") are the same, because window object is global
a = window.document;
a = window.innerHeight;
a = window.innerWidth;
a = scrollX;
a= scrollY;
a=window.location;
a = location.toString();
a= window.history;
console.log(a);