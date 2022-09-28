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

module.exports = {
  createNewComment,
};
