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

//an init function/ Initialize game
function init() {
  // Load word from array
  showWord(words);
  //Call countdown every second
  //To do this we set an interval to repeat every 1 second, we use 1000 miliseconds to do this w/ JS
  setInterval(countdown, 1000);
  //Function to check Game status
  setInterval(checkStatus, 50);
}

// Pick & show random word from array
function showWord(words) {
  //a variable to grab a number math.foor to round down, math.random to RNG, words.length for length of words array
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  //We initialized currentWord at start of JS file and use innerHTML to grab value from html h2
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer function
function countdown() {
  // Make sure time is not running out
  if (time > 0) {
    // Decrement time
    time--;
  } else if (time === 0) {
    // Game is over because timer hit 0
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

//Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
  }
}
