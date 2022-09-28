const express = require('express');
const userRouter = require('./user');
const customerRouter = require('./customer');
const postRouter = require('./post');

const commentRouter = require('./comment');

const v1Router = express.Router();

v1Router.use('/users', userRouter);
v1Router.use('/customers', customerRouter);
v1Router.use('/posts', postRouter);


v1Router.use('/comment', commentRouter);

module.exports = v1Router;
