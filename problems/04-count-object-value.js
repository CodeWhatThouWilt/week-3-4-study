/***********************************************************************
Write a function countValue(val, obj) that accept a value and object.
The function should return how many times the value appears as both a
key and value in the object.

Example:

const obj = { test: "this", out: "test", this: "function", here: "test" }
console.log("test", obj) // prints 3
console.log("this", obj) // prints 2


***********************************************************************/


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
let exportFunc;
try {
	exportFunc = countValue;
} catch (error) {
	exportFunc = null;
}
export default exportFunc;
