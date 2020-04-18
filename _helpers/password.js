import bcrypt from 'bcryptjs';

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
}

export {
  hashPassword
};
