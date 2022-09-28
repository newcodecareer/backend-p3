const { Router } = require('express');
const {
  createNewComment,
} = require('../controllers/comment');

const commentRouter = Router();

commentRouter.post('/', createNewComment);

module.exports = commentRouter;