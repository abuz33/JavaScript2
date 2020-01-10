

// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
// For the first part, we defined a variable x and assign 9 to it. 
// We created a function which takes a value and increase the value 1 and return it.
// if call the function with our x variable, it is going to increase it. And if we log it to the console,
// we are going to see 10.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);


// We create a y object with key of x and value of 9. 
// Inside of the function it takes the object and 
// increase the value of x key of the object with 1 and returns it back.
// If we give the object as parameter to the function function is going to increase the 9 to 10,
// and it returns it.If we log it to the console, we'll see the object with x key and value of 10. 