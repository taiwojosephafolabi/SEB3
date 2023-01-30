"use strict";

let input = document.getElementById("input-1");
console.log(input);

let button1 = document.getElementById("clickButton");
console.log(button1);

let button2 = document.getElementById("submitButton");
console.log(button2);

let body = document.getElementsByTagName("body")[0];

let divContainer = document.getElementById("container");

let newPara = document.createElement("p");

button1.addEventListener("click", function () {
  alert("You clicked me!!");
  document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
  console.log("You've made me blue!");
  divContainer.appendChild(newPara);
  newPara.innerText = "The button is clicked!";
  // newPara.innerHTML = "<h1>The button is clicked!</h1>";
});

input.addEventListener("keydown", function (event) {
  divContainer.style.color = "red";
  divContainer.style.fontSize = "large";
  divContainer.innerText = event.key; // Shows up on the page
  console.log("EVENT", event);
  console.log("EVENT", event.key);
});

button2.addEventListener("mouseover", function(){
    button2.style.fontSize = "120px";
    button2.style.color = "black";
});

function callMe(){
    button2.style.fontSize = "20px";
    button2.style.color = "green";
}

button2.addEventListener("mouseout", callMe);

// Exercise 1
let exercise = document.getElementById("elem");

function func1() {
    console.log("1");
  }
  
  function func2() {
    console.log("2");
  }
  
  function func3() {
    console.log("3");
  }

exercise.addEventListener("mouseover", func1);
exercise.addEventListener("mouseover", func2);
exercise.addEventListener("mouseover", func3);

let findButtonA = document.getElementById("button-a");

findButtonA.addEventListener("click", function(){
    alert("Here's the message!");
})


findButtonA.addEventListener("mouseout", function(){
    // body.innerHTML = "<div><ul><li>Hello</li></ul></div>";
    // newPara.innerText = "Hello";
})

let findButtonB = document.getElementById("button-b");

findButtonB.addEventListener("mouseover", function(){
    alert("Here's the second message!");
})

findButtonB.addEventListener("mouseout", function(){
    alert("Here's the third message!");
})

let findNum1 = document.getElementById("num1");
let findNum2 = document.getElementById("num2");
let sumButton = document.getElementById("sumButton");

sumButton.addEventListener("click", function(){
    alert(Number(findNum1.textContent) + Number(findNum2.textContent));
});