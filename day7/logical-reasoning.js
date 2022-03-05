//&& operators

function validate(email, password) {
	if (
		email !== undefined &&
		password !== undefined &&
		email.length > 0 &&
		password.length > 0
	) {
		console.log("values are not empty ..proceed with further validation");
	} else {
		console.log("values are empty ..please provide email / password");
	}
}

function printGrade(score) {
	if (score >= 0 && score < 35) {
		console.log("sorry. you failed ");
	} else if (score >= 35 && score < 50) {
		console.log("hmm.just passed");
	} else if (score >= 50 && score < 65) {
		console.log("work hard a bit more, you have achieved 2nd grade");
	} else if (score >= 65 && score <= 100) {
		console.log("awesome...keep it up..first grade");
	} else {
		console.log("unable to get grade for score ", score);
	}
}

printGrade(-10);

// validate("chandan@mail.com", "password");

//characteristic of and operators
//both the condition should satify in order for it to be evaluated as true
//if first condtion is false, then it doesn't evaluate 2 condition

//characteristic of or operators
//either one of the condition should satisfy
//if first condition is true, it doesn't evaluate scond condition

console.log(10 > 0 || 10 < 5);

function doSomething(n1) {
	if (n1 % 2 == 0) {
		console.log("even");
	} else {
		console.log("odd");
	}
}

function fun2(n1) {
	console.log("square of n1" + n1 * n1);
}

doSomething(3);

fun2(10);
