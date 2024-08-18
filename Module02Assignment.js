let Fname = prompt("Enter your first name:"); // User is asked to enter their name
console.log("Welcome aboard, " + Fname + "!"); // Display welcome message once user enters name

const PiValue = 3.1415926; // Defining the PiValue constant to 7 significant digits

let myFaveNum = prompt("Please enter your favorite number:"); // User must enter their favorite number

let radius = parseFloat(myFaveNum); // Must convert input to a number as the prompt will return a string value, using parseFloat to support decimal numbers

let myArea = PiValue * Math.pow(radius, 2); // Calculation of the area of a circle using the formula Pi * r^2, stores result in new variable "myArea"

let message1 = `Hello ${Fname}, thank you for joining us today. We hope you had a pleasant experience. 
Based on your input, if your favorite number was the ${radius} of a circle, 
the area of said circle would be ${myArea.toFixed(7)}.`; // Displays a message with each variable and its contents along with text describing each variable

let message2 = 
    "<h1>Results</h1>" +
    "<p><b>First Name:</b> " + Fname + "</p>" +
    "<p><strong>Pi Value:</strong> " + PiValue + "</p>" +
    "<p><em>Favorite Number (Radius):</em> " + myFaveNum + "</p>" +
    "<p><strike>Area of the Circle:</strike> " + myArea.toFixed(7) + "</p>";

document.getElementById('output').innerHTML = message2;
document.getElementById("message1").innerHTML = message1;

console.log("You can never leave");




