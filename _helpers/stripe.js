import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY);

const createStripeCustomer = async (user) => {
  const customer = await stripe.customers.create(user);
  return customer.id;
}

const createPaymentMethod = async (card) => {
  const paymentMethod = await stripe.paymentMethods.create(
    {
      type: 'card',
      card: {
        number: card.number,
        exp_month: card.expMonth,
        exp_year: card.expYear,
        cvc: card.cvc,
      },
    });

  return paymentMethod.id;
}

const attachPaymentMethod = async (paymentMethodId, customerId) => {
  return await stripe.paymentMethods.attach(
    paymentMethodId,
    { customer: customerId },
  );
}

export {
  createStripeCustomer,
  createPaymentMethod,
  attachPaymentMethod
};
