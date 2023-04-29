/***********************************************************************
Write a function getKeys(obj) that takes in an object and 
returns all the keys in an array

Example:
const obj = {
    this: "is",
    a: "test",
    for: "problem",
    three: "."
}
console.log(getKeys(obj)) // prints ["this", "a", "for", "three"]


***********************************************************************/


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
let exportFunc;
try {
	exportFunc = getKeys;
} catch (error) {
	exportFunc = null;
}
export default exportFunc;
