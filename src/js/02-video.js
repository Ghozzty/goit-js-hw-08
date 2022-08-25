import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

// ___

const idIframe = document.querySelector('#vimeo-player');

const keyName = 'videoplayer-current-time';

let currentTime = localStorage.getItem(keyName);

// ___

const player = new Player(idIframe);

player.setCurrentTime(currentTime);

// ___

player.on('timeupdate', catchTime);

function catchTime(e) {
  const timeEvent = e.seconds;

  localStorage.setItem(keyName, timeEvent);

  // console.log(currentTime);
}

// ___

document.addEventListener(
  'click',
  throttle(() => {
    console.log('click');
  }, 1300)
);
