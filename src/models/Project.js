// In-memory project store.
let projects = [];
let nextId = 1;

function all() {
  return projects;
}

function find(id) {
  return projects.find((p) => p.id === id);
}

function create({ name, ownerId }) {
  const project = { id: nextId++, name, ownerId, createdAt: new Date().toISOString() };
  projects.push(project);
  return project;
}

module.exports = { all, find, create };
