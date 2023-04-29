

// With Object.keys - preferred method
// All we need to do is return Object.keys with the
// object passed in. This will provide an array of 
// all the keys
const getKeys = (obj) => Object.keys(obj);


// With for in loop
// const getKeys = (obj) => {
//     // Create an empty array to store all of our keys
//     const arr = [];
//     // Begin looping through keys in object
//     for (let key in obj) {
//         // Push each key into the array
//         arr.push(key);
//     }
//     // Return the array of keys
//     return arr;
// }