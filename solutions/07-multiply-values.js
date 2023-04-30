
const multiplyValues = (arr) => {
    // Begin looping through incoming array and immediately return the array
    // that is returned from .map
	return arr.map((obj) => {
        // Multiply the value of each key in our current object
		const product = obj.keyOne * obj.keyTwo * obj.keyThree;
        // Return a new object with a key, total, and a value which is the
        // product of all values in obj multiplied
		return { total: product };
	});
};
