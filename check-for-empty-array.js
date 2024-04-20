const myArray = [];

console.log(myArray?.length ? true : false); // true. Only checks the length of the array if it exists. Check if array exists with optional chaining (?.).


console.log(Array.isArray(myArray) && myArray.length ? true : false);


// https://www.youtube.com/watch?v=ULniqxZ8ueI (Dave Gray, I was checking for empty Arrays wrong... | How to check for an empty array in Javascript)
