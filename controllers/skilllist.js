const { StatusCodes } = require('http-status-codes');
const skillList = require('../models/skillList');

//POST - create new skill list


const createNewSkillList = async (req, res) => {
  const { category, title, description, price, distance, avaliability } =
    req.body;

  try {
    const newSkillList = await skillList({
      category,
      title,
      description,
      price,
      distance,
      avaliability,
    }).save();

    return res.status(StatusCodes.OK).json(newSkillList);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

const getAllNewSkillList = async (req, res) => {
  try {
    const skillList = await skillList.find();
    res.status(200).json({
      status: 'success',
      data: {
        skillList,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const getNewSkillList = async (req, res) => {
  try {
    const skillLists = await skillList.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        skillLists,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const deleteSkillList = async (req, res) => {
  try {
    await skillList.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const updateSkillListById = async (req, res) => {
  const { id } = req.params;
  const { category, title, description, price, distance, avaliability } =
    req.body;

  try {
    const updatedSkillList = await skillList.findOneAndUpdate(
      { _id: id },
      { category, title, description, price, distance, avaliability },
      { new: true }
    );

    return res.status(StatusCodes.OK).json(updatedSkillList);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};

module.exports = {
  createNewSkillList,
  getAllNewSkillList,
  getNewSkillList,
  deleteSkillList,
  updateSkillListById,
};
