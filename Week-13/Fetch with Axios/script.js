'use strict'
import axios, {isCancel, AxiosError} from 'axios';
const axios = require('axios/dist/browser/axios.cjs');

const weatherAPIFunc = async () => {
console.log("hello");
const options = {
  params: {lat: '35.5', lon: '-78.5'},
  headers: {
    'X-RapidAPI-Key': '5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1',
    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
  }
};

  try {
    const response = await axios.get('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly', options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default weatherAPIFunc;