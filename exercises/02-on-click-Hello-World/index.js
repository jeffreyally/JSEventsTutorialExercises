function clickForHelloWorld() {
    alert('Hello World!')
  }

  document.querySelector("#hello").onclick = clickForHelloWorld

  //added the clickForHelloWorld function to the
  //onclick property of the input/button element