# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### Answer: 

**getElementById** returns a single element (the first with matching ID). It provides fastest performance. 
Syntax: document.getElementById("studentId");

**getElementsByClassName** returns a live HTMLCollection of elements.
Syntax: document.getElementsByClassName("myClass");

**querySelector** returns the first element matching any CSS selector.
Syntax: document.querySelector(".fruitClass") or, document.querySelector("#fishClass");

**querySelectorAll** returns a static NodeList of all matching elements.
Syntax: document.querySelectorAll(".fruitClass");

# 2. How do you create and insert a new element into the DOM?

### Answers: 

**Syntax:** 

```
// access the parentNode
const parentNode = document.getElementById("myBox");
// create new element
const newChild = document.createElement('h1');
// append classname with new element
newChild.className = 'myClass';
// insert data into the element
newChild.innerText = 'Welcome to the website';
// append the new childNode to the parentNode
parentNode.appendChild(newChild);
```

# 3. What is Event Bubbling? And how does it work?

### Answers: 

Event Bubbling is a DOM behavior where an event triggered on a nested element "bubbles up" through its ancestors, triggering the same event on each parent element in the hierarchy. It works in three phases - Capture Phase, Target Phase, Bubble Phase.

1. Capture Phase - Event travels from window down to target.
2. Target Phase - Event reaches the clicked element.
3. Bubble Phase - Event bubbles from target up to window.


# 4. What is Event Delegation in JavaScript? Why is it useful?

### Answers:

**Event Delegation** is a technique where you attach a single event listener to a parent element to handle events for all current and future child elements, leveraging event bubbling.

**Usage:**
1. New elements added later automatically work without extra code
2. Instead of attaching hundreds of listeners, you attach just one
3. less memory consumption
4. Easier to maintain and update


# 5. What is the difference between preventDefault() and stopPropagation() methods?

### Answers:

**preventDefault()** prevents the browser's default behavior. It stops form submission, link navigation, disabling checkbox, preventing text selection etc.

**stopPropagation()** prevents the event from bubbling up the DOM. It isolates event handling to one element. 
