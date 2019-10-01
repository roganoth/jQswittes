var wordBank = ["PARADIGM","ALLOY","MINE","CRAFT","EVOLUTION","CLEAVER"]


function newWord() {
    var tryAgain = Math.floor(Math.random()*wordBank.length);
    console.log(tryAgain);
    div.getElementById(guesses).innerHTML = wordBank[tryAgain];
     
}

