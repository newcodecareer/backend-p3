const { StatusCodes } = require('http-status-codes');
const Customer = require('../models/Customer');

// POST: create new customer

const createNewCustomer = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, password } = req.body;

  try {
    const newCustomer = await Customer({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
    }).save();
    return res.status(StatusCodes.OK).json(newCustomer);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

// GET: get all customers data

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    return res.status(StatusCodes.OK).json(customers);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// GET: get customer data by id

const getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findById(id);
    return res.status(StatusCodes.OK).json(customer);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// PUT: update entire data for customer
// const updateCustomerById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updatedCustomer = await Customer.findOneAndUpdate({ _id: id }, req.body, { new: true });
//     return res.status(StatusCodes.OK).json(updatedCustomer);
//   } catch (err) {
//     return res.status(StatusCodes.NOT_FOUND).json(err);
//   }
// };

// PATCH: update piece data for customer
const updateCustomerById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phoneNumber, address, password } = req.body;
  try {
    const updatedCustomer = await Customer.findOneAndUpdate(
      { _id: id },
      { firstName, lastName, phoneNumber, address, password },
      { new: true }
    );
    return res.status(StatusCodes.OK).json(updatedCustomer);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
};
