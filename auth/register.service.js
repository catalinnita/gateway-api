const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_db/db');
const User = db.User;

async function createAccount(userParam) {
    // validates
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hash password
    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await user.save();
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

module.exports = createAccount;