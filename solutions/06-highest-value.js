const highestValue = (obj) => {
    // Make variables to keep track of the current highest
    // value and the associated key
	let highestVal = 0;
	let highestKey = "";
    // Begin looping through the incoming object
	for (let key in obj) {
        // Assign the value associated with the current
        // key to a variable
		const val = obj[key];
		if (val > highestVal) {
            // If the current iteration's value is higher
            // than the current highestVal then we reassign
            // highest value to current iteration's value
            // and highest key to current iteration's key
			highestVal = val;
			highestKey = key;
		}
	}
	return highestKey;
};
