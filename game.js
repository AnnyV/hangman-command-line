var inquirer = require('inquirer');
var Word = require('./Word');
var guesses = 8;
var newWord;

var words = ["scooby doo", "tom and jerry", "thundercats", "voltron", "transformers", "mighty mouse",
  "ren and stimpy", "donald duck", "animaniacs", "beetlejuice", "garfield", "inspector gadget",
  "smurfs", "gummi bears", "johnny quest", "the justice league", "batman", "super man", "south park",
  "looney tunes", "the jetsons", "the bugs bunny show", "the flinstones", "jem", "dragon ball z", "Silvester",
  "sam", "tazmanian demon", "porky", "twetty",
]

var randomWord = " ";


function getRandomWord() {
  randomWord = words[Math.floor(Math.random() * words.length)];
}

function guessLetter() {
  inquirer.prompt([{
    type: "input",
    name: "letter",
    message: "Guess a letter."
  }]).then(function(data) {
    if (newWord.newLetter(data.letter)) {
      newWord.guessedLetters.push(data.letter);
      var hits = newWord.checkIfLetterFound(data.letter);
      if (hits == 0) {
        guesses--;
      };
      if (guesses == 0) {
        console.log("sorry you loss");
        return;
      }
      var playerWon = newWord.didWeFindTheWord();
      process.stdout.write('\x1Bc')
      console.log(newWord.wordRender());

      if (playerWon === true) {
        console.log("you won");
        return;
      } else {
        console.log("Guessed Letters: " + newWord.guessedLetters);
        console.log("Guesses Remaining: " + guesses);
        console.log("keep going");
        guessLetter();

      }
    } else {
      console.log("You tried that letter already");
      guessLetter();

    }
  });
}
// ----------------program starts here-----------------

//get random word
getRandomWord();

//creating newWord object from Word constructor function
newWord = new Word(randomWord);

// executing the getLets function to populate the lets array 
newWord.getLets();

//display masked word using the wordRender function

process.stdout.write('\x1Bc')
console.log(newWord.wordRender());

//prompt user to guess letter
guessLetter();