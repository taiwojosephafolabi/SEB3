"use strict";

let a = 1;
let b = 2;

let result = a + b; // Can change operator to -, *, /
console.log(result);

let c = 4;

let sum = a - b + c;
console.log("sum is", sum);

let result2 = (a += b); // a = a + b
console.log("result2 is", result2);
console.log("a is", a);
console.log("b is", b);

let result3 = (b += a); // b = b + a
console.log("result3 is", result3);
console.log("a is", a);
console.log("b is", b);

let result4 = (b -= 1); // b = b + 1
console.log("result4 is", result3);
console.log("a is", a);
console.log("b is", b);

let result5 = (b **= 4); // b = b ** 4 (power)
console.log("result4 is", result3);
console.log("a is", a);
console.log("b is", b);

let result6 = (b %= a); // b = remainder of b / a)
console.log("result4 is", result3);
console.log("a is", a);
console.log("b is", b);

// Identity
if (2 === 3) {
  console.log("YES");
} else if (2 !== 3) {
  console.log("NO");
}

// AND operator
if (2 < 3 && 3 < 10) {
  console.log("YES");
} else if (2 !== 3) {
  console.log("NO");
}

// OR operator
if (2 < 3 || 3 > 10) {
  console.log("YES");
} else if (2 !== 3) {
  console.log("NO");
}

let str1 = "Joseph";
let str2 = " is studying a course";
let result7 = `${str1 + str2 + " today"}`;
console.log(result7);

let number1 = 23;
let number2 = 25;
let myString = "80";

console.log(number1 * myString);

// Exercise 1
console.log("Exercise 1");
let myStr1 = "abcde";
console.log(myStr1);
console.log(myStr1[0]);
console.log(myStr1[2]);
console.log(myStr1[4]);
console.log("==============");

// Exercise 2
console.log("Exercise 2");
console.log(myStr1);
let myStr2 = "";
console.log(
  myStr2.concat(myStr1[4], myStr1[3], myStr1[2], myStr1[1], myStr1[0])
);
// console.log(myStr2)
console.log("==============");

// Exercise 3
console.log("Exercise 3");
console.log(myStr1);
let num = 3;
console.log(myStr1[num]);
console.log("==============");

// Exercise 4
console.log("Exercise 4");
let myName = "Joseph";
console.log(myName);
console.log(myName[myName.length - 1]);
console.log("==============");

// Exercise 5
console.log("Exercise 5");
console.log(myName);
console.log(myName[myName.length - 2]);
console.log("==============");

// Exercise 6
console.log("Exercise 6");
let myNum = "12345";
console.log(myNum);
console.log(
  Number(myNum[0]) +
    Number(myNum[1]) +
    Number(myNum[2]) +
    Number(myNum[3]) +
    Number(myNum[4])
);
console.log("==============");

// Exercise 7
console.log("Exercise 7");
console.log(myNum);
console.log(myNum[0] * myNum[1] * myNum[2] * myNum[3] * myNum[4]);
console.log("==============");

// Exercise 8
console.log("Exercise 8");
console.log(myNum);
let myNum2 = "";
console.log(myNum2.concat(myNum[4], myNum[3], myNum[2], myNum[1], myNum[0]));
// console.log(myStr2)
console.log("==============");

// Exercise 9
console.log("Exercise 9");
console.log(`let num = 1;
num = num + 1;
num = num + 1;

alert(num);`);
console.log("3 will be displayed");
console.log("==============");

// Exercise 10
console.log("Exercise 10");
console.log(`let num = 1;
num = num + 2;
num = num + 3;

alert(num);`);
console.log("6 will be displayed");
console.log("==============");

// Exercise 11
console.log("Exercise 11");
let myNum3 = 47;
myNum3 += 7;
myNum3 -= 18;
myNum3 *= 10;
myNum3 /= 15;
console.log(myNum3);
console.log("==============");

// Exercise 12
console.log("Exercise 12");
let myNum4 = 10;
myNum4++;
myNum4++;
myNum4--;
console.log(myNum4);
console.log("==============");

// Exercise 13
console.log("Exercise 13");
console.log(`let num = 3;
alert(++num);`);
console.log("4 will be displayed");
console.log("==============");

// Exercise 14
console.log("Exercise 14");
console.log(`let num = 3;
alert(num++);`);
console.log("3 will be displayed");
console.log("==============");

// Exercise 15
console.log("Exercise 15");
console.log(`let num = 3;
alert(--num);`);
console.log("2 will be displayed");
console.log("==============");

// Exercise 16
console.log("Exercise 16");
console.log(`let num = 3;
alert(num--);`);
console.log("3 will be displayed");
console.log("==============");

// Exercise 17
console.log("Exercise 17");
console.log(`let num1 = 3;
let num2 = ++num1;
alert(num1);
alert(num2);`);
console.log(`4 will be displayed
4 will be displayed`);
console.log("==============");

// Exercise 18
console.log("Exercise 18");
console.log(`let num1 = 3;
let num2 = num1++;
alert(num1);
alert(num2);`);
console.log(`3 will be displayed
4 will be displayed`);
console.log("==============");

// Exercise 19
console.log("Exercise 19");
console.log(`let num1 = 3;
let num2 = --num1;
alert(num1);
alert(num2);`);
console.log(`2 will be displayed
2 will be displayed`);
console.log("==============");

// Exercise 20
console.log("Exercise 20");
console.log(`let num1 = 3;
let num2 = num1--;
alert(num1);
alert(num2);`);
console.log(`3 will be displayed
2 will be displayed`);
console.log("==============");

// Exercise 21
console.log("Exercise 21");
console.log(`let num1 = 3;
num1++;
let num2 = num1--;
alert(num1++);
alert(--num2);`);
console.log(`3 will be displayed
3 will be displayed`);
console.log("==============");

// Exercise 22
console.log("Exercise 22");
let myNum5 = 0.1 * 0.2;
console.log(myNum5);
console.log(myNum5.toFixed(2));
console.log("==============");

// Exercise 23
console.log("Exercise 23");
let myNum6 = 0.3 - 0.1;
console.log(myNum6);
console.log(myNum6.toFixed(2));
console.log("==============");

// Exercise 24
console.log("Exercise 24");
console.log("Your age: " + prompt("What is your age?"));
console.log("==============");

// Exercise 25
console.log("Exercise 25");
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
console.log("The sum: " + (Number(num1) + Number(num2)));
console.log("==============");

// Exercise 26
console.log("Exercise 26");
let num3 = prompt("Enter the length of the side of the square:");
console.log("Area of square: " + Number(num3) ** 2);
console.log("==============");

// Exercise 27
console.log("Exercise 27");
let num4 = prompt("Enter the length of the side of the rectangle:");
let num5 = prompt("Enter the width of the side of the rectangle:");
console.log("Perimeter of rectangle: " + (Number(num3) + Number(num4)) * 2);
console.log("==============");

// Exercise 28
console.log("Exercise 28");
document.write("Here is some text<br>");
console.log("See browser window");
console.log("==============");

// Exercise 29
console.log("Exercise 29");
document.write("<i>Here is some italic text</i><br>");
console.log("See browser window");
console.log("==============");

// Exercise 30
console.log("Exercise 30");
let str3 = "Some more italic text";
document.write("<i>" + str3 + "</i><br>");
console.log("See browser window");
console.log("==============");

// Exercise 31
console.log("Exercise 31");
document.write("1<br>");
document.write("2<br>");
document.write("3<br>");
document.write("4<br>");
document.write("5<br>");
console.log("See browser window");
console.log("==============");

// Exercises: Console erros
// Exercise 32
console.log("Exercise 32");
let num6 = 1;
let num7 = 2;
console.log("Sum: " + (Number(num6) + Number(num7)));
console.log("==============");

// Exercise 33
console.log("Exercise 33");
let num8 = 1;
let num9 = 2;
let num10 = 3;
console.log(num8 + num9 + num10);
console.log("==============");

// Exercise 34
console.log("Exercise 34");
let num11 = "123";
let sum1 = Number(num11[0] + Number(num11[1]) + Number(num11[2]));
console.log(sum1);
console.log("==============");

// Exercise 35
console.log("Exercise 35");
let num12 = 123;
console.log((String(num12))[0]);
console.log("==============");

// Exercise 36
console.log("Exercise 36");
let num13 = 0;
console.log(num13++);
console.log("==============");

// Exercise 37
console.log("Exercise 37");
let num14 = 123;
console.log((String(num14)).length);
console.log("==============");

// Exercise 38
console.log("Exercise 38");
let num15 = 24 * 60 * 60;
console.log(num15);
console.log("==============");

// Exercise 39
console.log("Exercise 39");
let num16 = 123;
let str = String(num16);
console.log(str.length);
console.log("==============");

// Exercise 40
console.log("Exercise 40");
let num17 = 123;
let str4 = String(num);
console.log(str4[str4.length - 1]);
console.log("==============");

// Exercise 41
console.log("Exercise 41");
let num18 = 123;
let str5 = String(num18);
console.log(str5.length);
console.log("==============");

// Exercise 42
console.log("Exercise 42");
let num19 = 123;
let str6 = String(num19);
console.log(str6[str6.length - 1]);
console.log("==============");

// Exercise 43
console.log("Exercise 43");
let num20 = "123";
let num21 = "456";
let num22 = Number(num20) + Number(num21);
console.log(num22);
console.log("==============");

// Exercise 44
console.log("Exercise 44");
let aaa = 1;
let bbb = 2;
let ccc = 3;
console.log(aaa + bbb + ccc);
console.log("==============");

// Exercises: Practical Examples
// Exercise 45
console.log("Exercise 45");
let secondsInADay = 60 * 60 * 24;
console.log("There are " + secondsInADay + " seconds in a day");
console.log("==============");

// Exercise 46
console.log("Exercise 46");
let secondsIn30Days = secondsInADay * 30;
console.log("There are " + secondsIn30Days + " seconds in 30 days");
console.log("==============");

// Exercise 47
console.log("Exercise 47");
let secondsInAYear = secondsInADay * 365;
console.log("There are " + secondsInAYear + " seconds in a year");
console.log("==============");

// Exercise 48
console.log("Exercise 48");
let minutesInADay = 60 * 24;
console.log("There are " + minutesInADay + " minutes in a day");
console.log("==============");

// Exercise 49
console.log("Exercise 49");
let minutesInAYear = minutesInADay * 365;
console.log("There are " + minutesInAYear + " minutes in a year");
console.log("==============");

// Exercise 50
console.log("Exercise 50");
let bytesInAMegabyte = 1 * 10 ** 6;
console.log("There are " + bytesInAMegabyte + " bytes in a megabyte");
console.log("==============");

// Exercise 51
console.log("Exercise 51");
let bytesInAGigabyte = 1 * 10 ** 9;
console.log("There are " + bytesInAGigabyte + " bytes in a gigabyte");
console.log("==============");

// Exercise 52
console.log("Exercise 52");
let bytesIn10Gigabytes = bytesInAGigabyte * 10;
console.log("There are " + bytesIn10Gigabytes + " bytes in 10 gigabytes");
console.log("==============");

// Exercsie 53
console.log("Exercsie 53");
let bytesInATerabyte = 1 * 10 ** 12;
console.log("There are " + bytesInATerabyte + " bytes in a terabyte");
console.log("==============");

// Exercise 54
console.log("Exercise 54");
let kilobytesInATerabyte = bytesInATerabyte / (1 * 10 ** 3);
console.log("There are " + kilobytesInATerabyte + " kilobytes in a terabytes");
console.log("==============");

// Exercise 55
console.log("Exercise 55");
let r = 3;
let s = Math.PI * r ** 2;
alert(s.toFixed(2));
console.log(s.toFixed(2));
console.log("==============");

// Exercise 56
console.log("Exercise 56");
let a2 = 3;
let s2 = a2 ** 2;
alert(s2);
console.log(s2);
console.log("==============");

// Exercise 57
console.log("Exercise 57");
let a3 = 3;
let b2 = 3;
let s3 = a3 * b2;
alert(s3);
console.log(s3);
console.log("==============");

// Exercise 58
console.log("Exercise 58");
let a4 = 3;
let b3 = 3;
let s4 = (a4 + b3) * 2;
alert(s4);
console.log(s4);
console.log("==============");

// Exercise 59
console.log("Exercise 59");
let tc = 30;
let tf = (tc * 9) / 5 + 32;
alert(tf.toFixed(2));
console.log(tf.toFixed(2));
console.log("==============");

// Exercise 60
console.log("Exercise 60");
let tf2 = 90;
let tc2 = ((tf2 - 32) * 5) / 9;
alert(tc2.toFixed(2));
console.log(tc2.toFixed(2));
console.log("==============");
