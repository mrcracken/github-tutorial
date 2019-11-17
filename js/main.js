/*Created for GitHub tutorial 2019*/

function sayHelloOrWorld(){
	var userInput = document.getElementById('userInput').value;
	if (userInput == "Hello"){
		alert("World!");
	}
	else {
		if (userInput == "World"){
			alert("Hello!");
		}
		else{
			alert("Error!");
		}
	}
}
