var textValue;
function load() {
	console.log("load function invoked");
	document.getElementById("container").style.backgroundColor = "red";
}

//recommended
const onLoad = () => {
	console.log("load function invoked");
	document.getElementById("container").style.backgroundColor = "red";
};

const onButtonClick = () => {
	displayGreeting(textValue);
};

const captureText = (ev) => {
	console.log(ev.target.value);
	textValue = ev.target.value;
};

function displayGreeting(name) {
	// setTimeout(function handler() {
	// 	alert("Welcome " + name);
	// }, 2000);
}

//function invocation
function Add(num1, num2) {
	return num1 + num2;
}

function showAlert(msg, title = "info", alertType = "info", duration = 2000) {
	console.log(
		`title: ${title}, Message :${msg} alertType: ${alertType} duration: ${duration}`,
	);
}

//function invocation
console.log(Add(10, 20));

showAlert("invalid credentials");
