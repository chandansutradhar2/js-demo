class Car {
	start() {
		console.log("car started");
	}

	stop() {
		console.log("car stopped");
	}

	accelerate() {
		let accerationSpeed = 10;
		return accerationSpeed++ * 10;
	}
}

function stop() {
	console.log("car stopped");
}

const carObj = new Car();
carObj.start();
console.log("car accelerating at " + carObj.accelerate());
carObj.stop();
