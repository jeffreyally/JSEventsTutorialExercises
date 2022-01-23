window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};
//created a second function below to add to the second
//button via JS
var  secfunction = e => { 
	console.log(e) 
	alert("You clicked the button you were not supposed to!")
}
//selected the second button, and added the event via
//addEventListener
document.querySelector('#button2').addEventListener("click", secfunction)

