const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, 'public', 'users.json');

const readUsers = () => {
  const usersData = fs.readFileSync(usersFilePath);
  return JSON.parse(usersData);
};

const writeUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

const registerUser = (username, password) => {
  const users = readUsers();
  if (users.find(user => user.username === username)) {
    throw new Error('User already exists');
  }
  users.push({ username, password });
  writeUsers(users);
};

const loginUser = (username, password) => {
  const users = readUsers();
  return users.find(user => user.username === username && user.password === password);
};

module.exports = { registerUser, loginUser };
