'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let numbers = [];
  // make array
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }


  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next

  threeCallback(numbers);
  fiveCallback(numbers);

  // to see which numbers are in our array.
  return `The numbers in our list are ${numbers.join(', ')}.`;
}



function sayThree(array) {
  let numberDivThree = array.filter(el => el % 3 == 0 && el != 0)
  console.log(`The number(s) ${numberDivThree.join(', ')} is/are divisible by 3.`);
};


function sayFive(array) {
  let numberDivFive = array.filter(el => el % 5 == 0 && el != 0)
  console.log(`The number(s) ${numberDivFive.join(', ')} is/are divisible by 5.`);
};



console.log(threeFive(10, 15, sayThree, sayFive));

console.log(threeFive(1, 15, sayThree, sayFive));

// Should create an array[10, 11, 12, 13, 14, 15]
// and call sayFive, sayThree, sayThree, sayFive