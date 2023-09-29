const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET);

  return decoded;
};

const signToken = (payload) => {
  const token = jwt.sign(payload, SECRET, {
    expiresIn: `${1000 * 60 * 60 * 24}`,
  });

  return token;
};

module.exports = {
  verifyToken,
  signToken,
};
