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

const getCustomerById = async (req, res) => {
  const { id } = req.param;
  try {
    const customer = await Customer.findById(id);
    return res.status(StatusCodes.OK).json(customer);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

const updateCustomerById = async (req, res) => {
  const { id } = req.param;
  try {
    const updateCustomer = await Customer.findOneAndUpdate({ _id: id }, req.body);
    return res.status(StatusCodes.OK).json(updateCustomer);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
};
