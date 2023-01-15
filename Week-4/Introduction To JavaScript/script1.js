"use strict";

alert("Hello world!"); // Exercise 1

prompt("What food do you like?");
let favouriteFood = prompt("What food do you like?");
// Check type of variable
// console.log(typeof favouriteFood)
console.log(favouriteFood);

let num = 123;
alert(num);

// Method 1 - Declaring Variables
let a = 1;
let b = 2;
let c = 3;

// Method 2 - Declaring Variables
let d = 4, e = 5, f = 6;

// Method 3 - Declaring Variables
let g, h, i;
g = 7;
h = 8;
i = 9;

console.log(a, b, c, d, e, f, g, h);

// Updating Variables
let j = 10;
alert(j);

let j = 20;
alert(j);

console.log(j);

// Constants
const PI = Math.PI;
prompt("Radius of circle?")
let radius = prompt("Radius of circle");
alert("The circumference of the circle is ", PI*radius);