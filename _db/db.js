import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './user.model.js';

dotenv.config();

mongoose.connect(
  process.env.CONNECTION_STRING,
  {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

mongoose.Promise = global.Promise;

export default User;
