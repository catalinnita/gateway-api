const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/auth', require('./auth/auth.routes'));
app.use('/subs', require('./redirects/redirects.controller'));
app.use('/settings', require('./redirects/redirects.controller'));

// global error handler
app.use(errorHandler);

// start server
console.log(process.env.NODE_ENV);
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('=================');
    console.log('GATEWAY:' + port);
    console.log('=================');    
});