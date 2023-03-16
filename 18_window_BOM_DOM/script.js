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

/*
DOM Tree:
- The Document Object Model (DOM) tree is a hierarchical representation of the HTML or XML document as a tree-like structure. 
  When a web page is loaded into a web browser, 
  the browser creates a DOM tree that represents the structure of the document.
- Each element in the document, such as an HTML tag, is represented as a node in the DOM tree. 
  The nodes in the tree can have parent-child relationships with each other, 
  where the parent node is the node that contains the child node. 
  For example, the html tag would be the parent node of the head and body tags.
- The DOM tree provides a way for scripts to access and manipulate the content and structure of a web page. 
  By using methods and properties provided by the DOM API,scripts can add, remove, 
  or modify elements and their attributes in the DOM tree, as well as listen for events and respond to user interactions.

  */

/*
Types of Nodes in a DOM Tree"

In the Document Object Model (DOM) tree, there are several types of nodes, including:
- Element nodes: These are the most common nodes in the DOM tree and represent the HTML or XML tags in the document. 
  For example, <p> and <div> tags would be represented as element nodes.
- Text nodes: These nodes contain the text content of an element, such as the text between <p> and </p> tags.
- Attribute nodes: These nodes represent the attributes of an element, such as the href attribute of an <a> tag.
- Comment nodes: These nodes represent the comments in the HTML or XML document, such as <!-- This is a comment -->.

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