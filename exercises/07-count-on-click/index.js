//This is a global variable
var counter = 0;

window.onload = function loadFunction()
{
	//here I set the screen to the initial value when the website is fully loaded.
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}
function decreasing(){
	counter--
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
}

document.querySelector('button').innerHTML = 'Decrease'
//document.querySelector('button').onclick = decreasing
//document.querySelector('button').addEvenlistener("click",decreasing)
document.querySelector('button').addEventListener("click",()=>{
	counter--
	document.getElementById('screen').innerHTML = "The counter value is "+counter;
})
//commented lines work as well. Good practice to get familiar with syntax