import express from 'express';
import loginController from './login.controller.js';
import registerController from './register.controller.js';
import paymentController from './payment.controller.js';
import subscriptionController from './subscription.controller.js';

const authRouter = express.Router();

authRouter.post('/login', [loginController, subscriptionController]);
authRouter.post('/register', [registerController, subscriptionController]);
authRouter.post('/payment', [paymentController, subscriptionController]);

export default {
  authRouter
}
