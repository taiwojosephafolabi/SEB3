class Trainers {
  #brand = "Adidas"; // # allows you to make brand private
  year = 2011;
  color = ["Red", "Yellow"];
  showTheColour(){
    return ("The color is Red");
  }
  showTheName(){
    return this.#brand;

  }
}

let myFirstTrainer = new Trainers();
myFirstTrainer.ownerName = "Joseph";
// console.log("My first trainer class: ", myFirstTrainer, myFirstTrainer.showTheColour());
console.log("My first trainer class: ", myFirstTrainer);
console.log("Show the private name:", myFirstTrainer.showTheName())
//myFirstTrainer.this.#brand // this won't work as #brand is private


let mySecondTrainer = new Trainers();
mySecondTrainer.ownerName = "Aqsa";
console.log("My second trainer class: ", mySecondTrainer)

// constructor
class Trainers2 {
  #ownerName;
  #price;
  constructor(ownerName, brand, model, year, price){
    this.#ownerName = ownerName;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.#price = price;
  }
  #showTheOwnerName(){
    return this.#ownerName
  }
  showThePrice(){
    console.log(this.#showTheOwnerName());
    return this.#price
  }
}

let myThirdTrainer = new Trainers2("Joseph", "Yeezy", 350, 2018, 170);
console.log("My third trainer class: ", myThirdTrainer);
//console.log("Owner name:", myThirdTrainer.showTheOwnerName());
console.log("Price:", myThirdTrainer.showThePrice());

let myFourthTrainer = new Trainers2("Cedric", "Jordan", 11, 2020, 200);
console.log("My third trainer class: ", myFourthTrainer);

// Inheritance Class

class Person {
  name;
  age;
  company;
  address;
  telephone;
  constructor(firstName, surname){
    this.firstName = firstName;
    this.surname = surname;
  }
  print() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}



class Employee extends Person {
  company;
  constructor(firstName, age){
    super(firstName, age);
  }
  work(){
    console.log(`${this.name} works in ${this.company}`);
  }
}

let newEmployee = new Employee("Tom", 40);
newEmployee.name = "Brad";
newEmployee.age = 20;
newEmployee.company = "Startup";
console.log(newEmployee);
console.log(newEmployee.print());