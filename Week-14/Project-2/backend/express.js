'use strict';

import express, { request } from 'express';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true}));


app.get('/', (req, res) => {
// const markup = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Project 2</title>
//   <link rel="stylesheet" href="./styles.css">
// </head>
// <body>
//   <h1>Project 2</h1>
//   <form action="/" method="POST">
//     <label for="name">Name:</label>
//     <input id="name" type="text" name="name" placeholder="Enter name...">
//     <label for="food">Favourite food:</label>
//     <input id="food" type="text" name="food" placeholder="What's your favourite word?">
//     <input type="submit" value="Submit">
//   </form>
//   <script src="./script.js"></script>
// </body>
// </html>
// `;
// res.send(markup)
res.sendFile('C:/Users/Joseph/Projects/SEB3/Week-14/Project-2/frontend/index.html')
});

app.post('/info', (req, res) => {
  const nameValue = req.body.name;
  const favFoodValue = req.body.food;
  console.log(req.body);
  res.send(`Hi ${nameValue}! Your favourite food is ${favFoodValue}.`);
});


app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT)
});