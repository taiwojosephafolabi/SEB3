"use strict";

import express from "express";
import * as dotenv from "dotenv";
import fs from "fs/promises";
import { constants } from "fs";

const app = express();
dotenv.config();

// Exercise 1
app.get("/square/:num", (req, res) => {
  console.log("Exercise 1 - Return the square");
  console.log(
    "The square of " + req.params.num + " is " + req.params.num * req.params.num
  );
  res.send(
    "The square of " + req.params.num + " is " + req.params.num * req.params.num
  );
  console.log("===============");
});

// Exercise 2
app.get("/square/:num1/:num2", (req, res) => {
  console.log("Exercise 2 - Return the sum");
  console.log(
    "The sum of " +
      req.params.num1 +
      " and " +
      req.params.num2 +
      " is " +
      (Number(req.params.num1) + Number(req.params.num2))
  );
  res.send(
    "The sum of " +
      req.params.num1 +
      " and " +
      req.params.num2 +
      " is " +
      (Number(req.params.num1) + Number(req.params.num2))
  );
  console.log("===============");
});

// Exercise 3
app.get("/square/:num1/:num2/:num3", (req, res) => {
  console.log("Exercise 3 - Return the sum");
  console.log(
    "The sum of " +
      req.params.num1 +
      ", " +
      req.params.num2 +
      " and " +
      req.params.num3 +
      " is " +
      (Number(req.params.num1) + Number(req.params.num2))
  );
  res.send(
    "The sum of " +
      req.params.num1 +
      ", " +
      req.params.num2 +
      " and " +
      req.params.num3 +
      " is " +
      (Number(req.params.num1) +
        Number(req.params.num2) +
        Number(req.params.num3))
  );
  console.log("===============");
});

// Exercise 4 - Arrange in the correct order
app.get("/test/show/all", function (req, res) {});
app.get("/test/show/:num", function (req, res) {});
app.get("/test/:num1/:num2", function (req, res) {});

// Exercise 5 - Make the second parameter of this route optional
app.get("/test/:num1/:num2?", function (req, res) {});

// Exercise 6 - parameter check - CHECK
app.get("/exercise6/:date", (req, res) => {
  let date = req.params.date;

  if (/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/) {
    console.log("The date is " + date);
    res.send("The date is " + date);
  } else {
    res.status(404).send("date not found");
  }
});

// Exercise 7 - Display the arrays
let users = ["user1", "user2", "user3", "user4", "user5"];

app.get("/exercise7/:users", (req, res) => {
  console.log("Exercise 7");
  console.log(users[req.params.users]);
  res.send(users[req.params.users]);
});

// Exercise 8 - Display the arrays
let users2 = ["user1", "user2", "user3", "user4", "user5"];

app.get("/exercise8/:users2", (req, res) => {
  console.log("Exercise 7");
  if (req.params.users > users2.length) {
    console.log(users[req.params.users2]);
    res.send(users[req.params.users2]);
  } else {
    res.status(404).send("user not found");
  }
});

// Exercise 9
let users3 = [
  {
    name: "user1",
    age: 31,
  },
  {
    name: "user2",
    age: 32,
  },
  {
    name: "user3",
    age: 33,
  },
];

app.get("/exercise9/users/:id", (req, res) => {
  console.log("Exercise 9");
  let user = users3[req.params.id];
  console.log("Name: " + user.name);
  res.send("Name: " + user.name);
  console.log("============");
});

app.get("/exercise9/users/age/:id", (req, res) => {
  console.log("Exercise 9");
  let user = users3[req.params.id];
  console.log("Age: " + user.age);
  res.send("Age: " + user.age);
  console.log("============");
});

// Exercise 10 - Files
app.get("/exercise10/page/:num", (req, res) => {
  res.sendFile(__dirname + "/pages/" + req.params.num + "html");
});

// Exercise 11 - Error 404 with Files
app.get("/exercise11/page/:num", (req, res) => {
  let path = __dirname + "/pages" + req.params.num + ".html";

  fs.access(path, constants.F_OK)
    .then(() => {
      res.sendFile(path);
    })
    .catch(() => {
      res.status(404).send("File not found");
    });
});

// async
app.get("/exercise11/page/:num", async function (req, res) {
  let path = __dirname + "/pages" + req.params.num + ".html";

  try{
    await fs.access(path, constants.F_OK);
    res.sendFile(path);
    } catch(err) {
      res.status(404).send("File not found");
    }
});

// Exercise 12
let cityRouter = express.router();
let countryRouter = express.router();

app.use("/city", cityRouter);
app.use("/country", countryRouter);

cityRouter.get("/show/:id", function (req, res) {});
cityRouter.get("/edit/:id", function (req, res) {});
countryRouter.get("list", function (req, res) {});
countryRouter.get("/show/:id", function (req, res) {});
countryRouter.get("/edit/:id", function (req, res) {});

app.listen(process.env.PORT, (res, req) => {
  console.log("listening on port " + process.env.PORT);
});
