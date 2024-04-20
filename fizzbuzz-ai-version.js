// Written by Codeium A.I.
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;

    let output = '';

    if (isFizz) {
      output += 'Fizz';
    }

    if (isBuzz) {
      output += 'Buzz';
    }

    result.push(output || i);
  }

  return result;
}

// Test
const range = 100;
console.log(fizzBuzz(range));


