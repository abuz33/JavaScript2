'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let numbers = [];
  // make array
  let index = stopIndex - startIndex;
  for (let i = 0; i < index + 1; i++) {
    numbers.push(startIndex);
    startIndex++;
  }
  let newNumbers = numbers.map(element => {
    if (element % 3 === 0) {
      return threeCallback();
    }
  })
  numbers.map(element => {
    if (element % 5 === 0) {
      return fiveCallback();
    }
  })

  return newNumbers;
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
}

function sayThree() {
  return 'Divisible by 3';
};


function sayFive() {
  return 'Divisible by 5';
};


console.log(threeFive(10, 15, sayThree, sayFive));

// Should create an array[10, 11, 12, 13, 14, 15]
// and call sayFive, sayThree, sayThree, sayFive