const { Router } = require('express');

const {
  createNewPost,
  getPostById,
  updatePostById,
  deletePostById,
} = require('../controllers/post');

const postRouter = Router();

postRouter.get('/:id', getPostById);
postRouter.post('/', createNewPost);
postRouter.patch('/:id', updatePostById);
postRouter.delete('/:id', deletePostById);
module.exports = postRouter;
