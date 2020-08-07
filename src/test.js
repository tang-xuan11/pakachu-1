import string from "./css.js";


const player = {
  id: undefined,
  time: 50,
  n: 1,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  init: () => {
    player.ui.demo.innerHTML = string.substr(0, player.n);
    player.ui.demo2.innerText = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    document.querySelector("#btnPause").onclick = player.pause;
    document.querySelector("#btnPlay").onclick = () => {
      player.pause();
      player.play();
    };
    document.querySelector("#btnSlow").onclick = player.slow;
    document.querySelector("#btnNormal").onclick = player.normal;
    document.querySelector("#btnFast").onclick = player.fast;
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerHTML = string.substr(0, player.n);
    player.ui.demo2.innerText = string.substr(0, player.n);
    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};
player.init();
