'use strict';

const firstName = document.getElementById('fName');
const lastName = document.getElementById('lName');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn')
const userData = document.getElementById('userData');


submitBtn.addEventListener('click', function submitFunc() {
  localStorage.setItem('fName', firstName.value);
  localStorage.setItem('lName', lastName.value);
  localStorage.setItem('email', email.value);
  window.location.href = 'userDetails.html';
});
