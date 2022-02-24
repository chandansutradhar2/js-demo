class Car {
	name;
	mfgName;
	yearOfMake;
	occupancy;
	engineCapacity;

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
carObj.engineCapacity = 1000;
carObj.mfgName = "Tata";
carObj.name = "Tibor";
carObj.occupancy = 5;
carObj.yearOfMake = 2020;
carObj.start();
console.log("car accelerating at " + carObj.accelerate());
carObj.stop();
console.log(carObj);
