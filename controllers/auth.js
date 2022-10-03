const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');

// Create token
const generateToken = (id, email) =>
  jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '2h' });

const signup = async (req, res) => {
  try {
    // Get customer input
    const { firstName, lastName, email, password } = req.body;
    // Validate customer input
    if (!(firstName && lastName && email && password)) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: 'All input is required' });
    }
    // Validate if customer already exist
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(StatusCodes.CONFLICT).json({ error: 'User Already Exist' });
    }
    // Encrypt password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create new customer
    const newCustomer = await Customer.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    // Create token
    // const token = jwt.sign({ _id: newCustomer._id, email }, process.env.JWT_SECRET, {
    //   expiresIn: '2h',
    // });
    const token = generateToken(newCustomer.id, email);

    // Save user token
    newCustomer.token = token;
    return res.status(StatusCodes.OK).json({ newCustomer, token });
  } catch (err) {
    return res.status(StatusCodes.CONFLICT).json(err);
  }
};

const signin = async (req, res) => {
  try {
    // Get customer input
    const { email, password } = req.body;
    // Validate customer input
    if (!(email && password)) {
      return res.status(StatusCodes.CONFLICT).json({ error: 'All input is required' });
    }
    // Validate if customer exist
    const customer = await Customer.findOne({ email });
    if (customer && (await bcrypt.compare(password, customer.password))) {
      // Create token
      const token = generateToken(customer.id, email);
      // Save user token
      customer.token = token;
      return res.status(StatusCodes.OK).json({ customer, token });
    }
    return res.status(StatusCodes.CONFLICT).json({ error: 'Invalid Credentials' });
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  signup,
  signin,
};
