- What is the difference between "jest.spyOn" and "jest.fn()"?
With jest.spyOn, the original function that you are spying on remains the same.

When to use jest.spyOn:
-Use Jest.SpyOn when you want to keep the original function the same and just want to know whether it was called. 
-To override the implementation or result of the function for a specific scenario, restoring aftwards with mockRestore

Example:
import * as app from "./app";
import * as math from "./math";

test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");

  // calls the original implementation
  addMock.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");

  // and the spy stores the calls to add
  addMock.mockRestore();
  expect(app.doAdd(1, 2)).toEqual(3);
});


With jest.fn() you can create a mock function. There are a list of methods that can be used in the mock function (found at https://jestjs.io/docs/mock-function-api).

When to use jest.fn():
-You want to completely override the function's implementation. You don't care what it is and are not bothered about restoring it
-You want to mock the result of the function

Example 1:
import * as app from "./app";
import * as math from "./math";

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});

Example 2:
const mockFn = jest.fn();
const f = mockFn.mock.calls;
f('arg1', 'arg2');
f('arg3', 'arg4');

Result:
[
  ['arg1', 'arg2'],
  ['arg3', 'arg4'],
];

- What is "jest.mock" and how do we use it?
use jest.mock to automatically set all exports of a module to the Mock Function.

Example:
math.js file:
export const add      = jest.fn();
export const subtract = jest.fn();
export const multiply = jest.fn();
export const divide   = jest.fn();

math.test.js file:
jest.mock("./math.js");

test("calls math.add", () => {
  app.doAdd(1, 2);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
  app.doSubtract(1, 2);
  expect(math.subtract).toHaveBeenCalledWith(1, 2);
});


https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c