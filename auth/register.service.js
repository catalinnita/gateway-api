import db from '../_db/db.js';
import { createStripeCustomer } from '../_helpers/stripe.js';
import { hashPassword } from '../_helpers/password.js';

const User = db.User;

const userExists = async ({ email }) => {
  return await User.findOne({ email });
}

const saveAccountData = async ({ name, email, password, customerId }) => {
  const userData = {
      name,
      email,
      password: hashPassword(password),
      customerId,
  }
  const user = new User(userData);
  await user.save();

  return user._doc;
}


const createAccount = async ({ name, email, password }) => {
  const customerId = await createStripeCustomer({ name, email });
  const user = await saveAccountData({ name, email, password, customerId })

  return user;
}

export { createAccount, userExists };
