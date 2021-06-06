"use strict";
console.log("js ok");
function sound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  audio.currentTime = 0;
  key.classList.add("soundOn");
  audio.play();
}
function removeClass(ev) {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => key.classList.remove("soundOn"));
}

const audios = document.querySelectorAll(".audio");
audios.forEach((audio) => audio.addEventListener("ended", removeClass));
window.addEventListener("keydown", sound);
