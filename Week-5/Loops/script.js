"use strict";

for (let j = 10; j < 20; j++) {
  console.log(j);
}

for (let i = 12; i <= 120; i * 2) {
  console.log(i);
}

let count = 15;
while (count > 0 && count < 20) {
  console.log(count);
  count = count - 1;
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
console.log("===============");

// Exercise 1
console.log("Exercise 1");
let paras = document.querySelectorAll(".para");
let buttonClick = document.querySelector("#click");

buttonClick.addEventListener("click", func1);
function func1() {
  for (let para of paras) {
    paras.textContent = "text";
  }
}

// Adding handlers in a loop
// Exercise 4
console.log("Exercise 4");
let inputs = document.querySelectorAll("input");

for (let elem of inputs) {
  elem.addEventListener("click", func);
}

function func() {
  this.value = Number(this.value) + 1;
}
