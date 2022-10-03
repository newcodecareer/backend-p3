const { Router } = require('express');

const { createNewPost, getPostById, updatePostById } = require('../controllers/post');

const postRouter = Router();

postRouter.get('/:id', getPostById);
postRouter.post('/', createNewPost);
postRouter.patch('/:id', updatePostById);

module.exports = postRouter;
