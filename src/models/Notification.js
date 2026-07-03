// In-memory notification store.
let notifications = [];
let nextId = 1;

function all() {
  return notifications;
}

function create({ userId, message }) {
  const notification = {
    id: nextId++,
    userId,
    message,
    read: false,
    createdAt: new Date().toISOString(),
  };
  notifications.push(notification);
  return notification;
}

module.exports = { all, create };
