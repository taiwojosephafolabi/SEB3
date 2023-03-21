'use strict';

import express from 'express';
import nodemon from 'nodemon';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.get('/userDetails', (req, res) => {
  res.sendFile('C:/Users/Joseph/Projects/SEB3/Week-14/Homework - Local Storage/frontend/userDetails.html')
});

app.listen(process.env.PORT, () => {
console.log('listening on port ' + process.env.PORT)
});
