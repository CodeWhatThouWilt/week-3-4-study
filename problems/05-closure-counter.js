/***********************************************************************
Write a function called countFrom(num) which takes in an optional
number parameter. The function should return a function and when the
return function is called the return should be a number one higher than
the original number put into countFrom. Each subsequent call of the return
function should provide a number that is one higher than the previous.
If no num is provided to the function is should be assumed to start at 0

Examples:

const increment = countFrom(20); // returns a function
console.log(increment()) // prints 21

const otherIncrement = countFrom() // returns a function
console.log(otherIncrement()) // prints 1

***********************************************************************/


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
let exportFunc;
try {
	exportFunc = countFrom;
} catch (error) {
	exportFunc = null;
}
export default exportFunc;
