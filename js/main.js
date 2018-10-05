window.addEventListener("load", init);

//Global Variables

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// Variable to change level
const currentLevel = levels.medium;

//We're doing "let" because time is going to change. Const is for variables that we're not going to reassign
let time = currentLevel;
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
  // Show number of seconds in UI by take innerHTML value of seconds and setting it to currentLevel
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  //Start matching on word input
  wordInput.addEventListener("input", startMatch);
  //Call countdown every second
  //To do this we set an interval to repeat every 1 second, we use 1000 miliseconds to do this w/ JS
  setInterval(countdown, 1000);
  //Function to check Game status
  setInterval(checkStatus, 50);
}

// Start Match Function
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  //if score is -1 (game reset), display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  // To see if they match we have to get the value of the variable and compare it to the value of currentWord which is in the html input
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
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
    //when you lose reset the score to -1 so the next word that starts the game doens't count as a freebie
    score = -1;
  }
}
