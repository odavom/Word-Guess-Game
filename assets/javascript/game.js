let guessedLetters = [];
let correctLetters = [];
let userWins = 0;
let remainingGuesses = 10;
let names = ['dante', 'virgil', 'beatrice', 'charon', 'minos', 'cerberus', 'plutus', 'phleygas', 'geryon', 'malebranche', 'malacoda', 'alichino', 'calcabrina', 'cagnazzo', 'libiocco', 'barbariccia', 'draghignazzo', 'circiatto','farfarello', 'rubicante', 'graffiacane', 'nimrod', 'briareus', 'ephialtes', 'antaneus', 'homer', 'horace', 'ovid', 'electra', 'hector', 'aeneas', 'camilla', 'lavinia', 'julia', 'marcia', 'cornelia', 'saladin', 'socrates', 'plato', 'aristotle', 'averroes', 'orpheus', 'linus', 'euclid', 'semiramis', 'cleopatra', 'helen', 'achilles', 'tristan', 'dido', 'ciacco', 'pasiphae', 'nessus', 'chiron', 'capaneus', 'jason', 'caiaphas', 'ulysses', 'diomedes', 'mohammed', 'myrrha','judas'];
let randomName = ' ' 

document.getElementById('userWinsSpan').textContent = userWins
document.getElementById('remainingGuessesSpan').textContent = remainingGuesses
document.getElementById('currentName').textContent = randomName

function hiddenName() {
    randomName = names[Math.floor(Math.random() * names.length)];
    for (i = 0; i < randomName.length; i++) {
        correctLetters[i] = '__'
    }
    document.getElementById('currentName').textContent = correctLetters.join(' ');
}
hiddenName();

document.onkeyup = function(event) {
    let userGuess = event.key.toLowerCase();
}