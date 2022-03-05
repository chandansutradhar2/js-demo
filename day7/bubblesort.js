// function swap(arr, xp, yp) {
// 	var temp = arr[xp];
// 	arr[xp] = arr[yp];
// 	arr[yp] = temp;
// }

// // An optimized version of Bubble Sort
// function bubbleSort(arr, n) {
// 	var i, j;
// 	for (i = 0; i < n - 1; i++) {
// 		for (j = 0; j < n - i - 1; j++) {
// 			if (arr[j].score > arr[j + 1].score) {
// 				swap(arr, j, j + 1);
// 			}
// 		}
// 	}
// }

// /* Function to print an array */
// function printArray(arr, size) {
// 	var i;
// 	for (i = 0; i < size; i++) console.log(arr[i] + " ");
// }

// // Driver program to test above functions
// var arr = [64, 34, 25, 12, 22, 11, 90];
// var n = 7;

// console.log("UnSorted array: \n");
// printArray(JSON.stringify(students), n);

// bubbleSort(students, n);
// console.log("Sorted array: \n");
// printArray(JSON.stringify(students), n);

let students = [
	{ name: "a", score: 98 },
	{ name: "b", score: 69 },
	{ name: "c", score: 10 },
	{ name: "d", score: 49 },
	{ name: "e", score: 58 },
	{ name: "f", score: 35 },
	{ name: "g", score: 15 },
];
function sortStudet(students = []) {
	let tmp = students.sort((a, b) => {
		return a.score - b.score;
	});

	let firstGradeStudents = students.filter((student) => {
		return student.score > 65;
	});
	console.log(firstGradeStudents);

	//console.log(students);
	return tmp;
}

console.log(sortStudet(students));
