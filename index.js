const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ name: 'TaskFlow API', status: 'ok' });
});

app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/tasks', require('./src/routes/tasks'));
app.use('/api/projects', require('./src/routes/projects'));
app.use('/api/notifications', require('./src/routes/notifications'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`TaskFlow API listening on port ${PORT}`);
});

module.exports = app;
