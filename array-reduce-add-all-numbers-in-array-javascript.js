function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 5, 10, 22));

/*
Codeium:
This JavaScript function, sum, accepts any number of arguments and returns their sum using the reduce method. 
The reduce method iterates over the arguments array and adds each number to a running total, starting with 0. 
The arrow function (total, num) => total + num is used as the reducer function.
*/
