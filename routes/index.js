const express = require('express');
const userRouter = require('./user');
const customerRouter = require('./customer');
const authRouter = require('./auth');
const postRouter = require('./post');
const commentRouter = require('./comment');
const skillListRouter = require('./skillList');
const likePostRouter = require('./likePost');
const authGuard = require('../middleware/authGuard');

const v1Router = express.Router();

v1Router.use('/users', userRouter);
v1Router.use('/customers', authGuard, customerRouter);
v1Router.use('/auth', authRouter);
v1Router.use('/skill-lists', authGuard, skillListRouter);
v1Router.use('/posts', postRouter);
v1Router.use('/comments', commentRouter);
v1Router.use('/like-posts', likePostRouter);

module.exports = v1Router;
