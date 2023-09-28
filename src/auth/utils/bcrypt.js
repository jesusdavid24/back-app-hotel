const bcrypt = require('bcrypt');
const crypto = require('crypto');

const hashPassword = async (password, factor) => {
  const salt = await bcrypt.genSalt(factor);
  const data = await bcrypt.hash(password, salt);
  return data;
};

const comparePassword = async (password, hashedPassword) => {
  const comparedPassword = await bcrypt.compare(password, hashedPassword);
  return comparedPassword;
};

const hashPasswordSync = (password, factor) => {
  const salt = bcrypt.genSaltSync(factor);
  return bcrypt.hashSync(password, salt);
};

const createHashToken = (data) => {
  return crypto.createHash('sha256').update(data).digest('hex');
};

module.exports = {
  hashPassword,
  comparePassword,
  hashPasswordSync,
  createHashToken,
};
