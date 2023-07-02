'use strict';

import express, { request } from 'express';
import * as dotenv from 'dotenv';
import fetch from "node-fetch";

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
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST
    }
  };
  
  async function checkResult(){
    return await fetch(url, options)
      .then(response=>{
          return response.json()
      })
      .then(res =>{return res.list.map(element => {return result.push(element)})})
      .catch(err => console.error('error:' + err));
    }
  
  async function  showResult(){
      await checkResult()
      console.log(result)
  }
  
  showResult()
});



// app.get('/urbanDictionaryAPI', (req, res) => {
//   console.log(urbanDictionaryAPI());
// });

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT)
});