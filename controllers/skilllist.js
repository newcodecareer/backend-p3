const { StatusCodes } = require('http-status-codes');
const Skilllist = require('../models/Skilllist');

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
  
  module.exports = {
    createNewSkilllist,
  };
  