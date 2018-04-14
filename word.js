console.log("success!!");

var letter = require("./letter.js");

const wordList = ["astronaut", "space", "star", "rocket", "orbit", "supernova",
"moon", "planet", "asteroid", "galaxy", "universe", "black hole", "exploration"];


var numBlanks = 0;

function word(){
/// Ths chooses a random word from the word list
var chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
/// gives the number of blanks 
numBlanks = lettersInChosenWord.length;


}
////////


var word = function (){
    console.log("game on! guess the word!");
}
word();
module.exports = word; 
