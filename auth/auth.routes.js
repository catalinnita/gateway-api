const express = require('express');
const authRouter = express.Router();

authRouter.post('/login', require('./login.controller'));
authRouter.post('/register', require('./register.controller'));

module.exports = authRouter;