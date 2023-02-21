- What is Jest?
Jest is a library for testing JavaScript code. It is an open source project backed by Facebook and is particularly well suited to testing React code (but is used for many frameworks). It can perform snapshot testing - a type of output comparison testing.


- What is unit testing?
A unit test is a way of testing a unit, a small section of code, such as a function or method. It works by testing a small section of the code and running it.
Advantages of unit testing:
-Improves code quality 
-Early discovery of bugs

- How to write unit tests? (find any documentation you can and look at examples)

- Create function in script.js file
let sum = (a, b) => return a + b 

Anything other than 15 from the function, would result in an error meaning the testcase has failed.

- Create test in sum.test.js file
const calculator = require('./calculator')

describe('I am checking calculation', () => {
  test("check sum result", () => {
    let result = sumFunction(3,2);
    expect(result).toBe(5)
  })
});

- Use Jest to test
In command line run: npm run test


