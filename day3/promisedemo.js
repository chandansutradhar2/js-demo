const fetchData = () => {
	return new Promise((resolve, reject) => {
		let products = [
			{ name: "rayban aviator sunglasses", price: 7655, qty: 10 },
			{ name: "fastrack oval sunglasses", price: 5500, qty: 50 },
			{ name: "titan watch", price: 2655, qty: 6 },
		];
		setTimeout(() => {
			resolve(products);
			console.log("fetch data completed");
		}, 3000);
	});
};

const transformData = (products = []) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			products.forEach((product) => {
				product.cartValue = product.price * product.qty;
			});
			console.log("transform data completed");
			resolve(products);
		}, 2000);
	});
};

const updateUI = (products = []) => {
	setTimeout(() => {
		products.forEach((item) => {
			console.log(
				`Product Name: ${item.name} Product Rate: ${item.price} Product Qty: ${item.qty} Cart Value: ${item.cartValue}`,
			);
		});
	}, 6000);
};

const errorHandler = () => {
	console.log("error handler invoked to end program gracefully");
};

//promises to handle a sync code/function

// fetchData().then((fetchResults) => {
// 	console.log(myName);
// 	transformData(fetchResults).then((transformedData) => {
// 		updateUI(transformedData);
// 	});
// });

let myName = "chandan"; //global scoped variable

function test() {
	let localName = "chandan naresh";
	let someName = "some one else";
	console.log(myName, localName);

	if (true) {
		let blockScopeName = "sutradhar";
		console.log(blockScopeName);
	}
}

test();
