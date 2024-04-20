// Primitive types: Pass by value. Number, string, boolean, symbol, undefined, and null.
// Variables are independent. Changing one does not change the other.
var x = 10;
var y = x;
console.log(y);
console.log(y = 20);
console.log(x);

// Pass by reference. Reference types: objects, arrays, and functions
// Variables are not independent. Changing one changes the other.
var alpha = {
    x: 10
};
var omega = alpha;
console.log(omega.x); // 10
console.log(omega.x = 20);
console.log(alpha.x);
