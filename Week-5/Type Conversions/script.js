"use strict"
// Exercise 1
console.log("Exercise 1");
console.log(`let a = '5' + '2';
alert(a)`);
console.log("52 will be displayed");
console.log("==============");

// Exercise 2
console.log("Exercise 2");
console.log(`let a = '5' + 2;
alert(a)`);
console.log("52 will be displayed");
console.log("==============");

// Exercise 3
console.log("Exercise 3");
console.log(`let a = 5 + '2';
alert(a)`);
console.log("52 will be displayed");
console.log("==============");

// Exercise 4
console.log("Exercise 4");
console.log(`let a = 5 + 2;
alert(a)`);
console.log("7 will be displayed");
console.log("==============");

// Exercise 5
console.log("Exercise 5");
console.log(`let a = '5' * '2';
alert(a)`);
console.log("10 will be displayed");
console.log("==============");

// Exercise 6
console.log("Exercise 6");
console.log(`let a = '5' - '2';
alert(a)`);
console.log("3 will be displayed");
console.log("==============");

// Exercise 7
console.log("Exercise 7");
console.log(`let a = '5' / '2';
alert(a)`);
console.log("2.5 will be displayed");
console.log("==============");

// Exercise 8
console.log("Exercise 8");
console.log(`let a = '5' % '2';
alert(a)`);
console.log("1 will be displayed");
console.log("==============");

// Exercise 9
console.log("Exercise 9");
console.log(`let a = '5s' * '2';
alert(a)`);
console.log("NaN will be displayed");
console.log("==============");

// Exercise 10
console.log("Exercise 10");
console.log(`let a = '5s' + '2';
alert(a)`);
console.log("5s2 will be displayed");
console.log("==============");

// Exercise 11
console.log("Exercise 11");
console.log(`let a = (-'5') + (-'2');
alert(a)`);
console.log("-7 will be displayed");
console.log("==============");

// Exercise 12
console.log("Exercise 12");
console.log(`let a = '5' * 1 + '2' * 1);
alert(a)`);
console.log("52 will be displayed");
console.log("==============");

// Exercise 13
console.log("Exercise 13");
console.log(`let a = '5' * '1' + '2' * '1');
alert(a)`);
console.log("7 will be displayed");
console.log("==============");

// Exercise 14
console.log("Exercise 13");
console.log(`let a = '' + 3 + 1);
alert(a)`);
console.log(" 31 will be displayed");
console.log("==============");

// Exercise 15
console.log("Exercise 15");
let a = '10';
let b = '20';
console.log(`${a} + ${b} =`, Number(a) + Number(b));
console.log("==============");

// Exercise 16
console.log("Exercise 16");
console.log(`alert(Number('2') + Number('3'));`);
console.log("5 will be displayed");
console.log("==============");

// Exercise 17
console.log("Exercise 17");
console.log(`alert(2 + Number('3'));`);
console.log("5 will be displayed");
console.log("==============");

// Exercise 18
console.log("Exercise 18");
console.log(`alert('2' + Number('3'));`);
console.log("23 will be displayed");
console.log("==============");

// Exercise 19
console.log("Exercise 19");
let a2 = '2';
let b2 = '3';
console.log(+a2 + +b2);
console.log("==============");

// Exercise 20
console.log("Exercise 20");
let fontSize1 = '5px';
let fontSize2 = '6px';
console.log(`The sum of ${fontSize1} and ${fontSize2} is ${parseInt(fontSize1) + parseInt(fontSize2)}px`);
console.log("==============");

// Exercise 21
console.log("Exercise 21");
let fontSize3 = '5.5px';
let fontSize4 = '6.25px';
console.log(`The sum of ${fontSize3} and ${fontSize4} is ${parseFloat(fontSize3) + parseFloat(fontSize4)}px`);
console.log("==============");

// Exercise 22
console.log("Exercise 22");
let num1 = 3;
let num2 = 5;
console.log(`The sum of the strings is ${String(num1) + String(num2)}`);
console.log("==============");

// Exercise 23
console.log("Exercise 23");
let num3 = 350927;
console.log(`There are ${String(num3).length} digits in ${num3}`);
console.log("==============");

// Exercise 24
console.log("Exercise 24");
let num4 = 894764;
let num5 = 33;
console.log(`There are a total of ${String(num4).length + String(num5).length} digits in ${num4} and ${num5}`);
console.log("==============");

// Exercise 25
console.log("Exercise 25");
console.log(`alert(true + 3);`);
console.log("4 will be displayed");
console.log("==============");

// Exercise 26
console.log("Exercise 26");
console.log(`alert(true + true);`);
console.log("2 will be displayed");
console.log("==============");

// Exercise 27
console.log("Exercise 27");
console.log(`alert(true - true);`);
console.log("0 will be displayed");
console.log("==============");

// Exercise 28
console.log("Exercise 28");
console.log(`alert(true + fasle);`);
console.log("1 will be displayed");
console.log("==============");

// Exercise 29
console.log("Exercise 29");
console.log(`alert('1' + true);`);
console.log("1true will be displayed");
console.log("==============");

// Exercise 30
console.log("Exercise 30");
console.log(`alert(String(true) + 1);`);
console.log("true1 will be displayed");
console.log("==============");

// Exercise 31
console.log("Exercise 31");
console.log(`alert(String(true) + Number(true);`);
console.log("true1 will be displayed");
console.log("==============");

// Exercise 32
console.log("Exercise 32");
console.log(`let test = Boolean(3);
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 33
console.log("Exercise 33");
console.log(`let test = Boolean(0);
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 34
console.log("Exercise 34");
console.log(`let test = Boolean(-1);
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 35
console.log("Exercise 35");
console.log(`let test = Boolean(-0);
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 36
console.log("Exercise 36");
console.log(`let test = Boolean(+0);
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 37
console.log("Exercise 37");
console.log(`let test = Boolean('abc');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 38
console.log("Exercise 38");
console.log(`let test = Boolean('');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 39
console.log("Exercise 39");
console.log(`let test = Boolean('0');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 40
console.log("Exercise 40");
console.log(`let test = Boolean(true);
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 41
console.log("Exercise 41");
console.log(`let test = Boolean(false);
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 42
console.log("Exercise 42");
console.log(`let test = Boolean('true');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 43
console.log("Exercise 43");
console.log(`let test = Boolean('false');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 44
console.log("Exercise 44");
console.log(`let test = Boolean(null);
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 45
console.log("Exercise 45");
console.log(`let test = Boolean('null');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 46
console.log("Exercise 46");
console.log(`let test = Boolean(undefined);
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 47
console.log("Exercise 47");
console.log(`let test = Boolean('undefined');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 48
console.log("Exercise 48");
console.log(`let test = Boolean(NaN);
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 49
console.log("Exercise 49");
console.log(`let test = Boolean('NaN');
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 50
console.log("Exercise 50");
console.log(`let test = Boolean(3 * 'abc');
alert(test);`);
console.log("false will be displayed");
console.log("==============");

// Exercise 51
console.log("Exercise 51");
console.log(`let test = Boolean(Infinity);
alert(test);`);
console.log("true will be displayed");
console.log("==============");

// Exercise 52
console.log("Exercise 52");
console.log(`let test = Boolean(1/0);
alert(test);`);
console.log("true will be displayed");
console.log("==============");
