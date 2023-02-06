"use strict";

// DOM Methods
// find an element in HTML

let firstDiv = document.querySelector("#div-container1")[0];
console.log(firstDiv);

console.log("================================");

let firstDiv2 = document.getElementById("div-container1")[0];
console.log(firstDiv2);

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

// Exercise 1
console.log("Exercise 1");
let para1 = document.querySelector("#elem1");
let para2 = document.querySelector("#elem2");
let para3 = document.querySelector("#elem3");
console.log(para1.textContent, para2.textContent, para3.textContent);
console.log("================");

// Exercise 2
console.log("Exercise 2");
let para4 = document.querySelector("#block p");
console.log(para4);
console.log("================");

// Exercise 3
console.log("Exercise 3");
let para5 = document.querySelector(".block p");
console.log(para5);
console.log("================");

// Exercise 4
console.log("Exercise 4");
let para6 = document.querySelector(".www p");
console.log(para6);
console.log("================");

// Exercise 5
console.log("Exercise 5");
let button1 = document.querySelector("#button1");
button1.addEventListener("click", function () {
  alert("1");
});
let button2 = document.querySelector("#button2");
button2.addEventListener("click", function () {
  alert("2");
});
let button3 = document.querySelector("#button3");
button3.addEventListener("click", function () {
  alert("3");
});
console.log("Click submit buttons");
console.log("================");

// Exercise 6
console.log("Exercise 6");
function func1() {
  console.log(1);
}

function func2() {
  console.log(2);
}
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
button4.addEventListener("click", func1);
button5.addEventListener("click", func2);
console.log("Click button 4 and button 5");
console.log("================");

// Exercise 7
console.log("Exercise 7");
function func3() {
  console.log("message");
}

let para7 = document.querySelector("#elem4");
let para8 = document.querySelector("#elem5");
let para9 = document.querySelector("#elem6");
let para10 = document.querySelector("#elem7");
let para11= document.querySelector("#elem8");
para7.addEventListener("click", func3);
para8.addEventListener("click", func3);
para9.addEventListener("click", func3);
para10.addEventListener("click", func3);
para11.addEventListener("click", func3);
console.log("click text");
console.log("================");


// Exercise 8
console.log("Exercise 8");
let para12 = document.querySelector("#elem9");

function func4() {
  console.log("1");
}

function func5() {
  console.log("2");
}

function func6() {
  console.log("3");
}
para12.addEventListener("click", func4);
para12.addEventListener("click", func5);
para12.addEventListener("click", func6);
console.log("click text")
console.log("================");

// Exercise 9
console.log("Exercise 9");
button6.addEventListener("click", function () {
  alert("You clicked me!!");
});
console.log("Click button 6")
console.log("================");
// Exercise 10
console.log("Exercise 10");
button7.addEventListener("mouseover", function(){
  alert("You hovered over me!!");
});
console.log("Hover over button 10")
console.log("================");

// Exercise 11
console.log("Exercise 11");
button8.addEventListener("mouseout", function(){
  alert("You moved the cursor away from me!!");
});
console.log("Move cursor away from button 8")
console.log("================");

// Exercise 12
console.log("Exercise 12");
button9.addEventListener("mouseover", function(){
  alert("You hovered over me!!");
});
button9.addEventListener("mouseout", function(){
  alert("You moved the cursor away from me!!");
});
console.log("Hover over and away from button 9")
console.log("================");

// Exercise 13
console.log("Exercise 13");
let para13 = document.querySelector("#elem10");
button10.addEventListener("click", function(){
  console.log(para13.textContent);
});
console.log("Click button 10");
console.log("================");


console.log("================");
console.log("================");
console.log("================");

