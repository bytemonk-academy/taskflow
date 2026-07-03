const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

router.post('/register', (req, res) => {
  const { email, password, name } = req.body;
  const user = User.create({ email, password, name });
  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ user: { id: user.id, email: user.email, name: user.name }, token });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = User.findByEmail(email);
  const token = jwt.sign({ sub: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
