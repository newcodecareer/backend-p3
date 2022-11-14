const { StatusCodes } = require('http-status-codes');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

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
    const posts = await Post.find({}).exec();
    return res.status(StatusCodes.OK).json(posts);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id).populate('comments').exec();
    if (!post) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'post not found' });
    }
    return res.status(StatusCodes.OK).json(post);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, onDate, location, details, budget, isActive } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, onDate, location, details, budget, isActive },
      { new: true, runValidators: true, context: 'query' }
      // we also can use Jio for the upper
    ).exec();
    if (!updatedPost) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'post not found' });
    }
    return res.status(StatusCodes.OK).json(updatedPost);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// delete customerPost by ID
const deletePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePost = await Post.findByIdAndDelete(id).exec();

    if (!deletePost) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'post not found' });
    }
    return res.status(StatusCodes.OK).json(deletePost);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// add comment to post
const addPostWithComment = async (req, res) => {
  const { postId, commentId } = req.params;
  let post = await Post.findById(postId).exec();
  const comment = await Comment.findById(commentId).exec();

  if (!post || !comment) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'This not found' });
  }

  // add post to comment.
  await Comment.findByIdAndUpdate(commentId, { $push: { post: postId } }, { new: true });

  // add comment to customer
  post = await Post.findByIdAndUpdate(
    postId,
    { $addToSet: { comments: commentId } },
    { new: true }
  );

  res.json(post);
};

const removePostFromComment = async (req, res) => {
  const { postId, commentId } = req.params;
  let post = await Post.findById(postId).exec();
  const comment = await Comment.findById(commentId).exec();

  if (!post || !comment) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'post or comment not found' });
    return;
  }
  post = await Post.findByIdAndUpdate(
    postId,
    {
      $pull: {
        comments: commentId,
      },
    },
    { new: true }
  ).exec();
  await Comment.findByIdAndUpdate(commentId, {
    $pull: {
      post: postId,
    },
  }).exec();
  res.json(post);
};

module.exports = {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  addPostWithComment,
  removePostFromComment,
};
