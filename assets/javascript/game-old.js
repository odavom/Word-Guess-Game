let guessedLetters = [];//characters user pressed
let correctLetters = [];//corect answers
let userWins = 0;
let remainingGuesses = 10;
let names = ['dante', 'virgil', 'beatrice', 'charon', 'minos', 'cerberus', 'plutus', 'phleygas', 'geryon', 'malebranche', 'malacoda', 'alichino', 'calcabrina', 'cagnazzo', 'libiocco', 'barbariccia', 'draghignazzo', 'circiatto','farfarello', 'rubicante', 'graffiacane', 'nimrod', 'briareus', 'ephialtes', 'antaneus', 'homer', 'horace', 'ovid', 'electra', 'hector', 'aeneas', 'camilla', 'lavinia', 'julia', 'marcia', 'cornelia', 'saladin', 'socrates', 'plato', 'aristotle', 'averroes', 'orpheus', 'linus', 'euclid', 'semiramis', 'cleopatra', 'helen', 'achilles', 'tristan', 'dido', 'ciacco', 'pasiphae', 'nessus', 'chiron', 'capaneus', 'jason', 'caiaphas', 'ulysses', 'diomedes', 'mohammed', 'myrrha','judas'];
let randomName = names[Math.floor(Math.random() * names.length)];

console.log(randomName)

// this puts the value(s), set above, into the html doc
document.getElementById('userWinsSpan').innerHTML = userWins
document.getElementById('remainingGuessesSpan').innerHTML = remainingGuesses
document.getElementById('currentName').innerHTML = randomName

/* the function hiddenName takes the randomName value and puts it in the correctLetters array in the form of _ , for the total length of the randomName */
function hiddenName() {
   for (i = 0; i < randomName.length; i++) {
       correctLetters[i] = '_';
   }
   console.log(correctLetters)  

// this puts the value of correct letters in the html doc 
   document.getElementById('currentName').innerHTML = correctLetters.join(' ');
}

/* t*/
document.onkeyup = function(event) {
    let userGuess = event.key.toLowerCase();
    if(remainingGuesses != 0){
    if (guessedLetters.includes(userGuess) != true){
    guessedLetters.push(userGuess);
    remainingGuesses--;
    document.getElementById('usedLettersSpan').innerHTML = guessedLetters;
    console.log("userGuess:"+userGuess);
    console.log("Guesses Left:"+remainingGuesses);
    document.getElementById('remainingGuessesSpan').innerHTML = remainingGuesses;
    checkLetter(userGuess);
    } else {
        alert("you already guessed")
    }
}else {
    alert ("GAme over");
    newGame();
}

}
/*then function checkLetter with the parameter of user guess. is put in a for loop to check it against the randomNames and if the user guess is equal in value and type to the randomNames correct letters is revealed in the html*/
function checkLetter(userGuess) {
   
    for (i = 0; i < randomName.length; i++) {
        if (userGuess === randomName[i]) {
            correctLetters[i] = userGuess;
            console.log(randomName)
            console.log(correctLetters.join(' '))
            console.log(correctLetters.join(' ') == randomName)
        }
    }
        
    document.getElementById('currentName').innerHTML = correctLetters.join(' ')
}
hiddenName();
checkLetter();
function newGame(){
    //reset var;
    //hiddengame &checkLetter
}

