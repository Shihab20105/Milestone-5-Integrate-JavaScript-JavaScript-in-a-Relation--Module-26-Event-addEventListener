/*                          26-9 DOM events summary and home work */

/* 
/ -------------------------------------------------------------------------------------------------------------- /
What are events in JavaScript and HTML?
/ ----------------------------------------------------------------------------------------------------------- /
In JavaScript and HTML, events are actions or occurrences that happen in the browser, usually as a result of user interaction or browser behavior. Events allow you to run JavaScript code in response to these actions, making your website interactive and dynamic.

🔹 Common Examples of Events:

Event Type:	                    Description:                        Example Scenario:

click	                User clicks on an element	                Clicking a button

mouseover	            User moves mouse over an element	        Hovering over a link

keydown	                User presses a key on the keyboard	        Typing in a form field

submit	                A form is submitted	                        Sending a form

load	                A web page or resource finishes loading	    Image or page finishes loading

change	                Value of a form element changes	            Selecting from a dropdown

focus	                An element receives focus	                Clicking into a text input

🔹 HTML Example Using Inline Event
*/
<button onclick="alert('Button clicked!')">Click Me</button>
/*
* 'onclick' is the event attribute.
* The value '(alert('Button clicked!'))' is the JavaScript code that runs when the event occurs.

🔹 JavaScript Example Using 'addEventListener'

<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", function() {
    alert("Button was clicked!");
  });
</script>

* 'addEventListener' is the modern and preferred way to attach events.

🔹 Why Use Events?
Events let your web page respond to:
* User interactions (clicking, typing, submitting forms)
* System activities (loading, resizing, scrolling)
*Mobile gestures (touch, swipe)

Summary:
* Events = interactions or changes that can be detected.
* You use event handlers to run code in response.
* Events make your website interactive. 


/ ----------------------------------------------------------------------------------------------------------- /
Most Common HTML Events:
/ ---------------------------------------------------------------------------------------------------------- /
Here are some of the most common HTML events you’ll use when working with interactive web pages:

🔹 Mouse Events

Event:              	Description:
onclick	                Triggered when the user clicks an element
ondblclick	            Triggered when the user double-clicks an element
onmouseover	            Triggered when the mouse pointer enters an element
onmouseout	            Triggered when the mouse pointer leaves an element
onmousedown	            Triggered when the mouse button is pressed down
onmouseup	            Triggered when the mouse button is released
onmousemove	            Triggered when the mouse pointer moves over an element

🔹 Keyboard Events

Event:               	Description:
onkeydown	            Triggered when a key is pressed
onkeyup	                Triggered when a key is released
onkeypress	            Triggered when a key is pressed (deprecated – use keydown/keyup)

🔹 Form Events

Event:	                Description:
onchange	            Triggered when the value of an input/select/textarea changes
oninput	                Triggered as the user types or changes the input
onfocus	                Triggered when an input gains focus
onblur	                Triggered when an input loses focus
onsubmit	            Triggered when a form is submitted
onreset	                Triggered when a form is reset

🔹 Window Events
Event:	                Description:
onload	                Triggered when the page has loaded
onresize	            Triggered when the window is resized
onscroll	            Triggered when the user scrolls the page
onunload	            Triggered when the page is unloaded (e.g., user closes tab)

🔹 Clipboard Events
Event:	                Description:
oncopy	                Triggered when content is copied
oncut	                Triggered when content is cut
onpaste	                Triggered when content is pasted

🔹 Example: HTML with Inline Events

<input type="text" onfocus="console.log('Input focused')">
<button onclick="alert('Button clicked')">Click Me</button>
Want a Tip?
You should avoid using inline events in HTML (like onclick="...") in large projects. Instead, use JavaScript with addEventListener for cleaner and more maintainable code.



/ ------------------------------------------------------------------------------------------------------- /
✅ How Does an Event Handler Work in JavaScript?
/ ------------------------------------------------------------------------------------------------------- /
An event handler works by waiting for a specific event to occur, and when it happens, it executes a function (your custom code). Here's a step-by-step explanation:

🔁 Step-by-Step: How an Event Handler Works
🟦 1. An element is selected
You target an element using JavaScript — for example, a button.

const button = document.getElementById("myBtn");

🟦 2. You attach an event to it
You use 'addEventListener' (or inline 'onclick') to tell the browser:

"When this specific event happens on this element, run this function."

button.addEventListener("click", handleClick);

🟦 3. The user triggers the event
For example, they click the button ('click' event).

🟦 4. The browser detects the event
The browser notices the click and checks:

* “Does this element have a handler for the 'click' event?”

🟦 5. If yes, the handler function runs
If a handler is attached, the function is called.

function handleClick() {
  alert("Button was clicked!");
}

🧠 Internally:
JavaScript uses something called the Event Loop to keep listening for events in the background — like clicks, keyboard input, etc. When an event happens, it's put in a queue, and the event handler is run when the JavaScript engine is ready.

🧪 Example – Full Flow:

<button id="myBtn">Click Me</button>

<script>
  // Step 1: Select the button
  const btn = document.getElementById("myBtn");

  // Step 2: Attach event handler
  btn.addEventListener("click", function () {
    // Step 5: This code runs when the button is clicked
    alert("You clicked the button!");
  });

  // Step 3: User clicks the button (event triggers)
  // Step 4: Browser detects it and runs the handler
</script>

🎯 Summary
Action:	                        What Happens:
You define a function	        This is the event handler
You attach it to an element	    Using addEventListener or inline HTML
Event occurs	                Browser runs the function automatically


/ ------------------------------------------------------------------------------------------------------------ /
✅ 'addEventListener' in JavaScript
/ ------------------------------------------------------------------------------------------------------------ /

'addEventListener()' is a built-in JavaScript method that allows you to attach an event handler to an element.

It’s the modern and recommended way to respond to user interactions like clicks, key presses, form submissions, etc.

🧾 Syntax
element.addEventListener(eventType, eventHandler, useCapture);

* 'eventType': The name of the event as a string (e.g., "click", "keydown", "submit")
* 'eventHandler:' The function to run when the event happens
* 'useCapture' (optional): A boolean value (true or false) – most of the time you can ignore this or leave it as 'false'

🧪 Basic Example

<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById("myBtn");

  btn.addEventListener("click", function () {
    alert("Button clicked!");
  });
</script>

📌 Why Use 'addEventListener'?
Benefit:	                            Explanation:
✅ Separate JS from HTML	               Keeps your code cleaner and easier to maintain
✅ Add multiple event listeners	       You can add more than one handler to the same event
✅ Supports modern features	           Works well with advanced event handling patterns

🧪 Example: Multiple Listeners on One Element

btn.addEventListener("click", () => {
  console.log("Handler 1");
});

btn.addEventListener("click", () => {
  console.log("Handler 2");
});
Both will run when the button is clicked.

🧠 Named vs. Anonymous Function
Named handler:

function sayHello() {
  alert("Hello!");
}

btn.addEventListener("click", sayHello);
Anonymous handler:

btn.addEventListener("click", function () {
  alert("Hello!");
});
🛑 Remove an Event Listener
You can remove a listener using 'removeEventListener()' — but only if the function is named:

function handleClick() {
  alert("Clicked!");
}

btn.addEventListener("click", handleClick);

// Later...
btn.removeEventListener("click", handleClick);

✅ Summary
* 'addEventListener()' is used to run code when an event occurs.
* It’s flexible, reusable, and better than inline event handlers.
* Works on all DOM elements (buttons, inputs, window, etc.).



/ ------------------------------------------------------------------------------------------------------------ /
🔄 What is Event Bubbling in JavaScript?
/ ------------------------------------------------------------------------------------------------------------ /
Event Bubbling is the process where an event starts from the innermost (target) element and bubbles up to its ancestors in the DOM tree — all the way to the 'document' object.

📖 Imagine this HTML Structure:

<div id="outer">
  <div id="inner">
    <button id="btn">Click Me</button>
  </div>
</div>
If you click the button, the event happens on:

1. #btn (button) ➝
2.#inner (div) ➝
3.#outer (div) ➝
4.document
That’s bubbling — the event “bubbles” up from the deepest target to the top.

🔍 Example of Event Bubbling

<div id="outer">
  <button id="btn">Click Me</button>
</div>

<script>
  document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked");
  });

  document.getElementById("outer").addEventListener("click", () => {
    console.log("Outer div clicked");
  });
</script>

🟡 Output when button is clicked:

Button clicked
Outer div clicked
Because the click event bubbles from the button to the outer '<div>'.

💡 Why is Event Bubbling Useful?
* You can attach a single event listener to a parent and handle events from its children.
This is called event delegation — it improves performance and reduces code.

🛑 Preventing Bubbling
If you don’t want the event to bubble, you can stop it:

btn.addEventListener("click", function (event) {
  event.stopPropagation(); // Stops the bubbling
  console.log("Only button handled");
});

Now the outer '<div>' won’t receive the event.

🧠 Related: Event Capturing (Trickles Down)
There’s another phase called capturing (or trickling) where the event goes top ➝ bottom (document ➝ target).
To handle events during capturing, you pass a third argument as 'true':


outer.addEventListener("click", () => {
  console.log("Capturing outer");
}, true); // true = capture phase

But bubbling is the default behavior.

✅ Summary
Concept:	                    Meaning:
Event Bubbling	                Event goes from the target element up to its ancestors
stopPropagation()	            Stops the event from bubbling up
Event Delegation	            Use bubbling to handle events from child elements via a parent


/ ------------------------------------------------------------------------------------------------------------ /
🔁 What is Event Delegation in JavaScript?
/ ------------------------------------------------------------------------------------------------------------ /

Event Delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to each child element.

It works by taking advantage of event bubbling — when an event occurs on a child element, it bubbles up to the parent, and the parent can "catch" the event.

🧠 Why Use Event Delegation?
✅ Better performance – Fewer event listeners
✅ Simpler code – Especially for dynamic content
✅ Works for future elements – You can handle elements added later (e.g., via JavaScript)

📦 Example: Without Delegation

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () => {
      console.log("Item clicked");
    });
  });
</script>

❌ Adds a separate listener for every '<li>'.

✅ Example: With Event Delegation

<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  document.getElementById("myList").addEventListener("click", function (event) {
    // Only run if a <li> was clicked
    if (event.target.tagName === "LI") {
      console.log("You clicked:", event.target.textContent);
    }
  });
</script>

🔍 What’s happening:
* A single event listener is added to the '<ul>' (the parent).
* When a '<li>' is clicked, the event bubbles up to '<ul>'.
* The handler checks if the clicked element '(event.target)' is a '<li>'.

🧪 Works for Dynamically Added Items Too

const ul = document.getElementById("myList");
const newLi = document.createElement("li");
newLi.textContent = "Item 4";
ul.appendChild(newLi); // Works with the same event listener!

✅ No need to add a new listener for the new <li>!

⚠️ Be Careful:
* Always check 'event.target' to ensure the event came from the right element.
* Don't attach to 'document' unless absolutely necessary — go as close to the target as possible.

✅ Summary
Feature:                            Event Delegation Benefit:
Performance	                        Fewer listeners = faster execution
Clean code	                        Manage events in one place
Dynamic elements	                Automatically works for future child items
*/