"use strict";

// Exercise 1
console.log("Exercise 1");
let findDiv = document.querySelector("#container");
console.log(findDiv);
console.log("===============");

// Exercise 2
console.log("Exercise 2");
let newHeader = document.createElement("h1");
newHeader.innerText = "Heading"
findDiv.appendChild(newHeader);
console.log(newHeader);
console.log(findDiv);
console.log("===============");

// Exercise 3
console.log("Exercise 3");
let newPara = document.createElement("p");
newPara.innerText = "This is a paragraph.";
findDiv.appendChild(newPara);
console.log(newPara);
console.log(findDiv);
console.log("===============");

// Exercise 4
console.log("Exercise 4");
let body = document.getElementsByTagName("body")[0];
let newOrdList = document.createElement("ol");
newOrdList.innerText = "This is an ordered list";
body.appendChild(newOrdList);
console.log(newOrdList);
console.log(body);
console.log("===============");

// Exercise 5
console.log("Exercise 5");

for (let index = 0; index < 3; index++) {
    let newListItem = document.createElement("li");
    newListItem.innerText = `List item ${index + 1}`;
    newOrdList.appendChild(newListItem);
    console.log(newListItem);
};

console.log(document);
console.log("===============");

// Exercise 6
console.log("Exercise 6");

for(let index = 0; index < 3; index++) {
    let newListColour = document.getElementsByTagName("li")[index];
    newListColour.style.color = "blue";
    newListColour.style.padding = "10px";
}

console.log(body);
console.log("===============");

// Exercise 7
console.log("Exercise 7");
newPara.style.color = "green";
console.log(body);
console.log("===============");

// Exercise 8
console.log("Exercise 8");
let newDiv = document.createElement("div");
newDiv.innerText = "This is a div";
body.appendChild(newDiv);
console.log(body);
console.log("===============");

// Exercise 9
console.log("Exercise 9");
newDiv.setAttribute("id", "div-style");
console.log(body);
console.log("===============");

// Exercise 10
console.log("Exercise 10");
let newDivStyle = document.getElementById("div-style");
newDivStyle.style.border = "5px solid";
newDivStyle.style.textAlign = "center";
newDivStyle.style.width = "500px";
console.log(body);
console.log("===============");
