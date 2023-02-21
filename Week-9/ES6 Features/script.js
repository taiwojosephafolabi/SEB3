"use strict";
let clickButton = document.getElementById("clickMe");

//Exercise 1
console.log("Exercise 1");
console.log(`let userName = "John";

function displayUserName() {
  let userName = "Emma";
  console.log(userName);
}

console.log(userName);`);
console.log("John will be logged to the console")
console.log("=============");

//Exercise 2
console.log("Exercise 2");
console.log(`let userName = "John";
 
function displayUserName() {
  let userName = "Emma";
  console.log(userName);
}

displayUserName();`);
console.log("Emma will be logged to the console")
console.log("=============");

// Exercise 3
console.log("Exercise 3");
console.log(`const userName = "John";
 
function displayUserName() {
  userName = "Emma";
  console.log(userName);
}

displayUserName();`);
console.log("An error will be logged to the console")
console.log("=============");

// Exercise 4
console.log("Exercise 4");
console.log(`const helloWorld = () => alert("Hello World!")`);
console.log("=============");

//Exercise 5
console.log("Exercise 5");
console.log(`clickButton.addEventListener("click", () => {
  alert("Hello World!");
})`);
console.log("=============");

//Exercise 6
console.log("Exercise 6");
console.log(`const greetUser = (name) => {
  alert("Hello " + name + "!");
}`);
console.log("=============");

//Exercise 7
console.log("Exercise 7");
function displayNumbers(...numbers) {
  console.log(...numbers, 10);
}

displayNumbers(1, 2, 3, 4);
console.log("=============");

// Exercise 8
console.log("Exercise 8");
console.log(`function get(a, b, c) {
  return { a, b, c };
}`);
console.log("=============");

//Exerice 9
console.log("Exercise 9");
const printUserInfo = (name, age) => {
  alert(`${name} is ${age} years old`);
};
console.log("Check JS file");
console.log("=============");

