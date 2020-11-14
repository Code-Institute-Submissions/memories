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

/*------------------------Piano keys-----------------------*/
const C4Key = document.querySelector(".C4-key");
const Db4Key = document.querySelector(".Db4-key");
const D4Key = document.querySelector(".D4-key");
const Eb4Key = document.querySelector(".Eb4-key");
const E4Key = document.querySelector(".E4-key");
const F4Key = document.querySelector(".F4-key");
const Gb4Key = document.querySelector(".Gb4-key");
const G4Key = document.querySelector(".G4-key");
const Ab4Key = document.querySelector(".Ab4-key");
const A4Key = document.querySelector(".A4-key");
const Bb4Key = document.querySelector(".Bb4-key");
const B4Key = document.querySelector(".B4-key");
const C5Key = document.querySelector(".C5-key");
const Db5Key = document.querySelector(".Db5-key");
const D5Key = document.querySelector(".D5-key");
const Eb5Key = document.querySelector(".Eb5-key");
const E5Key = document.querySelector(".E5-key");

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

const playC4 = () => {
  playSound(C4);
  C4Key.classList.add("active");
  setTimeout(() => C4Key.classList.remove("active"), 200);
};
C4Key.addEventListener("click", playC4);

// Db4

const playDb4 = () => {
  playSound(Db4);
  Db4Key.classList.add("active");
  setTimeout(() => Db4Key.classList.remove("active"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4

const playD4 = () => {
  playSound(D4);
  D4Key.classList.add("active");
  setTimeout(() => D4Key.classList.remove("active"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4

const playEb4 = () => {
  playSound(Eb4);
  Eb4Key.classList.add("active");
  setTimeout(() => Eb4Key.classList.remove("active"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4

const playE4 = () => {
  playSound(E4);
  E4Key.classList.add("active");
  setTimeout(() => E4Key.classList.remove("active"), 200);
};
E4Key.addEventListener("click", playE4);

// F4

const playF4 = () => {
  playSound(F4);
  F4Key.classList.add("active");
  setTimeout(() => F4Key.classList.remove("active"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4

const playGb4 = () => {
  playSound(Gb4);
  Gb4Key.classList.add("active");
  setTimeout(() => Gb4Key.classList.remove("active"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4

const playG4 = () => {
  playSound(G4);
  G4Key.classList.add("active");
  setTimeout(() => G4Key.classList.remove("active"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4

const playAb4 = () => {
  playSound(Ab4);
  Ab4Key.classList.add("active");
  setTimeout(() => Ab4Key.classList.remove("active"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4

const playA4 = () => {
  playSound(A4);
  A4Key.classList.add("active");
  setTimeout(() => A4Key.classList.remove("active"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4

const playBb4 = () => {
  playSound(Bb4);
  Bb4Key.classList.add("active");
  setTimeout(() => Bb4Key.classList.remove("active"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4

const playB4 = () => {
  playSound(B4);
  B4Key.classList.add("active");
  setTimeout(() => B4Key.classList.remove("active"), 200);
};
B4Key.addEventListener("click", playB4);

// C5

const playC5 = () => {
  playSound(C5);
  C5Key.classList.add("active");
  setTimeout(() => C5Key.classList.remove("active"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5

const playDb5 = () => {
  playSound(Db5);
  Db5Key.classList.add("active");
  setTimeout(() => Db5Key.classList.remove("active"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5

const playD5 = () => {
  playSound(D5);
  D5Key.classList.add("active");
  setTimeout(() => D5Key.classList.remove("active"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5

const playEb5 = () => {
  playSound(Eb5);
  Eb5Key.classList.add("active");
  setTimeout(() => Eb5Key.classList.remove("active"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5

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




let order=[];
let playerOrder=[];
let flash
let turn;
let good;
let compTurn;
let intervalId;
let noise= true;
let on = false;
let win;


const playButton = document.querySelector("#play");
const tutorialButton = document.querySelector("#tutorial");


playButton.addEventListener("click",(event)=>{
    if (win=true){
        play();
    }
});
function play(){
    win=false;
    order=[];
    playOrder=[];
    flash = 0;
    intervalId=0;
    turn=1;
    good=true;
    for (var i=0; i<20; i++){
        order.push(Math.floor(Math.random()*17)+1);
    }
    console.log(order);

    compTurn=true;
    intervalId= setInterval(gameTurn, 800);
    
}
function gameTurn(){
    play=false;
    if (flash==turn){
        clearInterval(intervalId);
        campTurn=false;
        clearColor();
        play=true;
    }

    if(compTurn){
        clearColor();
        setTimeout(()=>{
            if(order[flash]==1) one();
            if(order[flash]==2) two();
            if(order[flash]==3) three();
            if(order[flash]==4) four();
            if(order[flash]==5) five();
            if(order[flash]==6) six();
            if(order[flash]==7) seven();
            if(order[flash]==8) eight();
            if(order[flash]==9) nine();
            if(order[flash]==10) ten();
            if(order[flash]==11) eleven();
            if(order[flash]==12) twelve();
            if(order[flash]==13) thirteen();
            if(order[flash]==14) fourteen();
            if(order[flash]==15) fifteen();
            if(order[flash]==16) sixteen();
            if(order[flash]==17) seventeen();
            flash++;
        },200);

    }
}
/*---------------------------buton functions--------------------*/
function one(){
    if (noise){playSound(C4);}
    noise=true;
    C4Key.style.backgroundColor="lightgrey";
}

function two(){
    if (noise){playSound(Db4);}
    noise=true;
    D4Key.style.backgroundColor="grey";
}
function three(){
    if (noise){playSound(D4);}
    noise=true;
    D4Key.style.backgroundColor="lightgrey";
}

function four(){
    if (noise){playSound(Eb4);}
    noise=true;
    Eb4Key.style.backgroundColor="grey";
}

function five(){
    if (noise){playSound(E4);}
    noise=true;
    E4Key.style.backgroundColor="lightgrey";
}

function six(){
    if (noise){playSound(F4);}
    noise=true;
    F4Key.style.backgroundColor="lightgrey";
}

function seven(){
    if (noise){playSound(Gb4);}
    noise=true;
    Gb4Key.style.backgroundColor="grey";
}

function eight(){
    if (noise){playSound(G4);}
    noise=true;
    G4Key.style.backgroundColor="lightgrey";
}

function nine(){
    if (noise){playSound(Ab4);}
    noise=true;
    Ab4Key.style.backgroundColor="grey";
}

function ten(){
    if (noise){playSound(A4);}
    noise=true;
    A4Key.style.backgroundColor="lightgrey";
}

function eleven(){
    if (noise){playSound(Bb4);}
    noise=true;
    Bb4Key.style.backgroundColor="grey";
}

function twelve(){
    if (noise){playSound(B4);}
    noise=true;
    B4Key.style.backgroundColor="lightgrey";
}

function thirteen(){
    if (noise){playSound(C5);
    }
    noise=true;
    C5Key.style.backgroundColor="lightgrey";
}

function fourteen(){
    if (noise){playSound(Db5);}
    noise=true;
    Db5Key.style.backgroundColor="grey";
}

function fifteen(){
    if (noise){playSound(D5);}
    noise=true;
    D5Key.style.backgroundColor="lightgrey";
}

function sixteen(){
    if (noise){playSound(Eb5);}
    noise=true;
    Eb5Key.style.backgroundColor="grey";
}

function seventeen(){
    if (noise){playSound(E5);}
    noise=true;
    E5Key.style.backgroundColor="lightgrey";
}




function clearColor(){
C4Key.style.backgroundColor="white";
Db4Key.style.backgroundColor="black";

D4Key.style.backgroundColor="white";

Eb4Key.style.backgroundColor="black";

E4Key.style.backgroundColor="white";

F4Key.style.backgroundColor="white";

Gb4Key.style.backgroundColor="black";

G4Key.style.backgroundColor="white";

Ab4Key.style.backgroundColor="black";

A4Key.style.backgroundColor="white";

Bb4Key.style.backgroundColor="black";

B4Key.style.backgroundColor="white";

C5Key.style.backgroundColor="white";

Db5Key.style.backgroundColor="black";

D5Key.style.backgroundColor="white";

Eb5Key.style.backgroundColor="black";

E5Key.style.backgroundColor="white";

}