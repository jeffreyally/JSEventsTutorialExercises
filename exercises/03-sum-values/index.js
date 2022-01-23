// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	document.querySelector('#resultNumber').value = parseInt(stringA)+parseInt(stringB)
};

console.log(document.querySelector('#resultNumber'))

//I had thought of using innerHTML vs value but this link helped me
//understand a bit better why that doesn't work 
//https://stackoverflow.com/questions/31225901/difference-between-innerhtml-and-value-in-js