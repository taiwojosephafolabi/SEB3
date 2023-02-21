"use strict";

const numberComparison = require("./numberComparison");
  
  test("3 + 2", () => {
    expect(numberComparison(3, 2)).toBeGreaterThan(3);
    expect(numberComparison(3, 2)).toBeGreaterThanOrEqual(5);
    expect(numberComparison(3, 2)).toBeLessThan(10);
    expect(numberComparison(3, 2)).toBeLessThanOrEqual(6);
  });