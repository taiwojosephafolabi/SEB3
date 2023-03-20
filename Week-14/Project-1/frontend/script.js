'use strict';

// import express from 'express';
// const app = express();

// API

let divCon = document.getElementById('container');
let arr = [];

const urbanDictionaryAPI = () => {
  fetch('https://localhost:8000/project1').then(data => data.json())
  .then(data => arr.push(data));
  divCon.innerHTML = 
}

