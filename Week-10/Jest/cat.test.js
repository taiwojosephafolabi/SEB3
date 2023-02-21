"use strict"
const Cat = require("./cat");
  
  let myCat = new Cat("Oliver", 5);
  let herCat = new Cat("Milo", 3);
  
  // Group tests
  describe("Cat", () => {
    it("The same cat - toBe:", () => {
      expect(myCat).toBe(myCat);
    });
  
    it("Same cat - toEqual:", () => {
      expect(myCat).toEqual(myCat);
    });
  
    it("Two different cats with different data - toBe:", () => {
      expect(herCat).toBe(myCat);
    });
  
    it("Two different cats with different data - toEqual:", () => {
      expect(herCat).toEqual(myCat);
    });
  
    it("Two different cats with the same data - toBe:", () => {
      expect({ name: "Oliver", age: 5 }).toBe(myCat);
    });
  
    it("Two different cats with the same data - toEqual:", () => {
      expect({ name: "Oliver", age: 5 }).toEqual(myCat);
    });
  });