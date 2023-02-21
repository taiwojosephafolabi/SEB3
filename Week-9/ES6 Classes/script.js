'use strict';

class Task {
  constructor() {
      console.log("Task instance created!");
  }

  showId() {
      console.log(23);
  }

  static loadAll() {
      console.log("Loading all tasks...");
  }
}

console.log(typeof Task);

let task = new Task();
task.showId();
Task.loadAll();

class Car {
  constructor() {
    console.log("Inputting a new car");
  }
};

class Porshe extends Car {
  constructor() {
    super();
    console.log("Building a Porshe")
  };
};

let c = new Porshe();