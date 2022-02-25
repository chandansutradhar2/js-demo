const forLoopDemo = (names) => {
	let length = names.length;
	for (let index = 0; index < length; index++) {
		console.log("welcome " + names[index]);
		if (names[index] == "c") break;
	}
};

const forEachLoop = (names) => {
	names.forEach((ele, idx) => {
		console.log("welcome " + ele, "index is ", idx);
		if (ele == "c") return;
	});
};

forLoopDemo(["a", "b", "c", "d", "e"]);

forEachLoop(["a", "b", "c", "d", "e"]);
