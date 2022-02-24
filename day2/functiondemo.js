function load() {
	console.log("load function invoked");
	document.getElementById("container").style.backgroundColor = "red";
}

//recommended
const onLoad = () => {
	console.log("load function invoked");
	document.getElementById("container").style.backgroundColor = "red";
};

const onButtonClick = (evName) => {
	console.log(evName);
	//console.log(ev);
};

const captureText = (ev) => {
	console.log(ev);
};
