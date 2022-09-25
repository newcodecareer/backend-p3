const { Router } = require('express');
const {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
} = require('../controllers/customer');

const customerRouter = Router();

customerRouter.get('/customer/:id', getCustomerById);
customerRouter.post('/customer', createNewCustomer);
customerRouter.put('/customer/:id', updateCustomerById);
module.exports = customerRouter;
