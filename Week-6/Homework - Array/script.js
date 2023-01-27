"use strict";

// Exercise 1
console.log("Exercise 1");
let ArrOfStr1 = ["apple", "banana", "lemon", "orange", "raspberry"];
console.log(ArrOfStr1);
ArrOfStr1.sort();
ArrOfStr1.reverse();
console.log(ArrOfStr1);
console.log("===============");

// Exercise 2
console.log("Exercise 2");
const itemList = [
  { name: "shampoo", price: 12 },
  { name: "toothpaste", price: 3 },
  { name: "toothbrush", price: 5 },
  { name: "handsoap", price: 7 },
  { name: "conditioner", price: 15 },
];
console.log(itemList);

let sortedItemList = itemList.sort((p1, p2) => {
  return p2.price - p1.price;
});
console.log(sortedItemList);

/* Method two
let sortedItemList = itemList.sort((p1, p2) =>
    p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
);
console.log(sortedItemList);
*/

/*Method I tried - didn't work
itemList.sort((p1, p2) => {
  return p1.price < p2.price;
});
itemList.forEach((e) => {
  console.log(`${e.name} ${e.price}`);
});
console.log(itemList);
*/

console.log("===============");

// Exercise 3
console.log("Exercise 3");
let ArrOfStr2 = ["Aqsa", "Cedric", "Ellie", "Joseph", "Joshua", "Louis"];
console.log(ArrOfStr2);
ArrOfStr2.reverse();
console.log(ArrOfStr2);
console.log("The actual array does change");
console.log("===============");

// Exercise 4
console.log("Exercise 4");
let ArrOfStr3 = ["Sun", "Moon", "Stars", "Earth", "Galaxy"];
console.log(ArrOfStr3);
console.log(ArrOfStr3.join("&"));
console.log("===============");

// Exercise 5
console.log("Exercise 5");
console.log(ArrOfStr3);
console.log(ArrOfStr3.join(""));
console.log("===============");

// Exercise 6
console.log("Exercise 6");
let ArrOfNum1 = [2, 34, 569, 7843, 40873, 67847, 1236, 213, 95, 0];
console.log(ArrOfNum1);
let newArrOfNum1 = ArrOfNum1.slice(4, 9);
console.log(newArrOfNum1);
console.log("===============");

// Exercise 7
console.log("Exercise 7");
let ArrOfNum2 = [10, 79, 63, 32];
let ArrOfNum3 = [98, 34, 50, 65, 40];
console.log(ArrOfNum2, ArrOfNum3);
let joinedArrOfNum = ArrOfNum2.concat(ArrOfNum3);
console.log(joinedArrOfNum);
console.log("===============");

// Exercise 8
console.log("Exercise 8");
const fruits = ["strawberry", "kiwi", "banana", "orange", "apple"];
console.log(fruits);

console.log("Exercise 8.1");
fruits.push("mango", "pineapple", "pear");
console.log(fruits);

console.log("Exercise 8.2");
fruits.unshift("dragronfruit", "grapes");
console.log(fruits);

console.log("Exercise 8.3");
fruits.pop();
console.log(fruits);

console.log("Exercise 8.4");
fruits.shift();
console.log(fruits);

console.log("Exercise 8.5");
fruits.sort();
console.log(fruits);

console.log("Exercise 8.6");
let stringFruits = fruits.join("%");
console.log(stringFruits);

console.log("Exercise 8.7");
const kiwi = fruits.slice(3, 4); // look over
console.log(kiwi);
console.log("===============");

// Exercise 9
console.log("Exercise 9");
let ArrOfNum4 = [1, 2, 3, 4, 5, 6];
console.log(ArrOfNum4);

let newArrOfNum4 = ArrOfNum4.map(add6);
function add6(num) {
  return num + 6;
}
console.log(newArrOfNum4);
console.log("===============");

// Exercise 10
console.log("Exercise 10");
let ArrOfStr4 = ["hello", "hi", "hola", "bonjour", "ciao"];
console.log(ArrOfStr4);

let newArrOfStr4 = ArrOfStr4.map(addAsterisk);
function addAsterisk(string) {
  return string + "*";
}
console.log(newArrOfStr4);
console.log("===============");

// Exercise 11
console.log("Exercise 11");
let ArrOfStr5 = ["adidas", "windows", "samsung", "Yeezy", "android", "Crocs"];
console.log(ArrOfStr5);

function filterBrand(brand) {
  if (brand.includes("a")) {
    return brand;
  }
}
let newArrOfStr5 = ArrOfStr5.filter(filterBrand);
console.log(newArrOfStr5);
