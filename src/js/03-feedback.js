var throttle = require('lodash.throttle');

// ___
const emailInput = document.querySelector('input');

const messageInput = document.querySelector('textarea');

const form = document.querySelector('.feedback-form');

const nameLocalStorage = 'feedback-form-state';

let savedLocalSt = localStorage.getItem(nameLocalStorage);

console.log(JSON.parse(savedLocalSt));
// __функция устанавливает значение полей

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

// ___добавляем слушателей и функции

emailInput.addEventListener('input', e => {
  // ловим собитие и записываем в обьект
  savedLocalSt.email = e.currentTarget.value;
  // превращаем обьект в строку
  const jsonNewLocalStorage = JSON.stringify(savedLocalSt);
  // пишем обьект в лок стор
  localStorage.setItem(nameLocalStorage, jsonNewLocalStorage);
  // логируем
  console.log(localStorage.getItem(nameLocalStorage));
});

messageInput.addEventListener('input', e => {
  savedLocalSt.message = e.currentTarget.value;

  const jsonNewLocalStorage = JSON.stringify(savedLocalSt);

  // пишем обьект в лок стор
  localStorage.setItem(nameLocalStorage, jsonNewLocalStorage);
  // логируем
  console.log(localStorage.getItem(nameLocalStorage));
});

// 3 task

form.addEventListener('submit', formClick);

function formClick(e) {
  e.preventDefault();

  console.log(savedLocalSt);

  localStorage.removeItem(nameLocalStorage);
  e.currentTarget.reset();
}

// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
