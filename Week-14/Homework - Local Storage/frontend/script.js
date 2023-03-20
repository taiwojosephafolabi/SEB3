'use strict';

const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('email');

document.addEventListener('click', function submitFunc() {
  localStorage.setItem('fName', firstName.value)
  localStorage.setItem('lName', lastName.value)
  localStorage.setItem('email', email.value)
})