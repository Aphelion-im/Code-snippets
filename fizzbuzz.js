function fizzBuzz() {
  for (let count = 1; count <= 100; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log('FizzBuzz');
    } else if (count % 5 === 0) {
      console.log('Buzz');
    } else if (count % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(count);
    }
  }
}

fizzBuzz();
