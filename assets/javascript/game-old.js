let guessedLetters = [];//characters user pressed
let correctLetters = [];//corect answers
let userWins = 0;
let remainingGuesses = 10;
let names = ['dante', 'virgil', 'beatrice', 'charon', 'minos', 'cerberus', 'plutus', 'phleygas', 'geryon', 'malebranche', 'malacoda', 'alichino', 'calcabrina', 'cagnazzo', 'libiocco', 'barbariccia', 'draghignazzo', 'circiatto','farfarello', 'rubicante', 'graffiacane', 'nimrod', 'briareus', 'ephialtes', 'antaneus', 'homer', 'horace', 'ovid', 'electra', 'hector', 'aeneas', 'camilla', 'lavinia', 'julia', 'marcia', 'cornelia', 'saladin', 'socrates', 'plato', 'aristotle', 'averroes', 'orpheus', 'linus', 'euclid', 'semiramis', 'cleopatra', 'helen', 'achilles', 'tristan', 'dido', 'ciacco', 'pasiphae', 'nessus', 'chiron', 'capaneus', 'jason', 'caiaphas', 'ulysses', 'diomedes', 'mohammed', 'myrrha','judas'];
let randomName = ' ' 

// this puts the value(s), set above, into the html doc
document.getElementById('userWinsSpan').textContent = userWins
document.getElementById('remainingGuessesSpan').textContent = remainingGuesses
document.getElementById('currentName').textContent = randomName

/* the function hiddenName takes the randomName value and puts it in the correctLetters array in the form of _ , for the total length of the randomName */
function hiddenName() {
    randomName = names[Math.floor(Math.random() * names.length)];
    console.log(randomName)
   for (i = 0; i < randomName.length; i++) {
       correctLetters[i] = '_';
   }
   console.log(correctLetters)  

// this puts the value of correct letters in the html doc 
   document.getElementById('currentName').textContent = correctLetters.join(' ');
}

/* this creates a function event where the key pressed is stored in the userGuess as lower case. If the remaining guesses does not equal 0. And if guessedLetters including the userGuess does not equal true then put the userGuess to used letters. And remaining guesses is decreased. */
document.onkeyup = function(event) {
    let userGuess = event.key.toLowerCase();
    if (remainingGuesses != 0) {
        //if block to check if userGuess is a letter
        if (userGuess.length > 1) {
            alert("you didn't press a letter. Instead you pressed " + userGuess)
        } else {  
            if (guessedLetters.includes(userGuess) != true){
                guessedLetters.push(userGuess);
                remainingGuesses--;
                document.getElementById('usedLettersSpan').textContent = guessedLetters;
                console.log("userGuess:"+userGuess);
                console.log("Guesses Left:"+remainingGuesses);
                document.getElementById('remainingGuessesSpan').textContent = remainingGuesses;
                checkLetter(userGuess);
            } else {
                alert("letter already used")
            }
        } 
    } else {
        alert ("GAme over");
        //hiddenName();
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
        
    document.getElementById('currentName').textContent = correctLetters.join(' ')
}
hiddenName();
// checkLetter();
function newGame(){
    

    //reset var;
    //hiddengame &checkLetter
    //new game if 
}