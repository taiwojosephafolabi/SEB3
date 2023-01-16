"use strict";


let myFirstArray = [3, true, "Joseph", null, [1, 2, "LC"]];
let mySecondArray = new Array();

console.log("This is my first array", myFirstArray);
console.log("This is my second array", mySecondArray);


console.log(myFirstArray[2]);

let myThirdArray = new Array();
let myFourthArray = new Array(10);

console.log(myThirdArray);
console.log(myFourthArray);
console.log(myFourthArray.length);

let myFifthArray = [0];
let value = myFifthArray[0];
myFifthArray[1] = 3.14;

console.log(myFifthArray);