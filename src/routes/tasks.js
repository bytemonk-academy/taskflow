const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

router.get('/', (req, res) => {
  const tasks = Task.all();
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const task = Task.find(Number(req.params.id));
  res.json(task);
});

router.post('/', (req, res) => {
  const { title, projectId, assignee } = req.body;
  const task = Task.create({ title, projectId, assignee });
  res.status(201).json(task);
});

router.put('/:id', (req, res) => {
  const task = Task.update(Number(req.params.id), req.body);
  res.json(task);
});

router.delete('/:id', (req, res) => {
  const removed = Task.remove(Number(req.params.id));
  res.json(removed);
});

module.exports = router;
