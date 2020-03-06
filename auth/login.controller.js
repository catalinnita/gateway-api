const loginService = require('./login.service');

function login(req, res, next) {
	loginService(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
}

module.exports = login;