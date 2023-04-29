// Using for in loop
const countValue = (val, obj) => {
	// Initialize our counter at 0
    let count = 0;
    // Begin looping through keys in object
	for (let key in obj) {
        // Check to see if current key matches the value
		if (key === val) {
            // If above is true increment count by one
			count++;
		}
		if (obj[key] === val) {
            // ^ Check to see if value associated with current
            // key matches val in params. If so increment counter
            // by one
			count++;
		}
	}
    // return count
	return count;
};


// Using reduce
// const countValue = (val, obj) => {
//     // Get an array of all the keys in incoming object
//     const keys = Object.keys(obj);
//     // Begin looping through keys using reduce method. We
//     // set our initial value to 0 so our acc(accumulator)
//     // starts at the value 0.
//     return keys.reduce((acc, key) => {
//         if (key === val) {
//             // If current key matches incoming value param we
//             // increment accumulator by one
//             acc++;
//         }
//         if (obj[key] === val) {
//             // if the value associated with current key in our
//             // incoming object matches the value we increment
//             // accumulator by one
//             acc++
//         }
//         // Return the accumulator which will remain the same if
//         // neither if statement was triggered. If either or both
//         // were then accumulator will take on the new value after
//         // incrementing
//         return acc;
//     }, 0);
// }