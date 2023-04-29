

// With reduce
const getProduct = (...nums) => {
    // Rest operator means nums is an array so we can
    // begin iterating through nums with reduce. We leave
    // initial value empty so it starts as the value at the
    // index 0 in nums and begins iterating on index 1 if
    // it exists. If not it just returns initial value.
	return nums.reduce((acc, num) => {
        // We return acc * num so the acc becomes that value
		return acc * num;
	});
};


// With forEach
// const getProduct = (...nums) => {
//     // Since we're doing multiplication we can set the
//     // product to 1. This allows us to multiply the first
//     // number in nums against it without any issues
//     let product = 1;
//     // loop through each number and have product = itself * current num
//     nums.forEach(num => product *= num);
//     // return product when looping is finished
//     return product;
// };
