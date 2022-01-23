var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

 function turnChanger() {
	if (currentUser == "Mario") {
		currentUser = "Juan";
	} 
	else if(currentUser == "Juan"){
		currentUser = 'Josh'
	}
	else {
		currentUser = "Mario";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

document.querySelector('button').onclick = turnChanger
//removing windows.turnchanger and replacing it with the above also
//worked. I think it is because instead of adding the function right away to the
//windows object on load, it is added to the onclick property of the button