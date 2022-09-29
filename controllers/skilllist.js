const { StatusCodes } = require('http-status-codes');
const Skilllist = require('../models/Skilllist');

//POST - create new skill list

const createNewSkilllist = async (req, res) => {
  const { Listcategory, Listtitle, Listdescription, Listprice, Listdistance, Listavaliability } = req.body;
    
  try {
    const NewSkilllist = await Skilllist({
      Listcategory, 
      Listtitle, 
      Listdescription, 
      Listprice, 
      Listdistance, 
      Listavaliability
  }).save();

  return res.status(StatusCodes.OK).json(NewSkilllist);
  } catch (err) {
      return res.status(StatusCodes.NOT_IMPLEMENTED).json(err);
  }
};

//PATCH - Update skill list

const updateSkilllistById = async (req, res) => {
  const { id } = req.params;
  const { 
    Listcategory, 
    Listtitle, 
    Listdescription, 
    Listprice, 
    Listdistance, 
    Listavaliability 
  } = req.body;

  try {
    const updatedSkilllist = await Skilllist.findOneAndUpdate(
      { _id: id },
      { Listcategory, 
        Listtitle, 
        Listdescription, 
        Listprice, 
        Listdistance, 
        Listavaliability  
      },
      { new: true }
    );

    return res.status(StatusCodes.OK).json(updatedSkilllist);
  } catch (err) {
    return res.status(StatusCodes.NOT_FOUND).json(err);
  }
};




  
module.exports = {
  createNewSkilllist,
  updateSkilllistById
};
  