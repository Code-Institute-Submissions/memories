var C4 = new Audio("assets/sounds/C4.mp3");
var Db4 = new Audio("assets/sounds/Db4.mp3");
var D4 = new Audio("assets/sounds/D4.mp3");
var  Eb4 = new Audio("assets/sounds/Eb4.mp3");
var E4 = new Audio("assets/sounds/E4.mp3");
var F4 = new Audio("assets/sounds/F4.mp3");
var Gb4 = new Audio("assets/sounds/Gb4.mp3");
var G4 = new Audio("assets/sounds/G4.mp3");
var Ab4 = new Audio("assets/sounds/Ab4.mp3");
var A4 = new Audio("assets/sounds/A4.mp3");
var Bb4 = new Audio("assets/sounds/Bb4.mp3");
var B4 = new Audio("assets/sounds/B4.mp3");
var C5 = new Audio("assets/sounds/C5.mp3");
var Db5 = new Audio("assets/sounds/Db5.mp3");
var D5 = new Audio("assets/sounds/D5.mp3");
var Eb5 = new Audio("assets/sounds/Eb5.mp3");
var E5 = new Audio("assets/sounds/E5.mp3");




var playSound = audio => {
  var clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

// C4
const C4Key = document.querySelector(".C4-key");
const playC4 = () => {
  playSound(C4);
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
  playSound(Db4);
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
  playSound(D4);
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
  playSound(Eb4);
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
  playSound(F4);
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  playSound(Gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
  playSound(G4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
  playSound(Ab4);
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
  playSound(A4);
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
  playSound(Bb4);
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
  playSound(B4);
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
  playSound(C5);
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
  playSound(Db5);
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
  playSound(D5);
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
  playSound(Eb5);
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
  playSound(E5);
  E5Key.classList.add("active");
  setTimeout(() => E5Key.classList.remove("active"), 200);
};
E5Key.addEventListener("click", playE5);

window.addEventListener("keydown", ({ keyCode }) => {
  // Press A
  if (keyCode === 65) return playC4();

  // Press W
  if (keyCode === 87) return playDb4();

  // Press S
  if (keyCode === 83) return playD4();

  // Press E
  if (keyCode === 69) return playEb4();

  // Press D
  if (keyCode === 68) return playE4();

  // Press F
  if (keyCode === 70) return playF4();

  // Press T
  if (keyCode === 84) return playGb4();

  // Press G
  if (keyCode === 71) return playG4();

  // Press Y
  if (keyCode === 89) return playAb4();

  // Press H
  if (keyCode === 72) return playA4();

  // Press U
  if (keyCode === 85) return playBb4();

  // Press J
  if (keyCode === 74) return playB4();

  // Press K
  if (keyCode === 75) return playC5();

  // Press O
  if (keyCode === 79) return playDb5();

  // Press L
  if (keyCode === 76) return playD5();

  // Press P 
  if (keyCode === 80) return playEb5();

  // Press ;
  if (keyCode === 186) return playE5();
}); 


 


var background_music,mutebtn,unmutebtn;
function initAudioPlayer(){
    background_music= new Audio();
    background_music.src = "assets/sounds/background_music.mp3";
    background_music.loop=true;
    background_music.play();

    mutebtn= document.getElementById("mute");
    unmutebtn= document.getElementById("unmute");

    mutebtn.addEventListener("click",mute);
    unmutebtn.addEventListener("click",unmute);
   
    function mute(){
        background_music.muted=true}
    function unmute(){
        background_music.muted=false}
}
window.addEventListener("load", initAudioPlayer);