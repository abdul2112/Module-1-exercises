// Excercise 1
// Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.

// Data type 1 - NUMBERS
// The numbers data type can be pretty much any number you can think of. It can be an integer, a decimal etc.
// Examples of number type are:
// 1
// 500
// 0.5
// 3.14159265359

// Data type 2 - STRINGS
// The strings data type includes anytning you write inside quotation marks. You can use double quotation marks, single quotation marks or even backticks.
// Examlples of string type are:
// "Hello Strivers!"
// 'Hello Strivers!'
// `Hello Strivers!`

// Data type 3 - BOOLEANS
// The booleans data type is a data type that can only have two possible values.
// These two values are:
// True
// False
// Examples of boolean type are:
// 2 > 1 -> true
// 5 < 3 -> false
// 10 === 10 -> true
// 'banana' === 'apple' -> false

// Data type 4 - NULL & UNDEFINED
// Null is a data type which its value does not exist.
// If you write a variable without a value, then it will have undefined as a value.
// Examples of null and undefined are:
// null -> does not exist
let laptop; // no value written so it is undefined

//  EXERCISE 2
// Try to describe what a variable is, in your own words.

// A variable in javascript is used to store information/value data.

//  EXERCISE 3
// Write the code to execute an addition (a sum) of the numbers 12 and 20.

// let a = 12
// let b = 20
// let c = a + b
// console.log(c)
let result = 12 + 20;

//  EXERCISE 4
// Create a variable named x containing the number 12.
let x = 12;
console.log(x);

//  EXERCISE 5
// Create a variable called name containing the string John Doe.
let name = 'john Doe';
console.log(name);

//  EXERCISE 6
// Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
let y = 12 - x;
console.log(y);

//  EXERCISE 7
// Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
// Verify that name1 is different from name2.
// Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
let name1 = 'john';
let name2 = 'John';
console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());

//  EXERCISE 8
// Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).

// let thisX = 7;

// if (thisX === 1) {
//   console.log('one');
// } else if (thisX === 2) {
//   console.log('two');
// } else if (thisX === 3) {
//   console.log('three');
// } else if (thisX === 4) {
//   console.log('four');
// } else if (thisX === 5) {
//   console.log('five');
// } else if (thisX === 6) {
//   console.log('six');
// } else if (thisX === 7) {
//   console.log('seven');
// } else if (thisX === 8) {
//   console.log('eight');
// } else if (thisX === 9) {
//   console.log('nine');
// } else {
//   console.log('This is not a valid number!');
// }

x = 10;
switch (x) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  case 4:
    console.log('four');
    break;
  case 5:
    console.log('five');
    break;
  case 6:
    console.log('six');
    break;
  case 7:
    console.log('seven');
    break;
  case 8:
    console.log('eight');
    break;
  case 9:
    console.log('nine');
    break;
  default:
    console.log('bla');
}

//  EXERCISE 9
// [Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )

// if (x > 20) {
//   ternaryExample = true;
// } else {
//   ternaryExample = false;
// }

let ternaryExample = x > 10 ? true : false;

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
