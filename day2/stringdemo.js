// let userName = "CHANDAN NARESH";
// console.log(userName.toLowerCase().replace("naresh", "sutradhar"));

// let users = ` chandan ,ranjan,samaya, harsha   , aparna, prince , tanmay `;
// let userArr = users.trim().split(",");

// console.log(userArr);

// let anotherAyy = [];
// userArr.forEach((ele) => {
// 	anotherAyy.push(ele.trim());
// });

// let userString = anotherAyy.join(",");
// console.log(userString, typeof userString, typeof anotherAyy);

//string template literals
let para = "thatit is a long string text"; //double quotes
let para2 = "this is another long string text"; //single quotes for string
let para3 = `thats"it, is a long string text,,....
and this is a part of second para inside existing para
and i can add more
`;
let result = para3.substring(0, 76);
let searchresult = para3.search("chan");
console.log(searchresult);

//string interpolation
//a process of writing code mixing string text and variables together

let product = {
	name: "Sony IPhoneX",
	price: 65777,
	mfgDate: "362038383",
	qty: 10,
};

console.log("product Name:", +product.name + "product Price" + product.price);
console.log(`product name ${product.name} , product price ${product.price}`);
