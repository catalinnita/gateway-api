const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const redirectsRouter = express.Router();
const redirectService = require('./redirect.service');

function subscriptionRedirect(req, res, next) {
	const baseRoute = req.baseUrl.replace('/', '').toUpperCase();
	const redirectBaseUrl = process.env[`REDIRECT_${baseRoute}`];
    redirectService(redirectBaseUrl, req.url, req.method)
        .then(response => response ? res.json(response) : res.status(400).json({ message: 'Something went wrong' }))
        .catch(err => next(err));
}

redirectsRouter.all('*', subscriptionRedirect);

module.exports = redirectsRouter;
