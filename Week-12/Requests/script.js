// First way
// const express = require('express');
// const bodyParser = require('body-parser');

// Second way
import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
//
const app = express();
app.use(bodyParser.json());

//JSON
// {"key1": key1Value, "key2": key2Value}

app.listen(8000, () => {
  console.log("server listening on port")
});

// Get
const youTubeFootballData = [
  {
    id: 1,
    name: "video-1",
    type: "sport",
  },
  {
    id: 2,
    name: "video-2",
    type: "sport",
  },
  {
    id: 3,
    name: "video-3",
    type: "sport",
  },
];

app.get("/sport/football", (request, response) => {
  response.send(youTubeFootballData)
});

const youTubeHomeData = [
  {
    id: 1,
    name: "video-1",
    type: "clothing",
  },
  {
    id: 2,
    name: "video-2",
    type: "skincare",
  },
  {
    id: 3,
    name: "video-3",
    type: "music",
  },
];

app.get("/home", (request, response) => {
  response.send(youTubeHomeData)
});

// Post
// Post request - Sending data to database

let youTubeUsers = [];


app.post("/youtube/signup", (request, response) => {
  console.log("===========", request.body);
  const {id} = request.body;
  const data = request.body;
  youTubeUsers.push({...data, id: uuid()});
  // id = uuid();
  // const newUser = { ...request.body, id : id }
  // const newUser = request.body;
  //youTubeUsers.push(newUser); // add data to array
  response.send("You are signed up")
});

app.get("/youtube/users", (request, response) => {
  response.send(youTubeUsers)
});

// Get - Specific Data
app.get("/user/:id", (request, response) => {
  console.log(request.params); // params is used to get specific data
  const { id } = request.params;
  const specificUser = youTubeUsers.find(user => user.id === id);
  response.send(specificUser);
});

// app.get("/youtube/users/:id", (request, response) => {
//   console.log(request.params)
//   response.send(youTubeUsers)
// });


// Delete
app.delete("/user/:id", (request, response) => {
  const { id } = request.params;
  const findUser = youTubeUsers.find(user => user.id === id)
  youTubeUsers = youTubeUsers.filter(user => user.id !== id) // going to create a new array
  response.send(youTubeUsers)

  // const findUser = youTubeUsers.find(user => user.id === id)
  // response.send(`User ${findUser.name} is removed`)
});

// Update
// Update - Patch
app.patch("/user/:id", (request, response) => {
  let { id } = request.params;
  const { name, email, password } = request.body;
  const findUser = findUser.find(user => user.id === id)

  if(name){
    findUser.name = name
  };

  if(email){
    findUser.email = email
  };

  if(password){
    findUser.password = password
  };

  response.send("Updated!")

});
//Update - Put 
