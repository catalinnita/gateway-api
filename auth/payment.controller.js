import { createPaymentMethod, attachPaymentMethod } from '../_helpers/stripe.js'

const paymentController = async (req, res, next) => {
  try {
    const { card } = req.body;
    const user = res.locals.user = req.user;
    const paymentMethodId = await createPaymentMethod(card);
    await attachPaymentMethod(paymentMethodId, user.customerId);
    next();
  } catch (err) {
    next(err);
  }
};

export default paymentController;
