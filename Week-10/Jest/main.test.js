const { square } = require("./main");
import { square } from "./main";

test("Square 2 to return 4", () => {
  expect(square(2)).toBe(4);
});