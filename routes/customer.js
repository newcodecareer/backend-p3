const { Router } = require('express');
const { createNewCustomer, getCustomerById } = require('../controllers/customer');

const customerRouter = Router();

customerRouter.get('/customer/:id', getCustomerById);
customerRouter.post('/create-customer', createNewCustomer);

module.exports = customerRouter;
