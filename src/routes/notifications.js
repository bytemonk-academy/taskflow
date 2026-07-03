const express = require('express');
const Notification = require('../models/Notification');

const router = express.Router();

router.get('/', (req, res) => {
  const notifications = Notification.all();
  res.json(notifications);
});

router.post('/', (req, res) => {
  const { userId, message } = req.body;
  const notification = Notification.create({ userId, message });
  res.status(201).json(notification);
});

module.exports = router;
