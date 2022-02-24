class Car {
	name;
	mfgName;
	yearOfMake;
	occupancy;
	engineCapacity;

	constructor(name, mfgName, year, pax, capacity) {
		this.name = name;
		this.mfgName = mfgName;
		this.engineCapacity = capacity;
		this.occupancy = pax;
		this.yearOfMake = year;
		this.start();
	}

	start() {
		console.log(this.name + " started");
	}

	stop() {
		console.log(this.name + " stopped");
	}

	accelerate() {
		let accerationSpeed = 10;
		return accerationSpeed++ * 10;
	}
}

function stop() {
	console.log("car stopped");
}

const carObj = new Car("Tigor", "Tata", 2020, 5, 1200);
carObj.stop();

console.log("car accelerating at " + carObj.accelerate());
