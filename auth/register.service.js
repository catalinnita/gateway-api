const bcrypt = require('bcryptjs');
const db = require('../_db/db');
const User = db.User;

async function createAccount({ name, email, password }) {
    // validates
    if (await User.findOne({ email })) {
        throw 'Email "' + email + '" is already taken';
    }
    
    // create new user
    const user = new User({ name, email, password });

    // hash password
    if (password) {
        user.hash = bcrypt.hashSync(password, 10);
    }

    // save user
    await user.save();
}

async function getById(id) {
    return await User.findById(id).select('-hash');
}

module.exports = createAccount;
