const { Router } = require('express');
const {
  createNewComment,
  deleteCommentById,
  getCommentById,
  updateCommentById,
} = require('../controllers/comment');

const commentRouter = Router();

commentRouter.post('/', createNewComment);
commentRouter.delete('/:id', deleteCommentById);
commentRouter.get('/:id', getCommentById);
commentRouter.patch('/:id', updateCommentById);

module.exports = commentRouter;
