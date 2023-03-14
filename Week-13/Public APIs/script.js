'use strict';
// Currency Exchange API

// const url = 'https://currency-exchange.p.rapidapi.com/listquotes';

// fetch(url, {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1',
//     'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
//   }
// }).then(res => res.json()).then(data => console.log(data));


// Movies Datatbase

const url2 = 'https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

fetch(url2, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));