// register.js - user registration route
const express = require('express');
const router = express.Router();
const { users, JWT_SECRET } = require('./shared');
const jwt = require('jsonwebtoken');

// Register new user
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'Kaikki kentät ovat pakollisia' });
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'Sähköposti on jo käytössä' });
  const user = { id: users.length+1, name, email, password, isAdmin: false };
  users.push(user);
  const token = jwt.sign({ id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin }, message: 'Rekisteröinti onnistui!' });
});

module.exports = router;
