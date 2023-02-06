// Arrow Function

// Method 1
function showMyName(name){
  return name
}
console.log("Method 1 result: " + showMyName("Joseph"));

// Method 2
showMyName = (myName) => {
  return myName;
};
console.log("Method 2 result: " + showMyName("Joseph"));

// Practice
// add
sumFunction = (a, b) => {
  return a + b;
}
console.log("Sum result: " + sumFunction(3, 5));

//divide
divideFunction = (a, b) => {
  return a / b;
}
console.log("Divide result: " + divideFunction(30, 3));

//remainder
remainderFunction = (a, b) => {
  return a % b;
}
console.log("Remainder result: " + remainderFunction(10, 4)); 

// Array Function - cont//
// callback function

callMe3 = () => {
  return "You called me thrice!";
}

callMe2 = () => {
  console.log(callMe3());
  return "You called me twice!";
}

callMe1 = () => {
  console.log(callMe2());
  return "You called me once!";
};

callAnotherFunction = (myFunction) => {
  console.log("==============");
  console.log(myFunction());
};

callAnotherFunction(callMe1)
console.log("==============");

// map
let fruit = ["apple", "banana", "orange", "strawberry"];
let newFruits = [];
function checkElement(fruit){
  
  console.log(fruit);
};

fruit.map(checkElement);
fruit.map((element) => console.log(element + "&&"));
fruit.map((element) => newFruits.push(element + "&&"));
console.log(newFruits);

// truthy and falsy
// let weather = "rain"; //JS sees this a truthy as there is a value
// console.log(weather);
let weather = null; // JS sees this a falsy as there is undefined/null
console.log(weather);

if (weather) {
  console.log("truthy");
}
else if(!weather){
  console.log("falsy");
}
else {
 console.log("")
};



