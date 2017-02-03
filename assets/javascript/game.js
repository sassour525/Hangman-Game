// array of possbile words to guess (classic games / characters)
var words = ["castlevania", "mario", "megaman", "sonic", "tetris"];

// store input key from users keyboard
var userInputKey;

// store past input key values
var inputKeyHistory = "";

//value used to keep track of remaining guess on the current word
var remainingGuesses = 6;

//hold the value of how many word guesses they got right
var wins = 0;

//get the index of the letter input within the word
var indexOfLetter;
var lastIndexOfLetter;

//random number generator to get the word from the array
var getWord = Math.floor(Math.random() * 5);

// array to hold user input guesses to build the full "getword"
var wordGuess = [];

// get the word from the array the user has to guess
var currentWord = words[getWord];

// output random chosen word
console.log(currentWord);

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
		//if the letter is not in the word remove 1 from remaining guesses
		remainingGuesses--;
		console.log(remainingGuesses);
	}

	var guess = document.getElementById("words");
	var myGuess = wordGuess.join("");
	guess.innerHTML = myGuess;


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



