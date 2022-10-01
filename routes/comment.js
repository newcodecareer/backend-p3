const { Router } = require('express');
const {
  createNewComment,
  // updateCommentById,
  getCommentById,
} = require('../controllers/comment');

const commentRouter = Router();

commentRouter.get('/:id', getCommentById);
commentRouter.post('/', createNewComment);
// commentRouter.patch('/:id', updateCommentById);

module.exports = commentRouter;
