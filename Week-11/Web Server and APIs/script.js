// Use Express JS framework
const express = require('express');
const app = express();

// Get Request
app.get("/hello", (request, response) => {
  console.log("request ===>", request)
  response
  response.send("hello world!")
});

app.get("/goodbye", (request, response) => {
  response.send("Goodbye!")
});

// Post Request
app.post("/submit", (request, response) => {
  const data = request.body.user;
  response.send(`username is ${data}`);
});

// Call server with built in function
app.listen(5000, () => {
  console.log("server listening on port")
});