const { Router } = require('express');
const {
  createNewComment,
  deleteCommentById,
} = require('../controllers/comment');

const commentRouter = Router();

commentRouter.post('/', createNewComment);
commentRouter.delete('/:id', deleteCommentById);


module.exports = commentRouter;