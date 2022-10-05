const { Router } = require('express');

const { createNewPost, getPostById, updatePostById, getAllPosts } = require('../controllers/post');

const postRouter = Router();

postRouter.get('/:id', getPostById);
postRouter.get('/', getAllPosts);
postRouter.post('/', createNewPost);
postRouter.put('/:id', updatePostById);

module.exports = postRouter;
