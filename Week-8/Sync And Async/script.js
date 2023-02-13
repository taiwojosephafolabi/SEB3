// Synchronous

function firstFunction(){
  console.log("First function");
}

function secondFunction(){
  console.log("Second function");
}

function thirdFunction(){
  console.log("Third function");
}

function fourthFunction(){
  thirdFunction();
  firstFunction();
  secondFunction();
  console.log("Finished");
}

firstFunction();
secondFunction();
thirdFunction();
fourthFunction(); // has a callback function

// Asynchronous

function greeting(){
  console.log("Hello! Nice to meet you!")
};

function byeGreeting(){
  console.log("We are saying bye!")
};

setTimeout(greeting, 3000);
console.log("We are testing the results.");
setTimeout(byeGreeting, 5000);
console.log("Finished.");