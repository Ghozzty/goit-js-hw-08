// __join lib
import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

// ___make variables

const idIframe = document.querySelector('#vimeo-player');

const keyName = 'videoplayer-current-time';

let currentTime = localStorage.getItem(keyName);

// ___declaration vimeo and install currentTime

const player = new Player(idIframe);

player.setCurrentTime(currentTime);

// ___add event timeupdate and save to locStor

player.on(
  'timeupdate',
  throttle(e => {
    const timeEvent = e.seconds;

    localStorage.setItem(keyName, timeEvent);
  }, 1000)
);
