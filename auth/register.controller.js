const registerService = require('./register.service');

function register(req, res, next) {
    registerService(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

module.exports = register;