

// Snippet
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();
// Now first of all, out side of the function a is defined and 10 is assigned to it. 
// Inside of the x function, we are reassigning 12 to a. a is twelve right now.
// And we are defining another anonymous fuction which is going to alert us the value of a which is 12 
// at the end of the function.
x();