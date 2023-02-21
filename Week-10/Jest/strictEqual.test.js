describe("strictEqual", () => {
  it("Undefined equal", () => {
    expect({ x: undefined, y: "second" }).toEqual({ y: "second" });
  });
  it("Undefined strict equal", () => {
    expect({ x: undefined, y: "second" }).toStrictEqual({ y: "second" });
  });
});