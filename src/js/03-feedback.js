const throttle = require('lodash.throttle');

// ___make variables

const emailInput = document.querySelector('input');

const messageInput = document.querySelector('textarea');

const form = document.querySelector('.feedback-form');

const KEYNAME_LOCAL_STORAGE = 'feedback-form-state';

const getLocStor = () => localStorage.getItem(KEYNAME_LOCAL_STORAGE);

let savedLocalSt = JSON.parse(getLocStor()) || {};

// __check LocStor and install textContent

setInputsValue();

function setInputsValue() {
  messageInput.value = savedLocalSt.message || '';
  emailInput.value = savedLocalSt.email || '';
}

// ___add e.listener

form.addEventListener('input', throttle(formCatchInput, 500));

function formCatchInput(e) {
  // __add textContent to object
  savedLocalSt[e.target.name] = e.target.value;
  // __transform obj to string
  const jsonNewLocalStorage = JSON.stringify(savedLocalSt);
  // __transform obj to string
  localStorage.setItem(KEYNAME_LOCAL_STORAGE, jsonNewLocalStorage);
  console.log(getLocStor());
}

// __make submit

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  // getting object
  console.log(JSON.parse(getLocStor()));
  // clearing locStor
  localStorage.removeItem(KEYNAME_LOCAL_STORAGE);
  // clearing object
  savedLocalSt = {};
  // reset form
  e.target.reset();
}
