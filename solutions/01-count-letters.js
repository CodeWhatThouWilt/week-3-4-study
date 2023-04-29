

// With reduce
const countLetters = (sentence) => {
    // Split the incoming string and lowercase it.
    // Splitting on "" will give an array of all the
    // letters / spaces / periods 
	const arr = sentence.toLowerCase().split("");
    // Begin looping through with reduce. Initial value
    // is set to an empty object so our accumulator starts
    // as an empty object.
	return arr.reduce((obj, char) => {
        // Check if current character is not a space or period
		if (char !== " " && char !== ".") {
			// If our accumulator (which is an object) does not
			// contain a key of our current character, create
			// a new key value pair with the key being the
			// current character and the value being one
			if (obj[char] === undefined) {
				obj[char] = 1;
			} else {
				// If the current character already exists as
				// a key in our accumulator object then increment
                // it's value by one
				obj[char]++;
			}
		}
        // Return the accumulator object after the if statements. This is
        // necessary for our accumulator to maintain its value
        // as our counter object.
		return obj;
	}, {});
};

// With forEach
// const countLetters = (sentence) => {
//     // Split the incoming string and lowercase it.
//     // Splitting on "" will give an array of all the
//     // letters / spaces / periods 
// 	const arr = sentence.toLowerCase().split("");
//     // Create an empty object for us to store our key value
//     // pairs in. This will be returned at the end of the function
// 	const obj = {};

//     // Begin iterating through our array of characters
// 	arr.forEach((char) => {
//         // Check if current character is not a space or period
// 		if (char !== " " && char !== ".") {
//             // If current character does not exist as a key in
//             // our return object add it as a key with the value 1
// 			if (obj[char] === undefined) {
// 				obj[char] = 1;
// 			} else {
//                 // If current character is a key in our object
//                 // increment it's value by one
// 				obj[char]++;
// 			}
// 		}
// 	});
//     // After all key: value pairs have been added return the object
//     return obj;
// };
