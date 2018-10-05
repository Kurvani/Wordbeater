window.addEventListener("load", init);

//Global Variables

//We're doing "let" because time is going to change. Const is for variables that we're not going to reassign
let time = 5;
let score = 0;
//Not setting isPlaying, we're jsut initializing it
let isPlaying;

//Dom Element Variables
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

//Words Array
const words = [
  "daylights",
  "burning",
  "jeskai",
  "azorius",
  "mana",
  "gnomeregan",
  "paladin",
  "wizard",
  "weeb",
  "traversy",
  "izzet",
  "magic",
  "javascript"
];

//an init function Initialize game
function init() {
  console.log("init");
}
