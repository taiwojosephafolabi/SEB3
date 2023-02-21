// import {myObj} from "./script"
const data = require("./script") // need to put data in front of all objects/arrays etc

// const myObj = {
//   streetName: "Street Road",
//   flatNumber: 3
// };

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myVariable = "Hello World!";

// const sumFunction = (num1, num2) => num1 + num2;

describe("I am checking myObj values", () => {
  test("check myObj streetName", () => { //can use test or it
    expect((data).myObj.streetName).toBe("Street Road")
  })

  it("check myObj flatNumber", () => {
    expect((data).myObj.flatNumber).toEqual(3)
  })
})

describe("Checking array", () => {
  it("check length of array", () => {
    expect((data).myArr).toHaveLength(10);
    expect((data).myArr.length).toBe(10);
  });

  it("check index of array", () => {
    expect((data).myArr[1]).toBe(2)
  });
})

describe("Checking sum function", () => {
  it("check value is returned", () => {
    let result = (data).sumFunction(3,2);
    expect(result).toBe(5)
  });
})