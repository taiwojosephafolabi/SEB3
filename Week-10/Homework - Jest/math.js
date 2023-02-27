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

function fetchAge(){
  return new Promise((resolve, reject) => {
    resolve(subtract(2023, 2021));
    reject("Error fetching age")
  })
};









// function UserRequest(year1, year2) {
//   return new Promise((resolve, reject) => {
//     console.log("Calculating your age:" + subtract(year1, year2))
//     if (subtract(year1, year2) === 21) {
//       resolve("Your age is: 21");
//     } else {
//       reject ("You are not the user")
//     }
//   })
// }

// const agePromise = new Promise((resolve, reject) => {
//   let num1 = 2023;
//   let num2 = 2021;
//   resolve(subtract(num1, num2));
//   reject(console.log("Error"))
// });

// function processRequest(year1, year2) {
//   return new Promise((resolve,reject) => {
//     console.log("Processing response")
//     resolve("Calculting age")
//   })
// };

// async function doWork() {
//   let response = await UserRequest("21");
//   console.log("Response Received");
//   let processedResponse = await processRequest(response);
//   console.log(processedResponse)
// };

// makeRequest("21")
//     .then((response) => {
//       console.log("Response Received");
//       return processRequest(response);
//     })
//     .then((processedResponse) => {
//       console.log(processedResponse);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// doWork();



// // agePromise
// //   .then((num1, num2) => {
// //     age;
// //   })
// //   .catch((err) => {
// //     console.log("check calculation");
// //   });



// // async function askFavColour() {
// //   try {
// //     const response = await user("Joseph");
// //     console.log("Response Received");
// //     const favColour = await favouriteColour(response);
// //     console.log(favColour);
// //     // const favNumber = await favouritenumber(response);
// //     // console.log(favNumber)
// //   } catch (err) {
// //     console.log(err)
// //   }
// // };



module.exports = { sum, subtract, multiply, divide, fetchAge, /*agePromise*/ };
