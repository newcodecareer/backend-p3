const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
const Comment = require('../models/Comment');

// create comment
const createNewComment = async (req, res) => {
  const { text, date, post, customer, isAssigned } = req.body;
  try {
    const newComment = await Comment({
      text,
      date,
      post,
      customer,
      isAssigned,
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
    const deletedComment = await Comment.findByIdAndDelete(id).exec();
    if (!deletedComment) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'comment not found' });
    }
    return res.status(StatusCodes.OK).json(deletedComment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// Get: all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).exec();
    return res.status(StatusCodes.OK).json(comments);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// get comment by id
const getCommentById = async (req, res) => {
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id).exec();
    if (!comment) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'comment not found' });
    }
    return res.status(StatusCodes.OK).json(comment);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// PUT: update comment by id
const updateCommentById = async (req, res) => {
  const { id } = req.params;
  // const { text } = req.body;
  const schema = Joi.object({
    text: Joi.string().trim().min(2).max(500).required(),
  });
  try {
    const { text } = await schema.validateAsync(req.body, {
      allowUnknown: true,
      stripUnknown: true,
    });
    const updatedComment = await Comment.findByIdAndUpdate(id, { text }, { new: true }).exec();
    if (!updatedComment) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'comment not found' });
    }
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
