const { Router } = require('express');
const {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
  deleteCustomerById,
} = require('../controllers/customer');

const customerRouter = Router();

customerRouter.get('/', getAllCustomers);
customerRouter.get('/:id', getCustomerById);
customerRouter.post('/', createNewCustomer);
// customerRouter.put('/:id', updateCustomerById);
customerRouter.patch('/:id', updateCustomerById);
customerRouter.delete('/:id', deleteCustomerById);

module.exports = customerRouter;
