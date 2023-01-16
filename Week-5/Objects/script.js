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
  role: ["student", "engineer"]
};

console.log(person["myName"]);
console.log(person["address"]["streetName"]);
console.log(person.address.flatNumber);
console.log(person.role[1])

let basketData = [
  { namePerson: "Joseph", item: "T-shirt", price: 30 },
  { namePerson: "Joseph", item: "Fruit", price: 5 },
  { namePerson: "Joseph", item: "Toy", price: 30 },
];

console.log(basketData[1]["price"]);
