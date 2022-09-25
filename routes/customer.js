const { Router } = require('express');
const {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
} = require('../controllers/customer');

const customerRouter = Router();

customerRouter.get('/:id', getCustomerById);
customerRouter.post('/', createNewCustomer);
customerRouter.put('/:id', updateCustomerById);
module.exports = customerRouter;
