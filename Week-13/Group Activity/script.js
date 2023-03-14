"use strict";

const geoAPIFunc = () => {
  const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log("Geo API Data:", json))
    .catch((err) => console.error("error:" + err));
};

const cocktailAPIFunc = () => {
  const url = "https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5061b5fc0dmshb2c4d064a15a60fp103b36jsn5a4a2c9b3dd1",
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log("Cockatil API Data:", json))
    .catch((err) => console.error("error:" + err));
};
