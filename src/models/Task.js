// In-memory task store.
let tasks = [];
let nextId = 1;

function all() {
  return tasks;
}

function find(id) {
  return tasks.find((t) => t.id === id);
}

function create({ title, projectId, assignee }) {
  const task = {
    id: nextId++,
    title,
    projectId,
    assignee,
    status: 'open',
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

function update(id, changes) {
  const task = find(id);
  Object.assign(task, changes);
  return task;
}

function remove(id) {
  const index = tasks.findIndex((t) => t.id === id);
  const [removed] = tasks.splice(index, 1);
  return removed;
}

module.exports = { all, find, create, update, remove };
