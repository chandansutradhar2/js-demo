function fun1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun1 invoked");
			resolve();
		}, 2200);
	});
}

function fun2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun2 invoked");
			resolve();
		}, 2200);
	});
}

function fun3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("fun3 invoked");
			resolve();
		}, 2200);
	});
}

// fun1().then(() => {
// 	fun2().then(() => {
// 		fun3().then(() => {});
// 	});
// });

//async keyword

async function callerFun() {
	await fun1();
	await fun2();
	await fun3();
}

callerFun();
