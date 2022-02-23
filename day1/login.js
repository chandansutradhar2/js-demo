function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	if (email.length <= 0) {
		document.getElementById("error").innerHTML = "Email cannot be left blank";
		//this is not recommended ...that is to manupulate dom directly
	} else {
		document.getElementById("error").innerHTML = "";
	}
	//alert(email + "  " + password);
}
