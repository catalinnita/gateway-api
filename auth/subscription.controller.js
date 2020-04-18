import config from './config.js';
import Stripe from 'stripe';
import db from '../_db/db.js';
import { generateToken } from '../_helpers/jwt.js';

const User = db.User;
const stripe = new Stripe(process.env.STRIPE_KEY);

const createSubscription = async ({ email, name, customerId }) => {
  const { planId } = config;

  // create subscription
  const subscription = await stripe.subscriptions.create({
    customer: customerId,
    payment_behavior: 'allow_incomplete',
    trial_from_plan: true,
    items: [{ plan: planId }],
  });

  // save subid and customerid in db
  const user = await User.findOneAndUpdate(
    { email: email },
    { subscriptionId: subscription.id },
    { new: true }
  );

  return user;
}

const subscriptionController = async (req, res, next) => {
  const user = await createSubscription(res.locals.user);
  const token = generateToken(user);
  return res.status(200).json(token);
};

export default subscriptionController;
