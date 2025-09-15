// user authentication routes (register/login)
const express = require('express');
const router = express.Router();

// Use modular register and login routers
const registerRouter = require('./register');
const loginRouter = require('./login');

router.use('/register', registerRouter);
router.use('/login', loginRouter);

module.exports = router;
