const express = require('express');
const Project = require('../models/Project');

const router = express.Router();

router.get('/', (req, res) => {
  const projects = Project.all();
  res.json(projects);
});

router.get('/:id', (req, res) => {
  const project = Project.find(Number(req.params.id));
  res.json(project);
});

router.post('/', (req, res) => {
  const { name, ownerId } = req.body;
  const project = Project.create({ name, ownerId });
  res.status(201).json(project);
});

module.exports = router;
