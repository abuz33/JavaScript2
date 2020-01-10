'use strict';

function createBase(num1) {
  return function sum(num2) {
    return num1 + num2;
  }
}

let addSix = createBase(6);

console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));