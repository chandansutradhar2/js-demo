const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	console.log("a user connected");
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
	socket.on("notify", (chat) => {
		console.log("notify", chat);
		io.emit("recievedChat", chat);
	});
});

server.listen(3000, () => {
	console.log("listening on *:3000");
});

let cartProducts = [];

function addToCart(product) {
	return product ? cartProducts.push(product) : null;
}

class Product {
	name;
	price;
}
addToCart(null);
function removeFromCart(product) {
	//code to remove item from cart
	cartProducts.pop(product);
	const p = new Product();
}

addToCart(null);

function updateCustomerCart() {
	// if (User1Obj.name !== null) {
	// 	User1Obj.cart = cartProducts; //side effect / code doing something else than
	// 	//the intent of the function
	// }
}

addCustomer();
