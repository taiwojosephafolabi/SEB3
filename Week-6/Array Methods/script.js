"use strict"

// string, array

let myName = "Joseph";

console.log(myName.length);
console.log(myName[1]);

// arrays

let scores = [0, 12, 20, 19, 11, 15, 17];

// push
let result = scores.push(13);
console.log(scores);

scores.push(20);
console.log(scores);

// pop - remove the last element of the array

scores.pop();
console.log(scores);

// unshift - add an element as the first index

scores.unshift(14.5);
console.log(scores);

scores.unshift(18.5);
console.log(scores);

// shift - remove an element to the first index

scores.shift();
console.log(scores);

// join - moves items into a string (with a sepaarator)

let result2 = scores.join();
console.log(result2);
console.log(typeof(result2));

let result3 = scores.join(" "); //Separated by a space
console.log(result3);
console.log(typeof(result3));

let result4 = scores.join("+"); //Separated by a plus
console.log(result4);
console.log(typeof(result4));

let result5 = scores.join(""); // No separated 
console.log(result5);
console.log(typeof(result5));

// concat - append arrays onto each other

let secondScores = [-2, -3, -5, -10];

let result6 = scores.concat(secondScores);
console.log(result6);

let result7 = secondScores.concat(scores); // It matter which array is first
console.log(result7);

// slice

let result8 = scores.slice();
console.log(result8);

let result9 = scores.slice(1,4);;
console.log(result9);

// reverse

scores.reverse();
console.log(scores);

// sort

scores.sort();
console.log(scores);

// filter

function filterName(name){
    if(name.includes("o")){
        return name
    }
}

let loveCircularArr = ["Aqsa", "Cedric", "Ellie", "Joseph", "Joshua", "Louis", ]
let result10 = loveCircularArr.filter(filterName);
console.log(result10);

// map

// splice - override items from an array

scores.splice(2, 0, 23); // add
console.log(scores);

scores.splice(5, 1); // remove
console.log(scores);

scores.splice(0, 5, 33, 2, 67); // override
console.log(scores);