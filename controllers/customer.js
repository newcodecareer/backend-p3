const { StatusCodes } = require('http-status-codes');
const Joi = require('joi');
const Comment = require('../models/Comment');
const Customer = require('../models/Customer');
const Post = require('../models/Post');

// POST: create new customer

const createNewCustomer = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, address, password } = req.body;

  try {
    const newCustomer = await Customer({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      password,
    }).save();
    return res.status(StatusCodes.OK).json(newCustomer);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

// GET: get all customers data

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({});
    return res.status(StatusCodes.OK).json(customers);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// GET: get customer data by id

const getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.findById(id);
    if (!customer) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'customer not found' });
    }
    return res.status(StatusCodes.OK).json(customer);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// PUT: update entire data for customer
// const updateCustomerById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const updatedCustomer = await Customer.findOneAndUpdate({ _id: id }, req.body, { new: true });
//     return res.status(StatusCodes.OK).json(updatedCustomer);
//   } catch (err) {
//     return res.status(StatusCodes.NOT_FOUND).json(err);
//   }
// };

// PATCH: update piece data for customer
const updateCustomerById = async (req, res) => {
  const { id } = req.params;
  // const { firstName, lastName, phoneNumber, address, password } = req.body;
  const schema = Joi.object({
    firstName: Joi.string().trim().min(2).max(50).required(),
    lastName: Joi.string().trim().min(2).max(50).required(),
    email: Joi.string().trim().lowercase().min(2).max(50).required().unique(),
    phoneNumber: Joi.string().trim().min(10).max(15),
    address: Joi.string().trim().min(10),
    password: Joi.string().trim().min(8).required(),
  });
  try {
  const { firstName, lastName, phoneNumber, address, password } = await schema.validateAsync(
    req.body,
    { allowUnknown: true, stripUnknown: true }
  );
    const updatedCustomer = await Customer.findByIdAndUpdate(
      id,
      { firstName, lastName, phoneNumber, address, password },
      { new: true }
    ).exec();
    if (!updatedCustomer) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'customer not found' });
    }
    return res.status(StatusCodes.OK).json(updatedCustomer);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

const deleteCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(id).exec();
    if (!deletedCustomer) {
      res.status(StatusCodes.NOT_FOUND).json({ error: 'customer not found' });
    }
    return res.status(StatusCodes.OK).json(deletedCustomer);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

// bind customer with posts, comments

// get id from req
// find documents by id
// check if them exist
// add a to b, then b to a
const addCustomerWithPost = async (req, res) => {
  const { id, postId } = req.params;
  let customer = await Customer.findById(id).exec();
  const post = await Post.findById(postId).exec();
  // let comment = await Comment.findById(id).exec();

  if (!customer || !post) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'This not found' });
  }

  // add customer to post.
  await Post.findByIdAndUpdate(postId, { $push: { customer: id } }, { new: true }).exec();

  // add post to customer
  customer = await Customer.findByIdAndUpdate(
    id,
    { $addToSet: { posts: postId } },
    { new: true }
  ).exec();

  res.json(customer);
};

// bind comment with customer
const addCustomerWithComment = async (req, res) => {
  const { id, commentId } = req.params;
  let customer = await Customer.findById(id).exec();
  const comment = await Comment.findById(commentId).exec();

  if (!customer || !comment) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'This not found' });
  }

  // add customer to comment.
  await Comment.findByIdAndUpdate(commentId, { $push: { customer: id } }, { new: true });

  // add comment to customer
  customer = await Customer.findByIdAndUpdate(
    id,
    { $addToSet: { comments: commentId } },
    { new: true }
  );

  res.json(customer);
};

// remove customer from posts, comments
const removeCustomerFromPost = async (req, res) => {
  const { id, postId } = req.params;
  let customer = await Customer.findById(id).exec();
  const post = await Post.findById(id).exec();

  if (!customer || !post) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'customer or post not found' });
    return;
  }
  customer = await Customer.findByIdAndUpdate(
    id,
    {
      $pull: {
        posts: postId,
      },
    },
    { new: true }
  ).exec();
  await Post.findByIdAndUpdate(postId, {
    $pull: {
      customers: id,
    },
  }).exec();
  res.json(customer);
};

const removeCustomerFromComment = async (req, res) => {
  const { id, commentId } = req.params;
  let customer = await Customer.findById(id).exec();
  const comment = await Comment.findById(commentId).exec();

  if (!customer || !comment) {
    res.status(StatusCodes.NOT_FOUND).json({ error: 'customer or comment not found' });
    return;
  }
  customer = await Customer.findByIdAndUpdate(
    id,
    {
      $pull: {
        comments: commentId,
      },
    },
    { new: true }
  ).exec();
  await Comment.findByIdAndUpdate(commentId, {
    $pull: {
      customers: id,
    },
  }).exec();
  res.json(customer);
};

module.exports = {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
  deleteCustomerById,
  addCustomerWithPost,
  addCustomerWithComment,
  removeCustomerFromPost,
  removeCustomerFromComment,
};
