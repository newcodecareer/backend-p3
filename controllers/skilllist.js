const { StatusCodes } = require('http-status-codes');
const Skilllist = require('../models/Skilllist');

const createNewSkilllist = async (req, res) => {
  const { Listcategory, Listtitle, Listdescription, Listprice, Listdistance, Listavaliability } =
    req.body;

  try {
    const NewSkilllist = await Skilllist({
      Listcategory,
      Listtitle,
      Listdescription,
      Listprice,
      Listdistance,
      Listavaliability,
    }).save();

    return res.status(StatusCodes.OK).json(NewSkilllist);
  } catch (err) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

const getAllNewskills = async (req, res) => {
  try {
    const skilllist = await Skilllist.find();
    res.status(200).json({
      status: 'success',
      data: {
        skilllist,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const getNewskills = async (req, res) => {
  try {
    const Skilllists = await Skilllist.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        Skilllists,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const deleteSkillslist = async (req, res) => {
  try {
    await Skilllist.findByIdAndDelete(req.params.id);
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

module.exports = {
  createNewSkilllist,
  getAllNewskills,
  getNewskills,
  deleteSkillslist,
};
