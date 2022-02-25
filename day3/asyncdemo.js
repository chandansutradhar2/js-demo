const fun1 = () => {
	console.log("fun1 invoked");
};

const fun2 = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			//promise commitment / body
			console.log("fun2 invoked");
			resolve(true);
		}, 3000);
	});
};

const fun3 = () => {
	console.log("fun3 invoked");
};

const errorHandler = () => {
	console.log("error handler invoked to end program gracefully");
};

//promises to handle async code/function

//caller code
fun1();
fun2()
	.then(() => {
		fun3();
	})
	.catch(() => {
		errorHandler();
	});
console.log("demo of sync code");
