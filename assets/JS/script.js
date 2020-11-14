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
    if (noise){let audio=document.querySelector(".C4-key");
    audio.play();}
    noise=true;
    C4Key.style.backgroundColor="lightgrey";
}

function two(){
    if (noise){let audio=document.querySelector(".Db4-key");
    audio.play();}
    noise=true;
    D4Key.style.backgroundColor="grey";
}
function three(){
    if (noise){let audio=document.querySelector(".D4-key");
    audio.play();}
    noise=true;
    D4Key.style.backgroundColor="lightgrey";
}

function four(){
    if (noise){let audio=document.querySelector(".Eb4-key");;
    audio.play();}
    noise=true;
    Eb4Key.style.backgroundColor="grey";
}

function five(){
    if (noise){let audio=document.querySelector(".E4-key");
    audio.play();}
    noise=true;
    E4Key.style.backgroundColor="lightgrey";
}

function six(){
    if (noise){let audio=document.querySelector(".F4-key");
audio.play();}
    noise=true;
    F4Key.style.backgroundColor="lightgrey";
}

function seven(){
    if (noise){let audio=document.querySelector(".Gb4-key");
    audio.play();
}
    noise=true;
    Gb4Key.style.backgroundColor="grey";
}

function eight(){
    if (noise){let audio=document.querySelector(".G4-key");
    audio.play();
}
    noise=true;
    G4Key.style.backgroundColor="lightgrey";
}

function nine(){
    if (noise){
        let audio=document.querySelector(".Ab4-key");
         audio.play();
    }
    noise=true;
    Ab4Key.style.backgroundColor="grey";
}

function ten(){
    if (noise){let audio=document.querySelector(".A4-key");
    audio.play();}
    noise=true;
    A4Key.style.backgroundColor="lightgrey";
}

function eleven(){
    if (noise){let audio=document.querySelector(".Bb4-key");
    audio.play();}
    noise=true;
    Bb4Key.style.backgroundColor="grey";
}

function twelve(){
    if (noise){let audio=document.querySelector(".B4-key");
    audio.play();}
    noise=true;
    B4Key.style.backgroundColor="lightgrey";
}

function thirteen(){
    if (noise){
        let audio=document.querySelector(".C5-key");
        audio.play();
    }
    noise=true;
    C5Key.style.backgroundColor="lightgrey";
}

function fourteen(){
    if (noise){let audio=document.querySelector(".Db5-key");
    audio.play();}
    noise=true;
    Db5Key.style.backgroundColor="grey";
}

function fifteen(){
    if (noise){let audio=document.querySelector(".D5-key");
    audio.play();}
    noise=true;
    D5Key.style.backgroundColor="lightgrey";
}

function sixteen(){
    if (noise){let audio=document.querySelector(".Eb5-key");
    audio.play();}
    noise=true;
    Eb5Key.style.backgroundColor="grey";
}

function seventeen(){
    if (noise){let audio=document.querySelector(".E5-key");
    audio.play();}
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