'use strict';

function doubleEvenNumbers(numbers) {
  const newNumbers = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

  return newNumbers;
}

const someNumbers = [1, 5, 3, 6, 8];

console.log(doubleEvenNumbers(someNumbers));