var Word = require ("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");
var prompt = require('prompt');


console.log("success.")


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
var gamerOver = false;

///guess the word "start game"
function startGame(){
    
    console.log("Guess the word.");
    //set number of guesses
    numGuesses = 9; 
    // *reset* the guess and success array at each round.
    blanksAndSuccesses = [];
    // *reset* the wrong guesses from the previous round.
    wrongGuesses = [];
    // Fill up the blanksAndSuccesses list with appropriate number of blanks.
    // This is based on number of letters in solution.
    for (var i = 0; i < numBlanks; i++) {
      blanksAndSuccesses.push("_");
    }
    if (numGuesses > 0){
      
    }
}

function userGuess(){
	if(numGuesses > 0 && !gameOver){

		// Display the correctly guessed letters
    console.log(chosenWord.word());
    //uses inquirer to promot a guess. 
		inquirer.prompt([
			{
				type: "input",
				name: "guess",
				message: "Guess a letter!",

				// only accept 1 character responses
				validate: function(value){
					return value.length === 1;
				}
			}
		]).then(user => {
			// Check if the user's guess reveals any hidden letters
			if(chosenWord.userGuess(user.guess) === true){
				console.log("correct.");

			}else {
				console.log("incorrect.");
				numGuesses--;
				console.log("Guesses left: " + numGuesses );
			}

			//  prompt the player to guess again
			userGuess();
		});


///prompts new game
function promptNewGame(){
  console.log("Would you like to play again?");
  console.log("Yes? or No?")
  if ("Yes" || "y") {
    startGame();
  }else ("Perhaps another time.");
}

//calls the start game and prompt new game functions
startGame();
promptNewGame();


