// 1. Create an array of fruits
let fruit = ["apple", "banana", "cantaloupe", "dates", "elderberries"];
console.log("Array of fruits:", fruit[0], fruit[2], fruit[4]);

// 2. Create an object about myself
let myLife = {
  firstName: "Taiwo",
  middleName: "Joseph",
  lastName: "Afolabi",
  age: 21,
  address: {
    streetName: "Street Road",
    cityName: "London",
  },
  siblingName: ["Ezekiel", "Moses"],
};

console.log(
  "My full name is",
  myLife.firstName,
  myLife.middleName,
  myLife.lastName
);
console.log(
  "My siblings names are",
  myLife.siblingName[0],
  "and",
  myLife.siblingName[1]
);
console.log("I live in", myLife.address.cityName);

// 3. Create a for loop
console.log("===== for loop =====");
for (i = 20; i <= 30; i++) {
  console.log(i);
}

// 4. Create a for loop
console.log("===== for loop =====");
for (i = 15; i > 0; i--) {
  console.log(i);
}

// 5. Create a for loop
console.log("===== for loop =====");
for (fruitIndex = 0; fruitIndex < fruit.length; fruitIndex++) {
  console.log(fruit[fruitIndex]);
}

// 6. Create an array of 5 objects
let myCarArr = [
  {
    companyName: "Ford",
    modelName: "Fiesta",
    carColour: "Blue",
    yearReleased: 1972,
    gearBox: "automatic",
  },
  {
    companyName: "BMW",
    modelName: "i8",
    carColour: "Orange",
    yearReleased: 2014,
    gearBox: "manual",
  },
  {
    companyName: "Toyota",
    modelName: "Auris",
    carColour: "Silver",
    yearReleased: 2006,
    gearBox: "automatic",
  },
  {
    companyName: "Audi",
    modelName: "R8",
    carColour: "White",
    yearReleased: 2006,
    gearBox: "automatic",
  },
  {
    companyName: "Range Rover",
    modelName: "Sport",
    carColour: "Black",
    yearReleased: 2022,
    gearBox: "manual",
  },
];

// 7. Create a for loop
for (carIndex = 0; carIndex < myCarArr.length; carIndex++) {
  console.log(
    "The colour of my",
    myCarArr[carIndex]["companyName"],
    myCarArr[carIndex]["modelName"],
    "is",
    myCarArr[carIndex]["carColour"]
  );
}

// 8. Create a if/else if/else loop
let myNumber = 3;
if (myNumber == 3) {
  console.log("Congratulations. This is your number");
} else if (myNumber == 2 || myNumber == 4) {
  console.log("You are close to your number");
} else {
  console.log("This is not your number");
}

// Create a function
function myCarFunction() {
  let count = 0;
  for (let i = 0; i < myCarArr.length; i++) {
    if (myCarArr[i]["companyName"] === "BMW") {
      count += 1;
      console.log("We have", count, "BMW");
    //   console.log(`We have ${count} BMW`);
    } else {
      console.log("The company name is", myCarArr[i]["companyName"]);
    //   console.log(`The company name is ${myCarArr[i]["companyName"]}`);
    }
  }
}

myCarFunction();
