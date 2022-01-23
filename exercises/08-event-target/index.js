window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(e) {
		alert(''+e.target.id)
	});
};

//Really cool alert. Above was a slightly lazy way to show the id of the target
//but `${e.target.id}` works as well