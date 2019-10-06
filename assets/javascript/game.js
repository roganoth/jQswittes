var wrongGuessText = document.getElementById("#wrong");
var blankLetters = document.getElementById("#guessbox");

var wordBank = ["PARADIGM","ALLOY","MINE","CRAFT","EVOLUTION","CLEAVER"]
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
        for(i = 0; i < wordBank[tryAgain].length; i ++);
        if (upperUserGuess === wordBank[i]) {
            blankLetters.textContent = upperUserGuess;
        }
    }

    else {
        wrongGuess.push(upperUserGuess);
        console.log(wrongGuess);
        // create a for loop and include and index for finding wrongGuess
        wrongGuessText.textContent = "You've tried these letter: " + wrongGuess[];

    }
}
