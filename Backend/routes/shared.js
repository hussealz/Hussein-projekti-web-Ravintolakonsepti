// shared.js - shared data and config for auth
const users = [
  { id: 1, name: 'admin', email: 'admin@email.com', password: 'admin123', isAdmin: true },
];
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

module.exports = { users, JWT_SECRET };
