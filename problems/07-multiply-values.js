/***********************************************************************
Write a function multiplyValues(arr) that accepts iterates through an 
array of objects where each object contains 3 keys:
keyOne
keyTwo
keyThree
The keys all have number values assigned to them. Return an array of
objects where each object has a key, "total", that contains the product
of all three values for each object.

** Do not use a for in loop for this problem.

const arr = [
	{ keyOne: 5, keyTwo: 9, keyThree: 22 },
	{ keyOne: 6, keyTwo: 3, keyThree: 4 },
	{ keyOne: 2, keyTwo: 4, keyThree: 9 },
	{ keyOne: 10, keyTwo: 12, keyThree: 18 },
	{ keyOne: 0, keyTwo: 8, keyThree: 50 },
];
console.log(multiplyValues(arr));
// ^^ prints:
// [
//     { total: 990 },
//     { total: 72 },
//     { total: 72 },
//     { total: 2160 },
//     { total: 0 }
// ]


***********************************************************************/


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
let exportFunc;
try {
	exportFunc = multiplyValues;
} catch (error) {
	exportFunc = null;
}
export default exportFunc;
