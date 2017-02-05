// array of possbile words to guess (classic games / characters)
var words = ["castlevania", "mario", "megaman", "sonic", "tetris"];

// store input key from users keyboard
var userInputKey;

// store past input key values
var inputKeyHistory = "";

//value used to keep track of remaining guess on the current word
var remainingGuesses = 6;

//hold the value of how many word guesses they got right
var wins = sessionStorage.getItem('wins');

//get the index of the letter input within the word
var indexOfLetter;
var lastIndexOfLetter;

//random number generator to get the word from the array
var getWord = Math.floor(Math.random() * 5);

// var data = 
console.log(wins)


// get the word from the array the user has to guess
var currentWord = words[getWord];

// array to hold user input guesses to build the full "getword"
var wordGuess = [];

// output random chosen word
console.log(currentWord);

// for(var i = 0; i != currentWord.length; i++){
// 	wordGuess[i] = wordGuess.fill("_");
// }

console.log(wordGuess);

// get user input from keyboard - store in a var - user another var to keep track of previous input
document.onkeyup = function(event) {
	userInputKey = event.key;
	console.log(userInputKey);

	inputKeyHistory = (inputKeyHistory + " " + userInputKey).toUpperCase();
	// inputKeyHistory = inputKeyHistory.toUpperCase();
	console.log(inputKeyHistory);

	// if the letter is present in the word - give me the index of that letter
	if(currentWord.includes(userInputKey)) {

		indexOfLetter = currentWord.indexOf(userInputKey);
		lastIndexOfLetter = currentWord.lastIndexOf(userInputKey);

		console.log(indexOfLetter);

		wordGuess[indexOfLetter] = userInputKey;
		wordGuess[lastIndexOfLetter] = userInputKey;

		console.log(wordGuess);
	} else {
		//if the letter is not in the word remove 1 from remaining guesse

		remainingGuesses--;
		console.log(remainingGuesses);

		if(remainingGuesses === 0) {
			alert("Game Over!");
			location.reload();
		}
	}


	var current = document.getElementById("current-word");
	var myGuess = wordGuess.join("");
	current.innerHTML = myGuess;

	var guess = document.getElementById("guessed-letters");
	guess.innerHTML = inputKeyHistory;

	var remaining = document.getElementById("remaining-guesses");
	remaining.innerHTML = remainingGuesses;

	var it = document.getElementById("display-wins");
	it.innerHTML = wins;

	// if the word chosen matches the user guess input they win
	if(myGuess == currentWord){
		alert("You Win!");
		wins++;
		// console.log(wins);
		sessionStorage.setItem('wins', wins);
		location.reload();
	}


} //End Function onkeyup

	

		//loops thorough and finds all occurances of that letter and pushes to array (may need to set this as function and return array)
		// var wordGuess = [];
		// for(var i=0; i<currentWord.length;i++) {
		//     if (currentWord[i] == userInputKey) {
		//     	wordGuess.push(i);
		//     }
		// }


		// var finalOutput = [];
		// for(var i=0; i<wordGuess.length; i++){
		// 	g = wordGuess[i];
		// 	finalOutput[g] = userInputKey;
		// }

		// console.log(wordGuess);
		// console.log(g);
		// console.log(finalOutput);



