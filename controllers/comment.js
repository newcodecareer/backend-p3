const { StatusCodes } = require('http-status-codes');
const Comment = require('../models/Comment');

// create comment
const createNewComment = async (req, res) => {
  const { text, date, postId, customerId } = req.body;

  try {
    const newComment = await Comment({
      text,
      date,
      postId,
      customerId,
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
    const deletedComment = await Comment.findOneAndDelete({ _id: id });
    return res.status(StatusCodes.OK).json(deletedComment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// Get: all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    return res.status(StatusCodes.OK).json(comments);
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

// PUT: update comment by id
const updateCommentById = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const updatedComment = await Comment.findOneAndUpdate({ _id: id }, { text }, { new: true });
    return res.status(StatusCodes.OK).json(updatedComment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewComment,
  deleteCommentById,
  getAllComments,
  getCommentById,
  updateCommentById,
};
