//Grab Elements
var inputOne = document.querySelector('#num_one');
var inputTwo = document.querySelector('#num_two');
var calcBtn = document.querySelector('#calculateBtn');
var answerElem = document.querySelector('#answer');

//Variable Declarations
var answerText;

//Function to Calculate and Generate Answer
function answerMe() {
	answerText = Number(inputOne.value) + Number(inputTwo.value) + ' donuts!';
	answerElem.textContent = answerText;
}

//Button Click
calcBtn.addEventListener('click', answerMe);
