const highlightMenu = (menuName) => {
	switch (menuName) {
		case "men":
			document.getElementById(menuName).style.borderBottomColor = "red";
			document.getElementById(menuName).style.borderBottomWidth = "thick";
			document.getElementById(menuName).style.borderBottomStyle = "groove";
			document.getElementById("women").style.borderBottomStyle = "none";
			document.getElementById("kid").style.borderBottomStyle = "none";
			break;
		case "women":
			document.getElementById(menuName).style.borderBottomColor = "red";
			document.getElementById(menuName).style.borderBottomWidth = "thick";
			document.getElementById(menuName).style.borderBottomStyle = "groove";
			document.getElementById("men").style.borderBottomStyle = "none";
			document.getElementById("kid").style.borderBottomStyle = "none";
			break;
		case "kid":
			document.getElementById(menuName).style.borderBottomColor = "red";
			document.getElementById(menuName).style.borderBottomWidth = "thick";
			document.getElementById(menuName).style.borderBottomStyle = "groove";
			document.getElementById("men").style.borderBottomStyle = "none";
			document.getElementById("women").style.borderBottomStyle = "none";
			break;
		default:
			break;
	}
};

const showCatgory = (menuName) => {
	var exampleEl = document.getElementById(menuName);
	var popover = new bootstrap.Popover(exampleEl, {
		animation: true,
		template: `<ul><li>Item 1</li></ul>`,
	});
	popover.toggle();
};

function demo() {
	let products = ["a", "b", "c"];

	for (let index = 0; index < products.length; index++) {
		console.log(products[index]);
	}

	products.forEach((ele) => console.log("element is " + ele));
}

demo();
