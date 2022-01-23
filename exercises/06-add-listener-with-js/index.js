window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

document.querySelector('#theGreen').addEventListener("click",(e)=>{
	console.log(e)
	alert('woohoo')
})
