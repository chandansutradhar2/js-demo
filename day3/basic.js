const ifDemo = (n1) => {
	//function scope || local scope
	if (n1 >= 0 && n1 < 35) {
		console.log("fail");
	} else if (n1 >= 35 && n1 < 50) {
		//block scope
		console.log("pass");
	} else if (n1 >= 50 && n1 <= 63) {
		console.log("second grade");
	} else if (n1 >= 64 && n1 <= 100) {
		console.log("first grade");
	} else {
		console.log("please enter marks between 0-100");
	}
};

ifDemo(70);
