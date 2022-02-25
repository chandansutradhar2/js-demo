const ifDemo = (n1) => {
	//function scope || local scope
	if (n1 < 35) {
		console.log("fail");
	} else if (n1 >= 35 && n1 < 50) {
		//block scope
		console.log("pass");
	} else if (n1 >= 50 && n1 < 65) {
		console.log("second grade");
	} else {
		console.log("first grade");
	}
};

ifDemo(32);
