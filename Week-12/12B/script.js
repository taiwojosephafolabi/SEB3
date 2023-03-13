"use strict";

import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

const app = express();
app.use(bodyParser.json());

app.listen(9000, () => {
  console.log("server listening on port");
});

// 2 Post Request

const sportsData = [
  {
    id: uuid(),
    name: "Michael Jordan",
    age: 60,
    height: 1.98,
    team: "retired",
  },
  {
    id: uuid(),
    name: "Lebron James",
    age: 38,
    height: 2.06,
    team: "Lakers",
  },
  {
    id: uuid(),
    name: "Stephen Curry",
    age: 34,
    height: 1.88,
    team: "Warriors",
  },
  {
    id: uuid(),
    name: "Kyrie Irving",
    age: 30,
    height: 1.88,
    team: "Mavericks",
  },
];

let basketballPlayers = [];

// 2 Get Request
app.get("/basketball/player", (request, response) => {
  response.send(sportsData);
});

app.get("/basketball/player", (request, response) => {
  response.send(sportsData[0].name);
});
//

// 2 Post Request
app.post("/player/names", (req, res) => {
  const data = req.body;
  basketballPlayers.push({ ...data, id: uuid() });
  res.send("player added");
});

app.get("/basketball/play", (request, response) => {
  response.send(basketballPlayers);
});
//

// 2 Get with ID
app.get("/basketball/players/:id", (req, res) => {
  let playerId = req.params.id;
  const specificUser = basketballPlayers.find(
    (player) => player.id === playerId
  );
  res.send(specificUser);
});


// Post with id
//


// 2 Delete with id
app.delete("/basketball/players/:id", (req, res) => {
  let playerId = req.params.id;
  const findUser = basketballPlayers.find(
    (player) => player.id === playerId
  );
  basketballPlayers = basketballPlayers.filter(user => user.id !== playerId);
  console.log(basketballPlayers);
  res.send(`${findUser.name} has been removed successfully!`)
});
//



// 2 Patch with id
app.patch("/basketball/update/:id", (req, res) => {
  let playerId = req.params.id;
  const { name } = req.body;
  const findUser = basketballPlayers.find(
    (player) => player.id === playerId
  );

  if(name){
    findUser.name = name;
  };
  res.send("Name updated!")
});
//