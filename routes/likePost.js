const { Router } = require('express');

const {
  createLikePost,
  getLikePostById,
  deleteLikePostById,
  getAllLikePosts,
} = require('../controllers/likePost');

const likePostRouter = Router();

likePostRouter.post('/', createLikePost);
likePostRouter.get('/', getAllLikePosts);
likePostRouter.get('/:id', getLikePostById);
likePostRouter.delete('/:id', deleteLikePostById);

module.exports = likePostRouter;
