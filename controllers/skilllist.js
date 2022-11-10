const { StatusCodes } = require('http-status-codes');
const SkillList = require('../models/SkillList');

// POST - create new skill list

const createNewSkillList = async (req, res) => {
  const { category, title, description, price, distance, location, availability, customer } =
    req.body;

  try {
    const newSkillList = await SkillList({
      category,
      title,
      description,
      price,
      distance,
      location,
      availability,
      customer,
    }).save();

    return res.status(StatusCodes.OK).json(newSkillList);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

const getAllSkillLists = async (req, res) => {
  try {
    const allSkillLists = await SkillList.find();
    return res.status(StatusCodes.OK).json(allSkillLists);
    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     allSkillList,
    //   },
    // });
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
    // res.status(404).json({
    //   status: 'fail',
    //   message: err,
    // });
  }
};

const getSkillListById = async (req, res) => {
  const { id } = req.params;
  try {
    const skillList = await SkillList.findById(id);
    return res.status(StatusCodes.OK).json(skillList);
    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     skillLists,
    //   },
    // });
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
    // res.status(404).json({
    //   status: 'fail',
    //   message: err,
    // });
  }
};

const deleteSkillListById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSkillList = await SkillList.findOneAndDelete({ _id: id });
    return res.status(StatusCodes.OK).json(deletedSkillList);
    // res.status(204).json({
    //   status: 'success',
    //   data: null,
    // });
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
    // res.status(404).json({
    //   status: 'fail',
    //   message: err,
    // });
  }
};

const updateSkillListById = async (req, res) => {
  const { id } = req.params;
  const { category, title, description, price, distance, location, availability } = req.body;
  try {
    const updatedSkillList = await SkillList.findByIdAndUpdate(
      id,
      { category, title, description, price, distance, location, availability },
      { new: true }
    );

    return res.status(StatusCodes.OK).json(updatedSkillList);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewSkillList,
  getAllSkillLists,
  getSkillListById,
  deleteSkillListById,
  updateSkillListById,
};
