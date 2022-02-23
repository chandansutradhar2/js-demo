"use strict";

//expressions-instructions to the V8 engine about your intent;
console.log("basic of javascript");
let a = 10;
let b = 20;
console.log(a + b);

//variables
//primitives and  object (rerefence) types
//primitive data type - number,string,boolean,null, undefined, bigint,symbol
//object types - function.class.object,arrays.collection
//example of string type
var customerName; //declaration of datatype with var keyword
customerName = "chandan naresh"; //initialization of datatype
console.log(typeof customerName); //usage of datatype

var userName = "Chandan Naresh"; //declaration and initialization together
console.log(typeof userName);

// demo of number datatype
var num1 = 10;
var num2 = 20;
console.log(typeof num2);
num2 = "50";
console.log(typeof num2);
console.log("addition of num1 and num2 is", num1 + num2);

//demo of boolean type
var isAdmin = false;
console.log(isAdmin);

//demo of null type
var userName = "UserName";
var mobileNo = "80807272";
var postalCode;

//postalCode = 401107;

console.log(typeof postalCode);

//object type defination
//object declaration syntax { 'key':'value'}
var user = {
	name: "chandan",
	age: 38,
	mobileNo: "808011145",
	email: "chandan@mail.com",
};

user.mobileNo = "8767677766";

console.log("name", user.name);
console.log("age", user.age);
console.log("mobile", user.mobileNo);
console.log("email", user.email); //accessig object key using dot notation
console.log("email", user["email"]); //accessing object key using []

//demo of arrays
var fruits = ["apple", "mango", "banana"];
console.log(fruits[2]);
//adding more items to array using push method
fruits.push("pineapple");
console.log(fruits.length);
fruits.push("watermelon");
console.log(fruits.length, fruits);
fruits.pop();
console.log(fruits.length, fruits, typeof fruits);

//const and let keyword
//let keyword dictates that the variale defined are local in scope
//recommended practice: to always use let unless expliclity not required
function test() {
	for (let i = 0; i < 10; i++) {
		let insideLoop = i;
		console.log(insideLoop);
	}
}

test();

//demo of const
//const is used to define a variable which can be initialized only once
//const will not allow mutation of variables

const custName = "chandan";
//custName = "ranjan";

const customer = {
	name: "chandan",
	age: 38,
	mobileNo: "808011145",
	email: "chandan@mail.com",
};

customer.age = 30; //will work cause object of customer is not reinitialized inly key value updated
customer = {}; //wont work cause customer object is reinitalized here
