const { Router } = require('express');
const {
  createNewComment,
  deleteCommentById,
  getCommentById,
  getAllComments,
  updateCommentById,
} = require('../controllers/comment');

const commentRouter = Router();

commentRouter.post('/', createNewComment);
commentRouter.delete('/:id', deleteCommentById);
commentRouter.get('/:id', getCommentById);
commentRouter.get('/', getAllComments);
commentRouter.put('/:id', updateCommentById);

module.exports = commentRouter;
