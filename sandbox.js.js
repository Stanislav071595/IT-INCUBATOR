// SANDBOX  IT-INCUBATOR 
_________________________________________________

Comment Your JavaScript Code

// Example

/* Example */


_________________________________________________
Declare JavaScript Variables

var myName;

_________________________________________________
Storing Values with the Assignment Operator

// Setup
var a;
a = 7;

// Only change code below this line

_________________________________________________
Assigning the Value of One Variable to Another

var a;
a = 7;
var b;
b = a;

_________________________________________________
Initializing Variables with the Assignment Operator

var a = 9;

_________________________________________________
Declare String Variables

var myFirstName = "Stanislav";
var myLastName = "Pokhilko";

_________________________________________________
Understanding Uninitialized Variables

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

_________________________________________________
Understanding Case Sensitivity in Variables

// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

_________________________________________________
Explore Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

_________________________________________________
Declare a Read-Only Variable with the const Keyword

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

_________________________________________________
Add Two Numbers with JavaScript

const sum = 10 + 10;
_________________________________________________
Subtract One Number from Another with JavaScript

const difference = 45 - 33;
_________________________________________________
Multiply Two Numbers with JavaScript

const product = 8 * 10;
_________________________________________________
Divide One Number by Another with JavaScript

const quotient = 66 / 33;
_________________________________________________
Increment a Number with JavaScript

let myVar = 87;

// Only change code below this line
myVar++;
_________________________________________________
Decrement a Number with JavaScript

let myVar = 11;

// Only change code below this line
myVar--;
_________________________________________________
Create Decimal Numbers with JavaScript

const ourDecimal = 5.7;

// Only change code below this line

let myDecimal = 5.7;
_________________________________________________
Multiply Two Decimals with JavaScript

const product = 2.0 * 2.5;
_________________________________________________
Divide One Decimal by Another with JavaScript

const quotient = 4.4 / 2.0; // Change this line
_________________________________________________
Finding a Remainder in JavaScript

const remainder = 11 % 3;
_________________________________________________
Compound Assignment With Augmented Addition

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
_________________________________________________
Compound Assignment With Augmented Subtraction

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;
_________________________________________________
Compound Assignment With Augmented Multiplication

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *= 10;
_________________________________________________
Compound Assignment With Augmented Division

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
_________________________________________________
Escaping Literal Quotes in Strings

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
_________________________________________________
Quoting Strings with Single Quotes

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
_________________________________________________
Escape Sequences in Strings

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
_________________________________________________
Concatenating Strings with Plus Operator

const myStr = "This is the start. " + "This is the end."; // Change this line
_________________________________________________
Concatenating Strings with the Plus Equals Operator

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."
_________________________________________________
Constructing Strings with Variables

// Only change code below this line
const myName = "Stanislav";
const myStr = "My name is " + myName + " and I am well!";
_________________________________________________
Appending Variables to Strings

// Change code below this line
const someAdjective = "amazing";
let myStr = "Learning to code is ";
myStr += someAdjective;
_________________________________________________
Find the Length of a String

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
_________________________________________________
Use Bracket Notation to Find the First Character in a String

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
_________________________________________________
Understand String Immutability

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
_________________________________________________
Use Bracket Notation to Find the Nth Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
_________________________________________________
Use Bracket Notation to Find the Last Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line
_________________________________________________
Use Bracket Notation to Find the Nth-to-Last Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
_________________________________________________
Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "Usually " + myAdjective + ",high " + myNoun + " " + myVerb + " very " + myAdverb; // Change this line
// Only change code above this line
_________________________________________________
Store Multiple Values in one Variable using JavaScript Arrays

// Only change code below this line
const myArray = ["one", 1];
_________________________________________________
Nest one Array within Another Array

// Only change code below this line
const myArray = [["one", 1], ["two", 2], ["three", 3]];
_________________________________________________
Access Array Data with Indexes

const myArray = [50, 60, 70];

var myData = myArray[0]; 
_________________________________________________
Modify Array Data With Indexes

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
_________________________________________________
Access Multi-Dimensional Arrays With Indexes

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
_________________________________________________
Manipulate Arrays With push()

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
_________________________________________________
Manipulate Arrays With pop()

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
_________________________________________________
Manipulate Arrays With shift()

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
_________________________________________________
Manipulate Arrays With unshift()

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
_________________________________________________
Shopping List

const myList = [
  ["Bread", 14],
  ["Milk", 10],
  ["Batteries", 4], 
  ["Navigator", 1],
  ["Televizor", 1], 
  ["DVD-player", 2],
  ["Yogart", 14], 
];
_________________________________________________
Write Reusable JavaScript with Functions

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
_________________________________________________
Passing Values to Functions with Arguments

function functionWithArgs(par1, par2) {
  console.log(par1 + par2)
}

functionWithArgs(1, 2);

function functionWithArgs(par1, par2) {
  console.log(par1 + par2)
}

functionWithArgs(7, 9);
_________________________________________________
Return a Value from a Function with Return

function timesFive (num) {
  return num * 5;
}

const answer = timesFive (5);
_________________________________________________
Global Scope and Functions

// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
   oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
_________________________________________________

Local Scope and Functions

function myLocalScope() {
  // Only change code below this line
  var myVar = "textVar";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
_________________________________________________
Global vs. Local Scope in Functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
_________________________________________________
Understanding Undefined Value returned from a Function

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
_________________________________________________
Assignment with a Returned Value

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
_________________________________________________
Stand in Line

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
_________________________________________________

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue) {
    return "Yes, that was true";
  } 
  return "No, that was false";
}


  // Only change code above this line
_________________________________________________

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
_________________________________________________

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
_________________________________________________

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
_________________________________________________

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
_________________________________________________

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
_________________________________________________

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
_________________________________________________

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
_________________________________________________

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
_________________________________________________

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
 
      return "Yes";
    }
  

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);
_________________________________________________

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {

    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
_________________________________________________

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
_________________________________________________

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else {
  return "Between 5 and 10";
  }
}

testElseIf(7);
_________________________________________________

function orderMyLogic(val) {
   if (val < 5) {
    return "Less than 5";
  }
  
  else if (val < 10) {
    return "Less than 10";
  }  else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
_________________________________________________

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  }else if (num < 10){
    return "Small";
  }else if (num < 15) {
    return "Medium";
  }else if (num < 20) {
    return "Large";
  }else {
    return "Huge";
  } 
  
  return "Change Me";

  // Only change code above this line
}

testSize(7);
_________________________________________________

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
_________________________________________________

