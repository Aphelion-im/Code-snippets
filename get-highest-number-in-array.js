const array = [2, 3, 1, 43, 77, 5, 4, 144];

// Method 1
console.log(Math.max(...array));

// Method 2
console.log(array.reduce((a, b) => (a > b ? a : b)));

// Method 3
console.log(Math.max.apply(null, array));

// Method 4
function getMax(array) {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

console.log(getMax(array));
