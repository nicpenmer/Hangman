console.log("success!!");

var letter = require("./letter.js");

const wordList = ["astronaut", "space", "star", "rocket", "orbit", "supernova",
"moon", "planet", "asteroid", "galaxy", "universe", "black hole"];


////////

// This will be the number of blanks we show based on the solution

var word = function (){
    console.log("game on! guess the word!");
}
word();
module.exports = wordList; 
