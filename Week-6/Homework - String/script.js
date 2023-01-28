"use strict";

let myString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(myString)

// Exercise 1
console.log("Exercise 1");
console.log(myString);
console.log(myString.length);
console.log("===============")

// Exercise 2
console.log("Exercise 2");
console.log(myString);
for (let i = 0; i < myString.length; i++){
    console.log(myString[i]);
};
console.log("===============")

// Exercise 3
console.log("Exercise 3");
console.log(myString);
console.log(myString.replace("BCDE", "w-W-w"));
console.log("===============");

// Exercise 4
console.log("Exercise 4");
console.log(myString);
console.log(myString.toLowerCase());
console.log("===============");

// Exercise 5
console.log("Exercise 5");
console.log(myString);
console.log(myString.slice(3,8));
console.log("===============");

// Exercise 6
console.log("Exercise 6");
console.log(myString);
console.log(myString.split("")); // Method 1
console.log([...myString]); // Method 2
console.log(Array.from(myString)); // Method 3
console.log(Object.assign([], myString)); // Method 4
console.log("===============");

// Exercise 7
console.log("Exercise 7");
console.log(myString);
console.log("charCodeAt() gives the Unicode value (UTF-16) of the character in the string");
console.log("The unicode of A is ", myString.charCodeAt(0));
console.log("The unicode of a is ", (myString.toLowerCase()[0]).charCodeAt(0));
console.log("The unicode of J is ", myString.charCodeAt(9));
console.log("===============");

// Exercise 8
console.log("Exercise 8");
console.log(myString);
console.log("substring() method takes a subset of the string and returns the value in another string(substring)");
console.log(myString.substring(0,9));
console.log(myString.substring(20,26));

