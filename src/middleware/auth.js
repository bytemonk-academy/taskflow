const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

// Reads the Bearer token from the Authorization header and attaches the user.
function requireAuth(req, res, next) {
  const header = req.headers.authorization;
  const token = header.split(' ')[1];
  const payload = jwt.verify(token, JWT_SECRET);
  req.user = payload;
  next();
}

module.exports = requireAuth;
