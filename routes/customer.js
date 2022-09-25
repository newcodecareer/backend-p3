const { Router } = require('express');
const { createNewCustomer } = require('../controllers/customer');

const customerRouter = Router();

customerRouter.post('/create-customer', createNewCustomer);

module.exports = customerRouter;
