"use strict";

describe("checking toMatch", () => {
  it("pineapple contains apple", () => {
    expect("pineapple").toMatch("apple");
  });

  it("pineapple contains pine", () => {
    expect("pineapple").toMatch(/pine/);
  })
});
