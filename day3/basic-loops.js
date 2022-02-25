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

const forInLoopDemo = (names) => {
	for (const idx in names) {
		console.log(names[idx]);
	}
};

const whileLoopDemo = (names) => {
	let cnt = 0;
	let length = names.length;
	while (cnt < length) {
		console.log("welcome " + names[cnt]);
		cnt++;
	}
};

//create a cookie and update it once, then keep the
//cookie updated till the time use is logged in

const updateCookies = () => {
	console.log("i am the first line of code");
	let isLoggedIn = false;
	let cookies = Date.now();
	let i = 0;

	do {
		cookies = Date.now();
		console.log("cookies", cookies);
		console.log("isLoggedIn", isLoggedIn);
		if (i == 0) {
			isLoggedIn = true;
		}
		if (i == 10) {
			isLoggedIn = false;
		}

		i++;
	} while (isLoggedIn);
};

updateCookies();

// forLoopDemo(["a", "b", "c", "d", "e"]);

// forEachLoop(["a", "b", "c", "d", "e"]);

//forInLoopDemo(["a", "b", "c", "d", "e"]);

//whileLoopDemo(["a", "b", "c", "d", "e"]);
