let fruits = ["banana", "watermelon", "raspberry", "lychee"];

// Function 1
function addFruits() {
  let newFruit = fruits.push(process.argv[2]);
  return console.log("Fruits with added fruit: ", fruits);
}
addFruits();

// Function 2
function renderFruitsAsString() {
  let newFruits = fruits.join(" * ");
  return console.log("Fruits as strings: ", newFruits);
}
renderFruitsAsString();

// Function 3
function reverseFruits() {
  fruits.reverse();
  return console.log("Reversed fruits: ", fruits);
};
reverseFruits();


// Function 4
function removeLastFruit() {
  fruits.pop();
  return console.log("Fruits with last item removed: ", fruits);
};
removeLastFruit();
