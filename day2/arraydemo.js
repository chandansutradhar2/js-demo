//creating an array
//creating number array
let evenNumbers = [2, 4, 6, 8, 10];
let lotteriesNo = [988, 6363, 7363, 7373, 7363, 5253, 7172];
console.log(lotteriesNo);
//in JS, we do not define the size of array
//Datatypes are inferred at declaration/ initialization
let scores = []; //empty array declaration
console.log(typeof scores, scores.length);
//adding elements (item) to array using array.push
scores.push(20);
scores.push(35);
scores.push(20);
scores.push(76);
scores.push(66);
scores.push(45);
scores.push(25);
scores.push(45);
//push method add item at the end of the array
scores.push(36);
console.log(scores.length);
console.log(
	"find demo",
	scores.findIndex((ele) => {
		return ele > 30;
	}),
);
//use to remove item from the array. and it removes the last item from the array (LIFO)
scores.pop();
//push/pull both of them mutate the array (changing the size of array)
console.log(scores.length);

//you cannot push into an array without initialization first
let sampleArr = [];
sampleArr.push(20);
//console.log(sampleArr);

console.log("scores before shift method", scores);
scores.shift();
console.log("scores after shift", scores);

let someArr = new Array(20, 20, 30, 40);
someArr.push(20);
someArr.push(30);
someArr.push(40);
//console.log(type of someArr, someArr);

console.log("someArr Sorting", someArr.sort());
//array can store multiple types

let exampleArr = [];
exampleArr.push(30);
exampleArr.push("text");
exampleArr.push(true);
exampleArr.push(null);

console.log(exampleArr);

//array of type string
let customerNames = ["Chandan", "samaya", "Ranjan"];
let result = customerNames.join(); //use to join all the elements in array

//console.log(customerNames, result);

// in real time we would be working with array of objects
let customers = [
	{
		name: "Chandan",
		age: 38,
		mobileNo: 8080811145,
		email: "chandan@gmail.com",
	},
	{
		name: "Samaya",
		age: 5,
		mobileNo: 876765656,
		email: "samaya@gmail.com",
	},
	{
		name: "Ranjan",
		age: 30,
		mobileNo: 383928222,
		email: "ranjan@gmail.com",
	},
];

customers.push({
	age: 8,
	name: "Ajinkya",
	mobileNo: 0903930,
	email: "ajinkya@gmail.com",
});

console.log(JSON.stringify(customers));

//find something within array of object
let results = customers.find(function (ele) {
	return ele.age <= 10;
});

// let results = customers.find((ele) => {
// 	return ele.age >= 30;
// });
//console.log(results);

//find multiple similar items from array

let childrens = customers.filter((ele) => {
	return ele.age < 10;
});

//console.log(childrens);

//iteration over array
customers.forEach((item, index) => {
	item.mobileNo = "+91" + item.mobileNo;
	console.log(`index of ${item.name} is ${index}`);
});

console.log(customers);

//adding removing items from between array (add 1 item between 1 and 2 index)
let firstPart = customers.slice(0, 2);
console.log("firstPart", firstPart);

let secondPart = customers.slice(firstPart.length, customers.length);

console.log("second Part", secondPart);
firstPart.push({
	age: 34,
	name: "Harsha",
	email: "harsha@gmail.com",
	mobileNo: "+918767949122",
});

let newCustomers = [];
firstPart.forEach((ele) => {
	newCustomers.push(ele);
});

secondPart.forEach((ele) => {
	newCustomers.push(ele);
});

console.log(newCustomers);

//removing items from between arrays

let fruits = ["apple", "banana", "mango"];

//let tmp = fruits.splice(1); //splice mutate the array
//let tmp = fruits.slice(1); //slice does not mutate array
let tmp = fruits.splice(0, 1, "pineapple");

console.log(tmp, fruits);

//sorting array
let veggies = ["ladyfinger", "cauliflower", "potato", "brinjal"];
veggies.sort();
console.log(veggies);

//sorting array of object
let custArr = [
	{
		name: "Chandan",
		age: 38,
		mobileNo: 8080811145,
		email: "chandan@gmail.com",
	},
	{
		name: "Candan Upadhay",
		age: 38,
		mobileNo: 932676554,
		email: "chandan@gmail.com",
	},
	{
		name: "Aparna",
		age: 40,
		mobileNo: 8080811145,
		email: "aparna@gmail.com",
	},
	{
		name: "Samaya",
		age: 5,
		mobileNo: 876765656,
		email: "samaya@gmail.com",
	},
	{
		name: "Kamal",
		age: 38,
		mobileNo: 876765656,
		email: "kamal@gmail.com",
	},
	{
		name: "Ranjan",
		age: 30,
		mobileNo: 383928222,
		email: "ranjan@gmail.com",
	},
];

console.log(
	custArr.sort((a, b) => {
		if (a.name < b.name) {
			return 1;
		} else if (a.name > b.name) {
			return -1;
		} else {
			return 0;
		}
	}),
);
