const { Router } = require('express');

const {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
} = require('../controllers/customer');

const customerRouter = Router();

customerRouter.get('/', getAllCustomers);
customerRouter.get('/:id', getCustomerById);
customerRouter.post('/', createNewCustomer);
// customerRouter.put('/:id', updateCustomerById);
customerRouter.patch('/:id', updateCustomerById);

module.exports = customerRouter;
