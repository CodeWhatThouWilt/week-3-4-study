/***********************************************************************
Write a function countLetters(str) that accepts a sentence and returns
and object of key value pairs where keys are letters and their values
are the count of that letter found in the sentence. Spaces and periods should not
be counted as a letter.

Example:

const sentence = "Whats good. Out here winning. Doing coding stuff"
console.log(countLetters(sentence))
// ^^ Should print:
// {
//     w: 2, h: 2, a: 1, t: 3,
//     s: 2, g: 4, o: 5, d: 3,
//     u: 2, e: 2, r: 1, i: 4,
//     n: 5, c: 1, f: 2
// }

***********************************************************************/


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
let exportFunc;
try {
	exportFunc = countLetters;
} catch (error) {
	exportFunc = null;
}
export default exportFunc;
