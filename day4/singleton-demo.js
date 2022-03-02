var Singleton = (function () {
	var instance;

	function createInstance() {
		var object = new Object("I am the instance");
		return object;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

function run() {
	var instance1 = Singleton.getInstance();
	var instance2 = Singleton.getInstance();

	console.log("Same instance? " + (instance1 === instance2));
}

class User {
	static supportNo;
	name;
	age;
	mobileNo;

	constructor() {
		if (User._instance) {
			console.log("instance already exists..return exiting instance");
			return User._instance;
		} else {
			console.log("instance doesn't exists..create a new instance");

			User._instance = this;
		}
	}
}

const User1Obj = new User();
User1Obj.name = "chandan";
User1Obj.age = 38;
User1Obj.mobileNo = "8080811145";

const User2Obj = new User();
console.log("Same instance? ", User1Obj === User2Obj);
console.log("User2Obj", User2Obj);

User.supportNo = "8087666";
console.log(User1Obj, User2Obj);
run();

//client 1
console.log(User.supportNo);

//client 2
console.log(User.supportNo);
