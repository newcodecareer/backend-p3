const { StatusCodes } = require('http-status-codes');
const Customer = require('../models/Customer');

const createNewCustomer = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, password } = req.body;

  try {
    const newCustomer = await Customer(
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password
    ).save();
    return res.status(StatusCodes.OK).json(newCustomer);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

module.exports = {
  createNewCustomer,
};
