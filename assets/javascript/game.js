//variable declaration
var words; //array of possbile words to guess (classic games / characters)
var inputKeyHistory; //array to store past input key values
var wordGuess; //array to hold user input guesses to build the full "getword"
var remainingGuesses; //value used to keep track of remaining guess on the current word
var wins; //hold the value of how many word guesses they got right
var getWord; //random number generator to get the word from the array
var currentWord; //get the word from the array the user has to guess
var invalidKeys; //array of invalid keys for input
var modal; //hold modal html element
var span; //hold span element in modal to close modal

function init() {
	//initialize the game variables
	words = ["castlevania", "mario", "megaman", "sonic", "tetris"];
	inputKeyHistory = [];
	wordGuess = [];
	remainingGuesses = 10;
	wins = sessionStorage.getItem('wins') || 0;
	getWord = Math.floor(Math.random() * words.length);
	currentWord = words[getWord];
	invalidKeys = ["Control", "Alt", "Meta", "Shift", "Enter"];

	//fill array with underscores to show in current word section
	for (var i = 0; i < currentWord.length; i++) {
		wordGuess[i] = "_ ";
	}

	updateDisplay(); //update display with initialized values
} //END init()

function updateDisplay() {
	document.getElementById("display-wins").innerHTML = wins; //diplay wins on page load
	document.getElementById("guess").innerHTML = wordGuess.join(" "); //display current wordGuess array (create a string)
	document.getElementById("remaining-guesses").innerHTML = remainingGuesses; //display remainingGuesses on page load
	document.getElementById("guessed-letters").innerHTML = inputKeyHistory.join(" ").toUpperCase(); //display inputKeyHistory array
}//END updateDisplay()

function validateUserInput(input) {
	if (invalidKeys.indexOf(input) <= -1) {
		//if we have a valid key continue game
		if (inputKeyHistory.indexOf(input) <= -1) {
			//if the input key is not in the history push to inputKeyHistory
			inputKeyHistory.push(input);
			if (currentWord.includes(input)) {
				//if the input key is in the word update the wordGuess with the input key for all instances @ the specific index
				for (var i = 0; i < currentWord.length; i++) {
					if (input == currentWord[i]) {
						//if we find an occurance of the letter then populate guess arry with that letter at that index
						wordGuess[i] = currentWord[i];
					}	
				}	
			} else {
				//if the input key is not in the word decrement remainingGuesses count
				remainingGuesses--;
			}

			updateDisplay(); //update the values displayed on the screen

			if (remainingGuesses <= 0) {
				//alerts user if they run out of guesses and reload the page
				displayModal("Game Over - you have run out of guesses."); //call displayModal to pass the message we want in the modal popup
			}

			if (wordGuess.join("") == currentWord) {
				//if the wordGuess array (converted to string) equals the current word alert user they win, increment wins var, store the wins var, reload page
				displayModal("You Win!"); //call displayModal to pass the message we want in the modal popup
				wins++
				sessionStorage.setItem('wins', wins);			
			}

		} else {
			//alert user the key they pushed has already been guessed
			alert("You have already guessed that letter.");
		}
	}
}//END validateUserInput

function resetGame() {
	//when the reset button is clicked clear wins from session storage and reinitialize variables
	sessionStorage.clear();
	init();
}//END resetGame - this will clear wins session variable and initialize variables to default

function displayModal(msg) {
	//used to get modal and display modal with specific message passed in
	modal = document.getElementById('myModal');
	span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	document.getElementById("error").innerHTML = msg;
	span.onclick = function() {
		modal.style.display = "none";
		init();
	}
}

document.onkeyup = function(event) {
	//determine if the users input is valid
	validateUserInput(event.key);
}//END onkeyup

window.onload = function() {
	// when page loads call init and set onclick event for reset-button - variables will be initialized
	init();
	document.getElementById("reset-button").onclick = resetGame; //When reset button is clicked call resetGame function
};