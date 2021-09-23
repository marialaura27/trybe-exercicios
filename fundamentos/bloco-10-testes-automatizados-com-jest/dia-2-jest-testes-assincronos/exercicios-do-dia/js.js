/*
// 1)
const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
};
  
module.exports = uppercase;
*/
/*
// 2) e 3)
const users = [
    { id: 1, name: 'Mark' },
    { id: 2, name: 'Paul' },
  ];
  
const findUserById = (id) => new Promise((resolve, reject) => {
const result = users.find((user) => user.id === id);

if (result) {
  return resolve(result);
}

return reject(new Error(`User with ${id} not found.`));
});
  
  const getUserName = (userId) => findUserById(userId).then((user) => user.name);

module.exports = getUserName;
*/
/*
// 4)
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
module.exports = getRepos;
*/

// 5)
