"use strict";

const data = require("./contain");
  
const contain = data.contain;

const spring = data.spring;

describe("Entering elements in an array", () => {
  it("Is there spring among the seasons?", () => {
    expect(contain()).toContain(spring);
  });
  it("Are any of the seasons ['March', 'April', 'May']", () => {
    expect(contain()).toContain(["March", "April", "May"]);
  });
  it("Is there spring among the seasons (Equal)?", () => {
    expect(contain()).toContainEqual(spring);
  });
  it("Are any of the seasons ['March', 'April', 'May'] (Equal)?", () => {
    expect(contain()).toContainEqual(["March", "April", "May"]);
  });
});