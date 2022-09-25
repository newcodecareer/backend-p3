const express = require('express');
const userRouter = require('./user');
const customerRouter = require('./customer');

const v1Router = express.Router();

v1Router.use('/users', userRouter);
v1Router.use('/customers', customerRouter);

module.exports = v1Router;
