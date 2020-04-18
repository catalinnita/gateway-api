import doLogin from './login.service.js';
import { generateToken } from '../_helpers/jwt.js';

const loginController = async (req, res, next) => {
  try {
    // do the login
    const user = await doLogin(req.body);

    // generate token using user object
    const token = generateToken(user);

    // if there is a user with a sunbscription return the user object including token
    if (user.subscriptionId) {
      return res.status(200).json(token);
    }

    // go to subscription creation
    next();

  } catch (err) {
    next(err);
  }
}

export default loginController;
