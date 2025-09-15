// login.js - user login route
const express = require('express');
const router = express.Router();
const { users, JWT_SECRET } = require('./shared');
const jwt = require('jsonwebtoken');

// تسجيل دخول
router.post('/', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Kirjautumistiedot ovat virheelliset' });
  const token = jwt.sign({ id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin }, message: 'Kirjautuminen onnistui!' });
});

module.exports = router;
