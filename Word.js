var Letter = require('./Letter.js');

var Word = function(wrd){
    this.word = wrd;
    this.lets = []; //letter objects
    this.found = false;
    this.guessedLetters = [];

    this.newLetter = function(let){

    if (this.guessedLetters.indexOf(let) < 0) {
        //letter was not guessed yet. continue process
        return true
    } else {
        //the letter was guessed alredy
        return false
    }   
    };

    this.getLets = function() {
        for(var i = 0; i < this.word.length; i++) {
            this.lets.push(new Letter(this.word[i]));
        }
    };
    
    //found the current word
    this.didWeFindTheWord = function() {
        //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
        this.found = this.lets.every(function(curLet) {
            return curLet.appear;
        });

        return this.found;
    };

    this.checkIfLetterFound = function(guessLetter) {
        var whatToReturn = 0;

        for(var i = 0; i < this.lets.length; i++) {
            if (this.lets[i].charac == guessLetter){
                this.lets[i].appear = true;
                whatToReturn++;
            }
        }

        return whatToReturn;
    };

    this.wordRender = function() {
        var str = '';

        for(var i=0; i < this.lets.length; i++){
            str += this.lets[i].letterRender();
        }

        return str;
    };
}

module.exports = Word;