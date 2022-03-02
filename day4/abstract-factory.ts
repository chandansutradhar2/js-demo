export interface AbstractProductA {
	functionA(): string;
	connectToDB(): string;
}

export interface AbstractProductB {
	functionB(): string;
}

class ConcretProductA implements AbstractProductA {
	connectToDB(): string {
		return "db connection established";
	}
	functionA(): string {
		return "return functionA behavior";
	}
}

class ConcretProductB implements AbstractProductB {
	functionB(): string {
		throw new Error("Method not implemented.");
	}
}

export interface AbstractFactory {
	createProductA(): AbstractProductA;
	createProductB(): AbstractProductB;
	dbConnect(): AbstractProductA;
}

class ConcreteFactory1 implements AbstractFactory {
	dbConnect(): AbstractProductA {
		return new ConcretProductA();
	}
	public createProductA(): AbstractProductA {
		return new ConcretProductA();
	}

	public createProductB(): AbstractProductB {
		return new ConcretProductB();
	}
}

function clientCode(factory: AbstractFactory) {
	const productA = factory.createProductA();
	const productB = factory.createProductB();
	const mongDbConnection = factory.dbConnect();
	const sqlDb = factory.dbConnect();
	console.log(productA.functionA());
	console.log(productB.functionB());
	console.log(mongDbConnection.connectToDB());
	console.log(sqlDb.connectToDB());
}

console.log("Client: Testing client code with ConcreteFactory1");
clientCode(new ConcreteFactory1());

console.log("----------------");

console.log("Client: Testing the same client code with ConcreteFactory2");
//clientCode(new ConcreteFactory2());
