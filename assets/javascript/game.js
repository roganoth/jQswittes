var wrongGuessText = document.getElementById("#guessbox");
var blankLetters = document.getElementById("#guessbox");

wordBank = ["PARADIGM","ALLOY","MINE","CRAFT","EVOLUTION","CLEAVER"]
var tryAgain = Math.floor(Math.random()*wordBank.length);
console.log(wordBank[tryAgain]);
var wrongGuess = [];

function newWord() {
    var tryAgain = Math.floor(Math.random()*wordBank.length);
    console.log(wordBank[tryAgain]);
    blankLetters.textContent = "_ " * tryAgain.length;
     
}

document.onkeyup = function(event){
    var userGuess = event.key;
    var upperUserGuess = userGuess.toUpperCase();
    console.log(userGuess);

    if(wordBank[tryAgain].includes(upperUserGuess)) {
        console.log(upperUserGuess);
    }

    else {
        wrongGuess.push(upperUserGuess);
        wrongGuessText.textContent = "You've tried these letter: " + wrongGuess;

    }
}
