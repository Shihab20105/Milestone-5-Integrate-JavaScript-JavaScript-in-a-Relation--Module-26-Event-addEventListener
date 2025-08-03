/*                          26-2 Add onclick handler directly or via javascript */
console.log('This is separate JS file');


/* Basically if you want to you can put 'onclick' on any DOM element  */
/* alt + shift + f  (for To get the formation right ) 
in Visual Studio Code, pressing Alt + Shift + F (on Windows and Linux) or Option + Shift + F (on macOS) will automatically format your code using the default or configured formatter.

Things to keep in mind:
It works for most languages (JavaScript, HTML, CSS, Python, etc.).

Make sure you have a formatter installed (like Prettier or ESLint for JavaScript).

You can configure formatting options in your settings.json or with an extension like Prettier.

To format on save, enable:
*/

// Option 1: Directly set on the HTML element
/* 
Yes, the background color is being directly set on the HTML element using inline JavaScript within the onclick attribute of the <button> element. Specifically:

<button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>
Breakdown:
    'onclick="...":' This is an inline event handler—JavaScript is written directly in the HTML tag.

    'document.body.style.backgroundColor = 'yellow':' This directly modifies the 'style' property of the '<body> ' element.

What does "directly set" mean in this context?
Yes — this means:

The JavaScript sets the style inline (via DOM), as if you had written:

<body style="background-color: yellow;">
It overrides any background color that may have been applied via an external or internal CSS stylesheet.

So yes, the background color is directly set on the '<body>' HTML element via JavaScript.
*/

// Option 2*: Add onclick function
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3:
const makeBlueButton = document.getElementById('make-blue');
//makeBlueButton.onclick = makeBlue();
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Option 3: Another
const purpleButton = document.getElementById('make-purple');
//console.log(purpleButton);
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}