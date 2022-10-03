const { Router } = require('express');
const {
  createNewSkilllist,
  getAllNewskills,
  getNewskills,
  deleteSkillslist,
  updateSkilllistById,
} = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/', createNewSkilllist);
skilllistRouter.get('/', getAllNewskills);
skilllistRouter.get('/:id', getNewskills);
skilllistRouter.delete('/:id', deleteSkillslist);
skilllistRouter.patch('/:id', updateSkilllistById);

module.exports = skilllistRouter;
