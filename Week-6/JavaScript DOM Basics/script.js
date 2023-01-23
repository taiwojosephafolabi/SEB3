"use strict"

// DOM Methods
// find an element in HTML

let firstDiv = document.querySelector("#div-container1")[0];
console.log(firstDiv);

console.log("================================");

let firstDiv2 = document.getElementById("div-container1")[0];
console.log(firstDiv);

console.log("================================");

let secondDiv = document.querySelectorAll(".div-container2")[0];
console.log(secondDiv);

console.log("================================");

let secondDiv2 = document.getElementsByClassName("div-container2")[0];
console.log(secondDiv2);

console.log("================================");

let paragraph1 = document.getElementsByTagName("p")[0];
console.log(paragraph1);

console.log("================================");

// change the style of an element in HTML

paragraph1.style.backgroundColor = "blue";

let body = document.getElementsByTagName("body")[0];
console.log(body);

console.log("================================");

let newElement = document.createElement("div");
body.appendChild(newElement);
console.log(newElement);

// add style for an element in HTML
