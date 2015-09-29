//Grab Elements
var inputOne = document.querySelector('#num_one');
var inputTwo = document.querySelector('#num_two');
var calcBtn = document.querySelector('#calculateBtn');
var answerElem = document.querySelector('#answer');

//Variable Declarations
var numOne, numTwo, answerText;

//Function to Calculate and Generate Answer
var answerMe = function () {
	numOne = inputOne.value;
	numTwo = inputTwo.value;
	answerText = Number(numOne) + Number(numTwo) + ' donuts!';
	answerElem.textContent = answerText;
}

//Button Click
calcBtn.addEventListener('click', answerMe);
