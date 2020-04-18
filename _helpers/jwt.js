import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';
import db from '../_db/db.js';

const User = db.User;

const isRevokedCallback = async (req, payload, done) => {
  const user = await User.findOne({ email: payload.email }).select('customerId');

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
};

const jsonWebToken = () => {
  return expressJwt({
    secret: process.env.SECRET_KEY,
    isRevoked: isRevokedCallback,
  }).unless({
    path: [
      // public registerroutes that don't require authentication
      '/auth/login',
      '/auth/register'
    ]
  });
}

const generateToken = (user) => {
  const { name, email, customerId, subscriptionId, createdDate } = user;
  const parsedUser = { name, email, customerId, subscriptionId, createdDate };

  return jwt.sign(parsedUser, process.env.SECRET_KEY);
}

export {
  jsonWebToken,
  generateToken
};
