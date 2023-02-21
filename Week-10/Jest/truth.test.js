"use strict";

const truth = require("./truth");
  
  describe("True, null and definite", () => {
    it("Expect undefined not.toBeTruthy", () => {
      expect(truth()).not.toBeTruthy();
    });
  
    it("Expect undefined toBeFalsy", () => {
      expect(truth()).toBeFalsy();
    });
  
    it("Expect undefined not.toBeNull", () => {
      expect(truth()).not.toBeNull();
    });
    it("Expect undefined not.toBeDefined", () => {
      expect(truth()).not.toBeDefined();
    });
    it("Expect undefined toBeUndefined", () => {
      expect(truth()).toBeUndefined();
    });
    it("Expect undefined not.toBeNaN", () => {
      expect(truth()).not.toBeNaN();
    });
  });