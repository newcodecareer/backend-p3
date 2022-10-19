const { StatusCodes } = require('http-status-codes');
const LikePost = require('../models/LikePost');

// like post
const createLikePost = async (req, res) => {
  const { postId, customerId, isLiked } = req.body;

  try {
    const newLikePost = await LikePost({
      postId,
      customerId,
      isLiked,
    }).save();
    return res.status(StatusCodes.OK).json(newLikePost);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

// GET: get all liked post data

const getAllLikePosts = async (req, res) => {
  try {
    const likePosts = await LikePost.find({});
    return res.status(StatusCodes.OK).json(likePosts);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// get liked post by id
const getLikePostById = async (req, res) => {
  const { id } = req.params;

  try {
    const likePost = await LikePost.findById(id);

    return res.status(StatusCodes.OK).json(likePost);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// unlike post by id
const deleteLikePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteLikePost = await LikePost.findOneAndDelete({ _id: id });
    return res.status(StatusCodes.OK).json(deleteLikePost);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createLikePost,
  getLikePostById,
  deleteLikePostById,
  getAllLikePosts,
};
