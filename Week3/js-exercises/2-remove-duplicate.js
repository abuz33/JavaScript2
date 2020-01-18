'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];


// To try function with numbers.
const numbers = [1, 1, 2, 3, 4, 2, 12, 12, 34, 4]

function removeDuplicates(array) {
  let newArray = []
  array.map(x => {
    if (!newArray.includes(x)) {
      newArray.push(x)
    }
  });
  return newArray
};

console.log(removeDuplicates(letters));
console.log(removeDuplicates(numbers));