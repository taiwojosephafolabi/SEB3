"use strict"

let a = 1;
let b = 2;

let result = a + b; // Can change operator to -, *, /
console.log(result);

let c = 4;

let sum = (a - b) + c;
console.log("sum is", sum);

let result2 = a += b; // a = a + b
console.log("result2 is", result2);
console.log("a is", a);
console.log("b is", b);

let result3 = b +=a; // b = b + a
console.log("result3 is", result3);
console.log("a is", a);
console.log("b is", b);

let result4 = b -= 1; // b = b + 1
console.log("result4 is", result3);
console.log("a is", a);
console.log("b is", b);

let result5 = b **= 4; // b = b ** 4 (power)
console.log("result4 is", result3);
console.log("a is", a);
console.log("b is", b);

let result6 = b %= a; // b = remainder of b / a)
console.log("result4 is", result3);
console.log("a is", a);
console.log("b is", b);

// Identity
if(2 === 3){
    console.log("YES")
}
else if( 2 !== 3){
    console.log("NO")
}

// AND operator
if(2 < 3 && 3 < 10){
    console.log("YES")
}
else if( 2 !== 3){
    console.log("NO")
}

// OR operator 
if(2 < 3 || 3 > 10){
    console.log("YES")
}
else if( 2 !== 3){
    console.log("NO")
}

let str1 = "Joseph";
let str2 = " is studying a course";
let result7 = `${str1+ str2 + " today"}`
console.log(result7);


let number1 = 23;
let number2 = 25;
let myString = "80"

console.log(number1 * myString);