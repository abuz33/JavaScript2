'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

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