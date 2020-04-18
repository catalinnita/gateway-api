import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { jsonWebToken } from './_helpers/jwt.js';
import { errorHandler } from './_helpers/error-handler.js';
import { authRoutes } from './auth/routes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jsonWebToken());

// api routes
app.use('/auth', authRoutes);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('=================');
    console.log('GATEWAY:' + port);
    console.log('=================');
});
