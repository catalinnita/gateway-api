const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, {'useNewUrlParser': true} );
mongoose.Promise = global.Promise;

module.exports = {
    User: require('./user.model')
};