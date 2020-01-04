'use strict';

const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];


const collectiveAge = (array) => {
  const totalAge = hackYourFutureMembers
    .map(member => member.age)
    .reduce((total, member) => total += member);
  return `The collective age of the HYF team is: [${totalAge}]`;
}

console.log(collectiveAge(hackYourFutureMembers));