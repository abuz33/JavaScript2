'use strict';


function server() {

  let users = [
    { username: "andre", password: "password" },
    { username: "hyf", password: "asd" }
  ];

  function authenticate(username, password) {

    let matchingUser = users.find(user => {
      if (user.username === username && user.password === password) return true;
      else return false;
    });

    if (typeof matchingUser != "undefined") return true;
    else return false;

  }

  function register(username, password) {
    let newUser = {
      username,
      password
    };

    users.push(newUser)
    //add the new user to the users list
  }
  return {
    authenticate,
    register
  };
}


let server1 = server();
server1.register("foo", "bar");
console.log(server1.authenticate("foo", "bar")) // true
console.log(server1.authenticate("andre1", "password")) // false
console.log(server1.authenticate("andre", "password")) // true
console.log(server1.authenticate("andre", "yxc")) // false