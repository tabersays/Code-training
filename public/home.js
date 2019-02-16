/*
 * Quick tutorial reference
 * Here is an awesome site for references https://developer.mozilla.org/en-US/
 */

// Main variables block scope cannot reassign
const myVar = true;
// Block scope can be reassigned
let test;

// Branches if the statement withen evaluates to truthy then run the block of code
if (myVar === true) {
  test = true;
  // else do this if the if block was not run
} else {
  test = false;
}

// Functions a block of code to be executed on call
function myFunction(stuff) {
  return (parseInt(stuff) || 0) + 1;
}

console.log("This will write things to the browsers console");

// should print 2
console.log(myFunction(1));
// should print 1
console.log(myFunction("test"));

/*
 * Operators
 * + - * /
 * Logic operators
 * || && > < >= <= !== ===
 * Booleans
 * true or false are used mostly for if statements
 * Numbers
 * 1 2 3 etc.... Used for various reasons you can thing of
 * Strings
 * "They are words or sentenses in qoutes, used for messaging and names"
 * Arrays
 * [] are lists of things has helper function like forEach
 * Objects
 * {} have many properties that are generally named and go together
 */
// This object is going to be used to describe me
const Taber = {
  // I use a number to describe my age
  age: 26,
  // handle and my names are all strings
  handle: "tabersays",
  firstName: "Taber",
  middleName: "Storm",
  lastName: "Fitzgerald",
  // This is a function to build my full name
  fullName: function() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  },
  class: "Bard",
  // This is an array to hole a collection of my skills
  skills: ["Programming", "Role playing", "Computers"]
};

// I can print out varius things about the Taber object
console.log(Taber);
console.log(Taber.fullName());
console.log(`I like ${Taber.skills.join(", ")}`);

/*
 * In action being used with html
 */

let currentColor = "white";
// The function in this file will be exposed to any HTML that pulls in this file.
// This funtion is likely attached to a button on home.html
function toggleColors() {
  if (currentColor === "white") {
    currentColor = "pink";
    const element = document.getElementsByClassName("content")[0];
    element.className = "content pink";
  } else {
    currentColor = "white";
    const element = document.getElementsByClassName("content")[0];
    element.className = "content white";
  }
}
