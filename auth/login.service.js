const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_db/db');
const User = db.User;

async function login({ username, password }) {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, process.env.SECRET_KEY);
        return {
            ...userWithoutHash,
            token
        };
    }
}

module.exports = login;