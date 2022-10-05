const { StatusCodes } = require('http-status-codes');
const Post = require('../models/Post');

const createNewPost = async (req, res) => {
  try {
    const { authorId, title, onDate, location, details, budget, isActive, tradieId } = req.body;

    const newPost = await Post({
      authorId,
      title,
      onDate,
      location,
      details,
      budget,
      isActive,
      tradieId,
    }).save();

    return res.status(StatusCodes.OK).json(newPost);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(StatusCodes.OK).json(posts);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);

    return res.status(StatusCodes.OK).json(post);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, onDate, location, details, budget, isActive } = req.body;
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: id },
      { title, onDate, location, details, budget, isActive },
      { new: true }
    );
    return res.status(StatusCodes.OK).json(updatedPost);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
};
