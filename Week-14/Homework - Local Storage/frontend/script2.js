'use strict';

const userData = document.getElementById('userData');
const userData2 = document.getElementById('userData2');
const userData3 = document.getElementById('userData3');

userData.innerText = JSON.stringify(`Name: ${localStorage["fName"]}` + ` | Last Name: ${localStorage["lName"]}` + ` | Email ${localStorage["email"]}`,  null, 4);
userData2.innerText = `Name: ${localStorage["fName"]}` + ` | Last Name: ${localStorage["lName"]}` + ` | Email ${localStorage["email"]}`;
userData3.innerHTML = `<p>Name: ${localStorage["fName"]} <br> Last Name: ${localStorage["lName"]} <br> Email ${localStorage["email"]}</p>`;

// userData2.innerHTML = {...userData} // Need to work on this






