import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
import dotenv from "dotenv";

const app = express();


app.listen(9000, () => {
  console.log("Express is running on port 9000");
});

app.get("/:surname", (req, res) => {
  console.log(req.params);
  res.send(`This is the data: ${req.params.surname}`);
});

app.get("/data/fullname/:firstname&:surname", (req, res) => {
  console.log(req.params.firstname);
  console.log(req.params.surname);
  res.send(`This is the data: ${req.params.firstname}. ${req.params.surname}`);
});

app.get("/data/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`This is the data: ${req.params.id}`);
});

let dataBase = [
  { id: "123", name: "Joseph" },
  { id: "456", name: "Cedric" },
  { id: "789", name: "Joshua" },
];

app.get("/data/name/:id", (req, res) => {
  const findName = dataBase.filter((data) => data.id === req.params.id);
  console.log(findName);
  res.send(`name found: ${findName[0].name}`);
  // res.send("name found:" + findName[0].name);
  res.send("Name found!");
});

app.get("/name/check", (req, res) => {
  try {
    console.log(req.query);
    const myName = req.query.name;
    const myId = req.query.id;
    // res.send("Data checked!");
    res.send(`Hi ${myName}! Your ID is: ${myId}.`);
  } catch (error) {
    throw new err("This is the error:", error);
  }
});
