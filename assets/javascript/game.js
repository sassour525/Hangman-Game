//variable declaration
var words;
var inputKeyHistory;
var wordGuess;
var remainingGuesses;
var wins;
var getWord;
var currentWord;
var invalidKeys;

function init() {
	words = ["castlevania", "mario", "megaman", "sonic", "tetris"];
	inputKeyHistory = [];
	wordGuess = [];
	remainingGuesses = 10;
	wins = sessionStorage.getItem('wins') || 0;
	getWord = Math.floor(Math.random() * words.length);
	currentWord = words[getWord];
	invalidKeys = ["Control", "Alt", "Meta", "Shift"];

	for (var i = 0; i < currentWord.length; i++) {
		wordGuess[i] = "_ ";
	}

	updateDisplay();
} //END init()

function updateDisplay() {
	document.getElementById("display-wins").innerHTML = wins;
	document.getElementById("guess").innerHTML = wordGuess.join(" ");
	document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
	document.getElementById("guessed-letters").innerHTML = inputKeyHistory.join(" ").toUpperCase();
}//END updateDisplay()

function validateUserInput(input) {
	if (invalidKeys.indexOf(input) <= -1) {
		if (inputKeyHistory.indexOf(input) <= -1) {
			inputKeyHistory.push(input);
			if (currentWord.includes(input)) {
				for (var i = 0; i < currentWord.length; i++) {
					if (input == currentWord[i]) {
						wordGuess[i] = currentWord[i];
					}	
				}	
			} else {
				remainingGuesses--;
			}

			updateDisplay();

			if (remainingGuesses <= 0) {
				alert("Game Over");
				location.reload();
			}

		} else {
			alert("You have already guessed that letter.");
		}
	}
}//END validateUserInput

document.onkeyup = function(event) {
	validateUserInput(event.key);
}//END onkeyup

window.onload = init;