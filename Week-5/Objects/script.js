"use strict";

const myCar = {
  model: "Fiat",
  type: "500",
  color: "white",
  yearReleased: [1967, 2011, 2021],
};

console.log(myCar);
console.log(myCar["yearReleased"][2]);

const person = {
  myName: "Joseph",
  address: {
    flatNumber: 1,
    streetName: "London Road",
  },
  role: ["student", "engineer"],
};

console.log(person["myName"]);
console.log(person["address"]["streetName"]);
console.log(person.address.flatNumber);
console.log(person.role[1]);

let basketData = [
  { namePerson: "Joseph", item: "T-shirt", price: 30 },
  { namePerson: "Joseph", item: "Fruit", price: 5 },
  { namePerson: "Joseph", item: "Toy", price: 30 },
];

console.log(basketData[1]["price"]);

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

let key = "a";

// let obj = {
//   [key]: 1,
//   b: 2,
//   c: 3,
// };

let obj = {
  [key + "1"]: 1,
  [key + "2"]: 2,
  [key + "3"]: 3,
  display() {
    console.log(obj[key]);
  },
};

obj.display();

// Exercise
let obj1 = {
  x: 1,
  y: 2,
  z: 3,
  square() {
    console.log("The square of", this.x, "is", this.x * this.x);
    console.log("The square of", this.y, "is", this.y * this.y);
    console.log("The square of", this.z, "is", this.z * this.z);
  },
};
obj1.square();

// Exercise
let obj2 = {
  "1a": 1,
  b2: 2,
  "с-с": 3,
  "d 4": 4,
  e5: 5,
  answers() {
    console.log("'1a'", "requires quotes");
    console.log("'b2'", "does not require quotes");
    console.log("'c-c'", "requires quotes");
    console.log("'d 4'", "requires quotes");
    console.log("'e5'", "does not require quotes");
  },
};
obj2.answers();

// Exercise
let obj3 = {
  "1a": 1,
  b2: 2,
  "c-c": 3,
  "d 4": 4,
  e5: 5,
};

console.log(obj3["1a"]);
console.log(obj3.b2);
console.log(obj3["c-c"]);
console.log(obj3["d 4"]);
console.log(obj3.e5);

// Exercise
let key4 = "x";

let obj4 = {
  [key4]: 1,
  y: 2,
  z: 3,
};

// Exercise - need to check
let obj5 = {
  x: 1,
  y: 2,
  z: 3,
};

let key1 = "x";
let key2 = "y";
let key3 = "z";

// Exercise
let obj6 = { x: 1, y: 2, z: 3 };
console.log(obj6["x"]);

// Exercise
let obj7 = { x: 1, y: 2, z: 3 };
let key7 = "x";
console.log(obj7[key7]);

// Exercise
let obj8 = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

console.log(obj8[1], obj8[2], obj8[3], obj8[4], obj8[5], obj8[6], obj8[7]);

// Exercise
let obj9 = { 23: "Sun", 1: "Moon", 46: "Stars" };
console.log(obj9[46], obj9[23], obj9[1]);

// Object Method - start of Wed 18th lesson

const myBuilding = {
  name: "Tower Bridge",
  color: "blue",
  callTheName: function (location) {
    return "This is", location;
  },
};

console.log(myBuilding["color"]);
console.log(myBuilding.callTheName("London Eye"));

// remove
delete myBuilding.name;
console.log(myBuilding.name);
console.log(myBuilding);

// add again - do again

myBuilding["name"] = "London Eye";
console.log(myBuilding.name);

// Object.keys()

Object.keys(myBuilding);
console.log(Object.keys(myBuilding));

for (let keyName in myBuilding) {
  console.log(keyName);
}

// Exercise

let obj10 = { x: 1, y: 2, z: 3 };
let keyArr = Object.keys(obj10);
console.log(keyArr);

// Exercise
let obj11 = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj10).length);

// Break and continue

for(let i = 0; i < 10; i++){
  if(i > 1 && i < 5){
    console.log(i)
  } 
  else if(i >= 5 && i < 7){
    continue
  } 
  else{
    break
  }
};
