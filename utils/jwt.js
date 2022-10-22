const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

const validateToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

module.exports = {
  generateToken,
  validateToken,
};
