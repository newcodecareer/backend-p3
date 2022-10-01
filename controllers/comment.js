const { StatusCodes } = require('http-status-codes');
const Comment = require('../models/Comment');

const createNewComment = async (req, res) => {
  const { text, post, customer } = req.body;

  try {
    const newComment = await Comment({
      text,
      post,
      customer,
    }).save();
    return res.status(StatusCodes.OK).json(newComment);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id);

    return res.status(StatusCodes.OK).json(comment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

const updateCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const updateComment = await Comment.findOneAndUpdate({ _id: id }, req.body);
    return res.status(StatusCodes.OK).json(updateComment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewComment,
  getCommentById,
  updateCommentById,
};
