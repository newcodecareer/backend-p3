const { Router } = require('express');
const {
  createNewComment,
  deleteComment
} = require('../controllers/comment');

const commentRouter = Router();

commentRouter.post('/', createNewComment);
commentRouter.delete('/', deleteComment);


module.exports = commentRouter;