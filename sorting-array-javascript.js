const array = [1, 2, 5, 77, 100, 32, 44];

array.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
});

// Short version
console.log(array.sort((a, b) => a - b));