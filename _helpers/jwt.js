const expressJwt = require('express-jwt');
const db = require('../_db/db');
const User = db.User;

module.exports = jwt;

function jwt() {
    const secret = process.env.SECRET_KEY;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public registerroutes that don't require authentication
            '/auth/login',
            '/auth/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await User.findById(payload.sub).select('-hash');

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};