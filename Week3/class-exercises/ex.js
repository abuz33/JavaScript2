let users = [
  { username: "andre", password: "password" },
  { username: "hyf", password: "asd" }
];

// let foundUser = users.find(user => { user.username === "andre" });
// console.log(foundUser)

// var obj = {
//   a: 'test1',
//   b: 'test2'
// };
// if (Object.values(user[1]).indexOf('andre') > -1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// let arr = [
//   { name: "string 1", value: "this", other: "that" },
//   { name: "string 2", value: "this", other: "that" }
// ];

let username2 = 'hyf';
let password2 = 'password';

let obj = users.find(user => { return user.username === username2 && user.password === password2; });

console.log(obj);