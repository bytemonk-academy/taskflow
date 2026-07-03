// In-memory user store.
let users = [];
let nextId = 1;

function all() {
  return users;
}

function find(id) {
  return users.find((u) => u.id === id);
}

function findByEmail(email) {
  return users.find((u) => u.email === email);
}

function create({ email, password, name }) {
  const user = { id: nextId++, email, password, name, createdAt: new Date().toISOString() };
  users.push(user);
  return user;
}

module.exports = { all, find, findByEmail, create };
