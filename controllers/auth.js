const { StatusCodes } = require('http-status-codes');
const CustomerModel = require('../models/Customer');
const { generateToken } = require('../utils/jwt');

const signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const customer = new CustomerModel({ firstName, lastName, email, password });

  await customer.hashPassword();
  await customer.save();

  const token = generateToken({ id: customer.id, email });
  res.status(StatusCodes.CREATED).json({ firstName, lastName, email, token });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  const customer = await CustomerModel.findOne({ email }).exec();
  if (!customer) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'Invalid username or password' });
    return;
  }
  if (!(await customer.validatePassword(password))) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'Invalid username or password' });
    return;
  }
  const token = generateToken({ id: customer.id, email });
  res.json({ email, token });
};

module.exports = {
  signup,
  signin,
};
