const express = require('express');
const userRouter = require('./user');
const customerRouter = require('./customer');
const authRouter = require('./auth');
const commentRouter = require('./comment');
const skilllistRouter = require('./skilllist');

const v1Router = express.Router();

v1Router.use('/users', userRouter);
v1Router.use('/customers', customerRouter);
v1Router.use('/auth', authRouter);


v1Router.use('/comment', commentRouter);
v1Router.use('/skilllists', skilllistRouter);

module.exports = v1Router;
