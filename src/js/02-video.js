// __join lib
import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

// ___make variables

const idIframe = document.querySelector('#vimeo-player');

const KEYNAME_LOCAL_STORAGE = 'videoplayer-current-time';
// __check locStor
let currentTime = localStorage.getItem(KEYNAME_LOCAL_STORAGE) || 0;
console.log('startTime', currentTime);

// ___declaration vimeo and install currentTime

const player = new Player(idIframe);

player.setCurrentTime(currentTime);

// ___add event timeupdate and save to locStor

player.on('timeupdate', throttle(trackingCurrentTime, 1000));

function trackingCurrentTime(e) {
  const timeEvent = e.seconds;

  localStorage.setItem(KEYNAME_LOCAL_STORAGE, timeEvent);
}
