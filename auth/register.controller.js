import config from './config.js';
import { createAccount, userExists } from './register.service.js';
import { generateToken } from '../_helpers/jwt.js';

const registerController = async (req, res, next) => {
  try {

    // if there is an account with the email throw an error
    if (await userExists(req.body)) {
      return res.status(200).json({ redirect: '/login' });
    }

    // create account including stripe customer
    const user = await createAccount(req.body);

    // generate token using user object
    const token = generateToken(user);

    // if payment is required redirect to payment
    if (config.requiredCreditCardTrial) {
      return res.status(200).json(token);
    }

    // go to subscription creation
    next();

  } catch(err) {
    next(err);
  }
}

export default registerController;
