

const countFrom = (num) => {
    // declare a count variable which starts at 0. This
    // acts as a backup if num is undefine
	let count = 0;

    // Return an anonymous function
	return () => {
        // Check to see if num is undefined
		if (num === undefined) {
            // If num is undefined increment and return count
			count++;
			return count;
		} else {
            // If num is defined increment num and return it
			num++;
			return num;
		}
	};
};
