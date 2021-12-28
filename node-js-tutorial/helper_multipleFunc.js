/* when we want multiple function export then each helper function we need to assign each in variable */
const user = function (data) {
  return `${data} is logged in`;
};

let id = function (id) {
  return `${id}`;
};

let email = function (email) {
  return `${email}`;
};

/* 
// one way to export module

module.exports.user = user;
module.exports.id = id;
module.exports.email = email; */

module.exports = {
  user,
  id,
  email,
};
