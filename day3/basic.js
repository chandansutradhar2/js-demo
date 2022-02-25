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

const switchDemo = (score) => {
	switch (score) {
		case 30:
			console.log("fail");
			break;
		case 50:
			console.log("pass");
			break;
		case 60:
			console.log("2nd grade");
			break;
		case 70:
			console.log("1st grade");
			break;
		default:
			console.log("unable to determine grade");
			break;
	}
};

const renderNavBar = (role) => {
	switch (role) {
		case "admin":
			//TODO render admin navbar
			console.log("admin navbar rendered");
			break;
		case "instructor":
			//TODO render admin navbar
			console.log("instructor navbar rendered");
			break;
		case "coordinator":
			//TODO render admin navbar
			console.log("coordinator navbar rendered");
			break;
		case "participant":
			//TODO render admin navbar
			console.log("participant navbar rendered");
			break;
		default:
			//TODO render guest navbar
			console.log("guest navbar rendered");
			break;
	}
};
//ifDemo(70);

const ifElseNew = (isAdmin) => {
	if (isAdmin) {
		console.log("admin user");
		//alert("admin login");
	} else {
		console.log("non admin user");
		//alert("non admin login");
	}

	//return isAdmin === true ? console.log("admin user") : console.log("non admin user");
	isAdmin === true ? console.log("admin user") : console.log("non admin user");
};

ifElseNew(true);
// switchDemo(35);

// renderNavBar("instructor");
