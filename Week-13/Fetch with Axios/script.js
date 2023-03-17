"use strict";
import axios, { isCancel, AxiosError } from "axios";
const axios = require("axios/dist/browser/axios.cjs");

const weatherAPIFunc = () => {
  console.log("hello");
  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
    params: { lat: "35.5", lon: "-78.5" },
    headers: {
      "X-RapidAPI-Key": "5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

exports.modules = {weatherAPIFunc}
