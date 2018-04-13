var Word = require ("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");
var prompt = require('prompt');


console.log("success.")


var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];
// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;
// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];

///guess the word "start game"
function startGame(){
    console.log("Guess the word.");
    //set number of guesses
    numGuesses = 9; 
    //pick a random word from list
    var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
    // We count the number of letters in the word.
    numBlanks = lettersInChosenWord.length;
    // We print the solution in console (for testing).
    console.log(chosenWord);
    // CRITICAL LINE - Here we *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
}

///
function promptNewGame(){
  console.log("Would you like to play again?");
  prompt
}
startGame();
promptNewGame();


