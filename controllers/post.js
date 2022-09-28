const { StatusCodes } = require('http-status-codes');
const Post = require('../models/Post');

const createNewPost = async (req, res) => {
  const {
    customerId,
    title,
    onDate,
    beforeDate,
    flexibleDate,
    inPerson,
    online,
    country,
    suburb,
    details,
    budget,
    status,
    tradieId,
    comments,
  } = req.body;

  try {
    const newPost = await Post({
      customerId,
      title,
      onDate,
      beforeDate,
      flexibleDate,
      inPerson,
      online,
      country,
      suburb,
      details,
      budget,
      status,
      tradieId,
      comments,
    }).save();

    return res.status(StatusCodes.OK).json(newPost);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
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
  try {
    const updatePost = await Post.findOneAndUpdate({ _id: id }, req.body);
    return res.status(StatusCodes.OK).json(updatePost);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewPost,
  getPostById,
  updatePostById,
};
