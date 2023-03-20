'use strict';

import express, { request } from 'express';
import * as dotenv from 'dotenv';

const app = express();
dotenv.config();

// app.listen(5000, () => {
//   console.log('listening on port 5000')
// });

// Get Request
app.get('/project1', (req, res) => {
  const result = [];
  const url = 'https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat';
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  
  fetch(url, options)
    .then(res => res.json())
    .then(data => {return result.push(...data.list)})
    .catch(err => console.error('error:' + err));
    console.log(result)
  res.send(result);

});



app.get('/urbanDictionaryAPI', (req, res) => {
  console.log(urbanDictionaryAPI());
});

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT)
});