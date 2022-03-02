interface Customer {
	name: "";
	age: number;
	mobileNo: "";
	email: "";
	address: {
		zipCode: "";
		city: "";
		country: "";
	};
	firstName: "";
	lastName: "";
}
function addCustomer(customer: Customer) {
	console.log(customer);
}

addCustomer({
	address: {
		city: "",
		country: "",
		zipCode: "",
	},
	age: 36,
	email: "",
	firstName: "",
	lastName: "",
	mobileNo: "",
	name: "",
});
