const throttle = require('lodash.throttle');

// ___make variables

const emailInput = document.querySelector('input');

const messageInput = document.querySelector('textarea');

const form = document.querySelector('.feedback-form');

const nameLocalStorage = 'feedback-form-state';

let savedLocalSt = localStorage.getItem(nameLocalStorage);

// __check LocStor and install textContent

checkLocalStorrage();

function checkLocalStorrage() {
  if (savedLocalSt !== null) {
    savedLocalSt = JSON.parse(savedLocalSt);

    messageInput.value = savedLocalSt.message;

    emailInput.value = savedLocalSt.email;
  } else {
    savedLocalSt = {};
    messageInput.value = '';
    emailInput.value = '';
  }
}

// ___add e.listeners

emailInput.addEventListener(
  'input',
  throttle(e => {
    // __add textContent to object
    savedLocalSt.email = e.currentTarget.value;
    // __transform obj to string
    const jsonNewLocalStorage = JSON.stringify(savedLocalSt);
    // __save string to locStor
    localStorage.setItem(nameLocalStorage, jsonNewLocalStorage);
  }, 500)
);

messageInput.addEventListener(
  'input',
  throttle(e => {
    savedLocalSt.message = e.currentTarget.value;

    const jsonNewLocalStorage = JSON.stringify(savedLocalSt);

    localStorage.setItem(nameLocalStorage, jsonNewLocalStorage);
  }, 500)
);

// __make submit

form.addEventListener('submit', formClick);

function formClick(e) {
  e.preventDefault();

  console.log(savedLocalSt);

  localStorage.removeItem(nameLocalStorage);
  e.currentTarget.reset();
}
