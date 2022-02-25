const forLoopDemo = (names) => {
	let length = names.length;
	for (let index = length - 1; index >= 0; index--) {
		console.log("welcome " + names[index]);
		if (names[index] == "c") break;
	}
};

const forEachLoop = (names) => {
	names.forEach((ele, idx) => {
		console.log("welcome " + ele, "index is ", idx);
		//   if (names[index] == "c") break;
	});
};

forLoopDemo(["a", "b", "c", "d", "e"]);

forEachLoop(["a", "b", "c", "d", "e"]);
