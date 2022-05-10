import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player(refs.iframe);
const refs = {
  iframe: document.querySelector('#vimeo-player'),
};

//getting and adding stop-time in local Storage
const onTimeupdate = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

//run since last view
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
