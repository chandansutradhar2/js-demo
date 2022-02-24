//conversion from object to JSON (Javascript Object Notation)
//JSON is a data format used for tranferring data between client <--> server
//below use case to depict real scenarios of converting  data before sending to the server
let user = {
	name: "samaya",
	age: 5,
	mobileNo: "8088765543",
	isAdmin: true,
};

localStorage.setItem("user", JSON.stringify(user));
console.log("user stored in local storage");

//reverse of above scenarios
//user access scenario
//fetch from localstorage to see if user exists
let userData = localStorage.getItem("user");
sessionStorage.setItem("user", JSON.stringify(user));
if (userData) {
	userData = JSON.parse(userData); //convert jsopn string into JS object
	console.log("user exists:", userData, typeof userData);
	console.log(userData.name);
} else {
	console.log("user doesnt exists");
}
//const userData = JSON.parse(userJSON);
