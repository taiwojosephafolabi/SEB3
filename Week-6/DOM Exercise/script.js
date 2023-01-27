"use strict";

let divContainer = document.getElementById("container");

divContainer.style.border = "5px solid blue";
divContainer.style.height = "auto";

let newHeader = document.createElement("h1");
newHeader.innerText = "Week 6B";
divContainer.appendChild(newHeader);
newHeader.style.textAlign = "center";

let newDiv1 = document.createElement("div");
divContainer.appendChild(newDiv1);
newDiv1.style.display = "flex";
newDiv1.style.flexDirection = "row";
newDiv1.style.justifyContent = "space-between"
newDiv1.style.height = "150px";
newDiv1.style.margin = "20px 40px 20px 40px";

let newDiv1Child1 = document.createElement("div");
newDiv1.appendChild(newDiv1Child1);
newDiv1Child1.style.border = "3px solid red";
newDiv1Child1.style.height = "100px";
newDiv1Child1.style.width = "150px";

let newDiv1Child2 = document.createElement("div");
newDiv1.appendChild(newDiv1Child2);
newDiv1Child2.style.border = "3px solid red";
newDiv1Child2.style.height = "100px";
newDiv1Child2.style.width = "150px";

let newDiv1Child3 = document.createElement("div");
newDiv1.appendChild(newDiv1Child3);
newDiv1Child3.style.border = "3px solid red";
newDiv1Child3.style.height = "100px";
newDiv1Child3.style.width = "150px";

let newDiv2 = document.createElement("div");
divContainer.appendChild(newDiv2);
newDiv2.style.border = "3px solid red";
newDiv2.style.height = "150px";
newDiv2.style.margin = "20px 40px 50px 40px";
