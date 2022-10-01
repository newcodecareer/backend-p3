const { StatusCodes } = require('http-status-codes');
const Comment = require('../models/Comment');

// create comment
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

// delete comment by id

const deleteCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteComment = await Comment.findOneAndDelete({ _id: id });
    return res.status(StatusCodes.OK).json(deleteComment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// get comment by id
const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id);

    return res.status(StatusCodes.OK).json(comment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewComment,
  deleteCommentById,
  getCommentById,
};
