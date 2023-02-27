"use strict";
const {
  sum,
  multiply,
  subtract,
  divide,
  fetchAge /*agePromise*/,
} = require("./math");

describe("Testing math functions", () => {
  test("Sum: Adding 3 + 2 equals 5", () => {
    expect(sum(3, 2)).toBe(5);
  });

  test("Sum: Adding 7 + 2 equals 5", () => {
    expect(sum(7, 2)).not.toBe(5);
  });

  test("Sum is called with 2 arguments", () => {
    const num = { num1: 3, num2: 2 };
    const sumMock = jest.fn((num) => num.num1, num.num2);
    sumMock(num);
    expect(sumMock).toHaveReturnedWith(3, 2);
  });

  test("Multiplying 5 * 3 equals 15", () => {
    expect(multiply(5, 3)).toBe(15);
  });

  test("Multiplying 5 * 3 does not equal 8", () => {
    expect(multiply(5, 3)).not.toBe(8);
  });

  test(`Subtracting 6 - 8 equals -2`, () => {
    expect(subtract(6, 8)).toBe(-2);
  });

  test("Subtract: check if NaN", () => {
    expect(subtract(6 - 8)).toBeNaN();
  });

  test("Dividing 6 / 2 equals 13", () => {
    expect(divide(6, 2)).toBe(3);
  });

  test("Divide: 10 / 3 close to 3.3", () => {
    expect(divide(10, 3)).toBeCloseTo(3.3, 1);
  });

  test("Divide: 50 / 4 greater than 10", () => {
    expect(divide(50, 4)).toBeGreaterThan(10);
  });
});

describe("the arguments return age", () => {
  test("Promise testing", () => {
    return fetchAge()
      .then((data) => {
        expect(data).toBe(21);
      })
      .catch((err) => {
        console.log("Wait for your birthday");
      });
  });





  // test("the arguments return age", async () => {
  //   const data = await agePromise(2023, 2001).then(age => {
  //     expect(data).resolves.toBe(21);
  //   });
  // });

  // test("the function fails with an error", async () => {
  //   expect.assertions(1);
  //   try {
  //     await agePromise(2023, 2001);
  //   } catch (err) {
  //     expect(err).toMatch("error");
  //   }
  // });
});
