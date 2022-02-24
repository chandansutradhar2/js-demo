// let n1 = 400; this is single line comments
/* this is a multi line comments
let n = 10;
let n1 = 20;
let n3 = n + n1;
console.log(n3); */

//declaring variables 1. var keyword 2. let keyword 3. const 4. declare using nothing

a = 20; //valid declaration of variables in Js
b = 20;
//console.log(a + b);

const token = "937340=38383-73737-eweyfey-373h383d3-x3d383d83d3";

//token = null;

function calculator(a, b) {
	sum = a + b;
	subtract = a - b;
	console.log(sum, subtract);
}

//calculator(50, 20);

//operators
//1 - assignment operators ( left hand operand right hand operands)
//n == 50;

//arithmetic operators (+, -, * ** / % ++ --)
// console.log("sum :", 20 + 30);
// console.log("subtract :", 20 - 30);
// console.log("divide :", 20 / 30);
// console.log("mulitplication :", 20 * 30);
// console.log("modulus :", 20 % 30);
// console.log("exponentiation: ", 20 ** 3);
// let n1 = 10;
// n1++; //n1 = n1 + 1;
// console.log("increment :", n1);
// n1--; //n1 = n1 - 1;
// console.log("decrement :", n1);
// console.log(typeof n1);

//type conversion
//1 .string to number using parseInt
// userName = "chandan";
// console.log(typeof userName);
// userName = 10;
// console.log(typeof userName);
// let n1 = "abc";
// console.log(typeof n1);
// n1 = parseInt(n1);
// console.log(typeof n1, n1);
//2.  number to string
let n1 = 30;
n1 = n1.toString();

let n2 = "30";
n2 = parseInt(n2.toString());

let dob = new Date();
console.log(dob);
console.log(dob.toString());

let isAdmin = true;
console.log(isAdmin);
