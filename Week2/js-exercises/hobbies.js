'use strict';
// selected and store the tags for using in program in the future.
let body = document.body;

let ul = document.createElement('ul');

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];


//Method 1

// created a function to append child element to parent element

function appendChildren(parent, children) {
  children.forEach(child => {
    parent.appendChild(child)
  });
}

// used map method to create list items and added the content.
let lis = myHobbies.map(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  return li;
})

// used the predefined function to append each list into the ul and added the ul to body
appendChildren(ul, lis);
body.appendChild(ul);

//Method 2

// used map method to create list items and added the content.

// let lis = myHobbies.map(hobby => {
//   let li = document.createElement('li');
//   li.textContent = hobby;
//   return li;
// })


// I used forEach method to append the elements. The issue with that is I cannot use it for other arrays.
// lis.forEach(li => body.appendChild(li))

// body.appendChild(ul)


//Method 3

//Used for loop to append the elements.
// for (let hobby of myHobbies) {
//   let li = document.createElement('li');
//   li.textContent = hobby;
//   ul.appendChild(li);
// }
