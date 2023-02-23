#### SESSION #5
# THE DOCUMENT OBJECT MODEL & EVENT HANDLING


## 1 WEB STANDARDS
LIVING STANDARDS
HTML standard (current HTML5)
W3C.org
https://www.w3.org/TR/html52/

ECMAscript  (current ES2022)
ecma-international.org
https://262.ecma-international.org/13.0/

CSS (current CSS 3 - no new version since then)
W3C.org


## 2 DOCUMENT OBJECT MODEL
Abstract and standardized representation of the HTML document independent of the browser render of the page but fully linked (live).
DOM Standards and Levelshttps://caniuse.com/#search=dom
Some browsers do add in variations to the model  eg. https://quirksmode.org/dom/html
Basically a collection of objects within objects (called Nodes and NodeLists)


## 3 THE DOM TREE

```
<!DOCTYPE html>
<html lang="en">
<head></head>
<body>
<h1>My Heading</h1>
<p>This is some text in a paragraph.</p>
</body>
</html>
```
## 4 THE DOM TREE

```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>This is the Page Title</title> 
</head>
<body>
<!-- this is a comment -->
  <h1 id="title">Main Title</h1>
  <span>Below is a <strong>table</strong></span> 
  <table class="primary_table">
   	<tr>
       		<td>Row 1 Cell 1</td> 
		<td>Row 1 Cell 2</td>
    	</tr> 
  </table>
  <span>Above is a table</span> 
</body>
</html>
```

## 5 DOM NODES

DOM has different types of nodes. Some common ones:
Element node: 1
Text node: 3
Comment node: 8
The top level node, which is document: 9


## 6 DOM METHODS

Accessing the document object:  document
```
const body = document.body;		// returns node object - level 1
 	// returns "object"
console.log( body.nodeType);	// returns integer
console.log( body.nodeName);	// returns name "BODY"
console.log( body.nodeValue);	// returns nothing since it only has childnodesconsole.log( typeof(body) );
console.log( document.documentElement);	// returns top level (usually HTML)
const images = document.images; 	// returns a list of image nodes
const forms = document.forms; 	// returns a list of forms
const links = document.links; 	// returns a list of links inside anchors
```

## 7 DOM METHODS

Getting elements:
```
const title = document.getElementById('title');				// returns node object
const table = document.getElementsByClassName('primary_table'); 	// list of table objects by classname
let spans = document.getElementsByTagName('span');			// list of span objects
```
Element list - similar to array (has length property) and can be iterated. eg.
```
for (let i = 0; i < spans.length; i++) {
  let item = spans[i];
  console.log( item.nodeType );
}
```

## 8 DOM METHODS

querySelector: returns first match on any element based on the css query
```
const spans = document.querySelector('.primary_table td');	// first span objects
```

querySelectorAll - returns the node list
```
const spans = document.querySelectorAll('span');			// list of span objects
```


## 9 DOM NAVIGATION

childNodes returns ALL nodes that are children of a DOM object node:
```
const tables = document.querySelector('.primary_table');	// list of table objects by class
tables.childNodes;
```

children returns all ELEMENT nodes that are children of a DOM object node:
```
tables.children; // returns only child element Nodes
```

parentNode returns the parent node of a DOM object node:
```
tables.parentNode;
```


## 10 DOM NAVIGATION

nodeValue returns  value inside a DOM object node containing text:
```tables.nodeValue;	//returns null
tables.getElementsByTagName('td')[0].childNodes[0].nodeValue; //returns content
document.querySelector('h1').childNodes[0].nodeValue; //returns content
```
textContent/innerHTML returns  values inside a DOM object node:
```
const tables = document.querySelector('.primary_table');	// list of objects inside table
tables.textContent;
tables.innerHTML;
```


## 11 DOM ATTRIBUTES

All HTML elements have attributes such as class, id, src, and href:
```
tables.getAttribute("class")
const metas = document.getElementsByTagName("meta");
for (let i=0; i<metas.length; i++) { 
if (metas[i].getAttribute("charset")) { 
    	console.log ( metas[i].getAttribute("charset") ); 
      }
} 
// OR
console.log(document.querySelector("meta[charset]").getAttribute("charset"));
```
Custom Data Attributes:
```
tables.dataset["columns"];	// return value of data-columns attribute
```

## 12 DOM ATTRIBUTES

Class attributes:
```
tables.className;   // return "primary_table"

// returns a object list of all classes
tables.classList.contains("primary_table");

tables.classList
```

## SETTING DOM ATTRIBUTES

Using generic attributes:
```
tables.className;		// return "primary_table"
tables.setAttribute("class", "sec_table");
tables.setAttribute("id", "FirstTable");
document.querySelector("meta[charset]").setAttribute("charset","ASCII");
```

For Class attributes only:
```
tables.className = tables.className + "sec_table";		// return "primary_table"
tables.classList.add("third_table");	// returns a object list of all classes
tables.classList.remove("sec_table");
tables.classList.toggle("enabled");
```

## UPDATING DOM 

Create a new element:
```
const new_para = document.createElement('p');
const text = document.createTextNode('This is the end.');
new_para.appendChild(text);
```
OR
```
const new_para = document.createElement('p');
new_para.textContent = "This is the end.";
```

## UPDATING DOM 

Add to Page:
```
document.body.appendChild(new_para); //adds to end of body

const top_head = document.getElementsByTagName('h1')[0];
top_head.appendChild(new_para); //adds to end of h1 tag

const sect = document.getElementsByTagName('section')[0];
const title = sect.getElementsByTagName('h1')[0];
sect.insertBefore(new_para,title); // //adds before h1 tag
```

## UPDATING DOM 

Removing elements:
```
sect.removeChild(new_para);
// reference still exists so it can be reinserted.
sect.insertBefore(new_para,title);
```

Replacing elements:
```
h1 = document.getElementById("title");
let oldText = h1.firstChild;
let newText = document.createTextNode("New Title");
h1.replaceChild(newText,oldText)

// alternative non-standard but accepted approach
h1.innerHTML = "New Title"; 
```


## UPDATING DOM 

Playing with Styles:
```
const h1 = document.getElementById("title");

h1.style.border = "2px solid red";

h1.style.backgroundColor = "lightgrey"; //props are in lower camel case

h1.style.display = "none";
```



## EVENTS
Connects user interactions with the DOM.
Events occur whenever user clicks, types, moves the mouse.
Custom events can also be defined in javascript.
Event listeners informs javascript when the event happens.

Events list Reference: 
https://developer.mozilla.org/en-US/docs/Web/Events
OR
https://w3c.github.io/uievents/#event-types-list



## EVENT LISTENERS

Event listener is a DOM method that listens out for any specified event on the page:
```
document.addEventListener(event_type, callback_function);

const an = document.getElementsByTagName('a')[0];
an.addEventListener("click", function() {    alert('xx')});
```

Adding Event listeners to the root (document):
```
addEventListener("click", function() { 
  alert("yy")
}); //click anywhere on the document
```

## EVENT PARAMETER OBJECT

An event object is sent to the callback function:
```
const an = document.getElementsByTagName('a')[0];
const clickFunction = function(e) {
	console.log(e.type); // e contains all properties of the event that occurs
}
an.addEventListener("click", clickFunction);
```


# TYPES: MOUSE EVENTS

The mouseover event occurs when the mouse pointer is placed over the element to which the event listener is attached.The mouseout event occurs when the mouse pointer moves away from an element. The mouseover event occurs when the mouse pointer is placed over the element The mouseout event occurs when the mouse pointer moves away from an element.
const an = document.getElementsByTagName('a')[1];
```
an.addEventListener("click",function(e){ console.log("click") });
an.addEventListener("mousedown",function(e){ console.log("down") });
an.addEventListener("mouseup",function(e){ console.log("up") });
an.addEventListener("mouseover",function(e){ console.log("over") });
an.addEventListener("mouseout",function(e){ console.log("out") });
```

## BLOCK DEFAULT BEHAVIOUR

Prevent redirecting to a link on clicking an anchor:
```
const an = document.getElementsByTagName('a')[1];
an.addEventListener("click",function(e){ 
  console.log("click");
  e.preventDefault();
});
```


## EVENT PROPAGATION

An event is inherited by all child nodes of the node the listener is added to.
**Bubbling** - when event goes up the tree in sequence of priority, firing on elements with more specific event handler to less specific - default
```
const an = document.getElementsByTagName('a')[1];
an.addEventListener("click",function(e){ 
  console.log("click");
  e.preventDefault();
});
```
```
const ap = document.getElementsByTagName('p')[0];
ap.addEventListener("click",function(e){ 
  console.log("click p");
  e.preventDefault();
});
```

To stop propagation:
```
e.stopPropagation();
```



## EVENT DELEGATION

An event is inherited by all child nodes of the node the listener is added to.
```
const list = document.getElementsByTagName('ul')[0];
list.addEventListener("click",function(e){ 
  console.log("click");
  e.preventDefault();
});
```



## Exercises:

1. Update the style of the first paragraph tag in the HTML to use a different font family, color and/or size.

2. Add a new paragraph tag at the bottom of the "section" node.

3. Write code that, on click of a button, can choose a random image from unsplash and add it inside the section tag: (you can use this url as the source: https://source.unsplash.com/random)

4.	Create a table and paint alternative colors to its rows. here's the html Markup:

```
<table>
  <tr>
    <td>Cell 1:1</td>
    <td>Cell 2:1</td>
    <td>Cell 3:1</td>
    <td>Cell 4:1</td>
    <td>Cell 5:1</td>
  </tr>
  <tr>
    <td>Cell 1:2</td>
    <td>Cell 2:2</td>
    <td>Cell 3:2</td>
    <td>Cell 4:2</td>
    <td>Cell 5:2</td>
  </tr>
  <tr>
    <td>Cell 1:3</td>
    <td>Cell 2:3</td>
    <td>Cell 3:3</td>
    <td>Cell 4:3</td>
    <td>Cell 5:3</td>
  </tr>
  <tr>
    <td>Cell 1:4</td>
    <td>Cell 2:4</td>
    <td>Cell 3:4</td>
    <td>Cell 4:4</td>
    <td>Cell 5:4</td>
  </tr>
  <tr>
    <td>Cell 1:5</td>
    <td>Cell 2:5</td>
    <td>Cell 3:5</td>
    <td>Cell 4:5</td>
    <td>Cell 5:5</td>
  </tr>
</table>
```

5.	To an element, add a click handler that opens a popup window. Then add another handler that hides it when clicked outside the popup.



