const { Router } = require('express');

const { createNewPost, getPostById, updatePostById } = require('../controllers/post');

const postRouter = Router();

postRouter.get('/:id', getPostById);
postRouter.post('/', createNewPost);
postRouter.put('/:id', updatePostById);

module.exports = postRouter;
