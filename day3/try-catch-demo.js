function validateEmail(email) {
	try {
		if (email.length > 0) {
			console.log(
				"email length is not less than 0..proceed with further validation",
			);
		}
	} catch (error) {
		console.log(error);
	} finally {
		console.log("clean up task here");
	}
}

function add(i, j) {
	let k = 0;
	k = i + j; //impure code
	console.log(k);
}

function pureAdd(a, b) {
	return a + b; //pure function cause none of the input are mutated
}

add(10, 20);
console.log(pureAdd(20, 40));
//validateEmail();

//high order function
//a function return a function

let nVar = [10, 20, 30];
