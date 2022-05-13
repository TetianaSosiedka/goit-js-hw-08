import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const refs = {
  iframe: document.querySelector('#vimeo-player'),
};
const player = new Player(refs.iframe);

//getting and adding stop-time in local Storage
const onTimeUpate = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.on('timeupdate', throttle(onTimeUpate, 1000));

//run since last view
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
