"use strict";

let str = "string";
  
test("string inequality in different cases", () => {
  expect(str).not.toEqual(str.toUpperCase());
});