/***********************************************************************
Write a function highestValue(obj) that takes in an object and returns
the key with the highest value within the object. You can assume all
values will be positive numbers and there will only be one highest
value.

Example:
const obj = {
    this: 5,
    is: 2,
    for: 3,
    an: 8,
    example: 2
}
console.log(highestValue(obj)) // prints "an"


***********************************************************************/


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
let exportFunc;
try {
	exportFunc = highestValue;
} catch (error) {
	exportFunc = null;
}
export default exportFunc;
