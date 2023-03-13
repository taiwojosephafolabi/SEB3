"use strict";

import express from "express";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

const app = express();
app.use(bodyParser.json());

app.listen(2000, () => {
  console.log("server listening on port 2000");
});

let events = [
  { eventName: "Wireless Festival", eventDate: "07/07/2023", location: "Finsbury Park", ticketCapacity: 50000, ticketSales: 5000, id: uuid()},
  { eventName: "Burna Boy Concert", eventDate: "03/06/2023", location: "London Stadium", ticketCapacity: 66000, ticketSales: 60000, id: uuid() },
  { eventName: "The Lion King", eventDate: "14/03/2023", location: "Lyceum Theatre", ticketCapacity: 2100, ticketSales: 2000, id: uuid()}
];

app.get("/events", (req, res) => {
  res.send(events)
});

// Update - Patch 
app.patch("/events/update/:id", (req, res) => {
  let eventId = req.params.id;
  const { ticketSales } = req.body;
  const findEvent = events.find(
    (event) => event.id === eventId
  );

  if(ticketSales){
    findEvent.ticketSales = ticketSales;
  };
  res.send("Ticket sales updated!")
});

app.get("/events/updated", (req, res) => {
  res.send(events);
});
//
// Update - Put
app.put("/events/update/:id", (req, res) => {
  let eventId = req.params.id;
  const { ticketSales } = req.body;
  const findEvent = events.find(
    (event) => event.id === eventId
  );

  if(ticketSales){
    findEvent.ticketSales = ticketSales;
  };
  res.send("Ticket sales updated!")
});

app.get("/events/updated", (req, res) => {
  res.send(events);
});



//