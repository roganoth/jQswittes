var wordBank = ["PARADIGM","ALLOY","MINE","CRAFT","EVOLUTION","CLEAVER"]


function newWord() {
    var tryAgain = Math.floor(Math.random()*wordBank.length);
    console.log(tryAgain);
    console.log(wordBank[tryAgain]);
     
}

document.onkeyup = function(event){
    var userGuess = event.key;
    console.log(userGuess);
    document.getElementById("#guessbox").innerHTML("userGuess");

}

