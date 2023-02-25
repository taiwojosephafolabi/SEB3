"use strict";
const sum = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const agePromise = new Promise((resolve, reject) => {
  resolve(subtract(num1, num2));
  reject(console.log("Error"))
});

agePromise
  .then((num1, num2) => {
    age;
  })
  .catch((err) => {
    console.log("check calculation");
  });

module.exports = { sum, subtract, multiply, divide, agePromise };
