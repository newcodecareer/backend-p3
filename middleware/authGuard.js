const { StatusCodes } = require('http-status-codes');
const { validateToken } = require('../utils/jwt');

module.exports = (req, res, next) => {
  const authorization = req.header('Authorization');
  if (!authorization) {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: 'missing authorization header' });
    return;
  }
  const tokenArray = authorization.split(' ');
  if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: 'invalid authorization header format' });
    return;
  }
  const payload = validateToken(tokenArray[1]);
  req.user = payload;
  next();
};
