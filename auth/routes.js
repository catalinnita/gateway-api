import express from 'express';
import loginController from './login.controller.js';
import registerController from './register.controller.js';
import paymentController from './payment.controller.js';
import subscriptionController from './subscription.controller.js';

const authRoutes = express.Router();

authRoutes.post('/login', [loginController, subscriptionController]);
authRoutes.post('/register', [registerController, subscriptionController]);
authRoutes.post('/payment', [paymentController, subscriptionController]);

export {
  authRoutes
}
