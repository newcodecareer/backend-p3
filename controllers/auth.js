const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');

// const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!(firstName && lastName && email && password)) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: 'All input is required' });
    }
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(StatusCodes.CONFLICT).json({ error: 'User Already Exist' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newCustomer = await Customer.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ _id: newCustomer._id, email }, process.env.TOKEN_KEY, {
      expiresIn: '2h',
    });
    newCustomer.token = token;

    // const token = generateToken(newCustomer._id);

    return res.status(StatusCodes.OK).json(newCustomer);
  } catch (err) {
    return res.status(StatusCodes.CONFLICT).json(err);
  }
};

module.exports = {
  signup,
};
