// array of possbile words to guess
var words = ["pacman", "mario", "street fighter", "donkey kong"];

// store input key from users keyboard
var userInputKey;

// store past input key values
var inputKeyHistory;

//get the index of the letter input within the word
var indexOfLetter;

//random number generator to get the word from the array
var getWord = Math.floor(Math.random() * 4);

// get the word from the array the user has to guess
var guessWord = words[getWord];

// output random chosen word
console.log(guessWord);

// get user input from keyboard - store in a var - user another var to keep track of previous input
document.onkeyup = function(event) {
	userInputKey = event.key;
	console.log(userInputKey);

	inputKeyHistory = (inputKeyHistory + userInputKey);
	console.log(inputKeyHistory);

	// if the letter is present in the word - give me the index of that letter
	if(guessWord.includes(userInputKey)) {

		indexOfLetter = guessWord.indexOf(userInputKey)

		console.log(indexOfLetter);
	}
} //End Function onkeyup