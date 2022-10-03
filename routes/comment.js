const { Router } = require('express');
const { createNewComment, deleteCommentById, getCommentById } = require('../controllers/comment');

const commentRouter = Router();

commentRouter.post('/', createNewComment);
commentRouter.delete('/:id', deleteCommentById);
commentRouter.get('/:id', getCommentById);

module.exports = commentRouter;
