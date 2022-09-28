const { StatusCodes } = require('http-status-codes');
const Skilllist = require('./../models/skilllist');

// exports.createNewSkilllist = async (req, res) => {
//   const { Listcategory, Listtitle, Listdescription, Listprice, Listdistance, Listavaliability } =
//     req.body;

//   try {
//     const NewSkilllist = await Skilllist(
//       Listcategory,
//       Listtitle,
//       Listdescription,
//       Listprice,
//       Listdistance,
//       Listavaliability
//     ).save();

//     return res.status(StatusCodes.OK).json(NewSkilllist);
//   } catch (err) {
//     return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
//   }
// };

exports.createNewSkillist = async (req, res) => {
  try {
    const NewSkilllists = await Skilllist.create(req.body);

    res.status(201).json({
      status: 'sucesss',
      data: {
        skilllist: NewSkilllists,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent ',
    });
  }
};

exports.getAllNewSkillist = async (req, res) => {
  try {
    const getskilllist = await Skilllist.find();

    res.status(200).json({
      status: 'success',
      results: getskilllist.length,
      data: {
        getskilllist,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getOneNewSkillist = async (req, res) => {
  try {
    const getskilllists = await Skilllist.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        getskilllists,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
