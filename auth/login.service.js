import bcrypt from 'bcryptjs';
import db from '../_db/db.js';

const User = db.User;

const doLogin = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  }

  throw config.errors.loginNoAccount;
}

export default doLogin;
