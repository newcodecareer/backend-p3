const { Router } = require('express');
const {
  createNewSkilllist,
  getAllNewskills,
  getNewskills,
  deleteSkillslist,
} = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/', createNewSkilllist);
skilllistRouter.get('/', getAllNewskills);
skilllistRouter.get('/:id', getNewskills);
skilllistRouter.delete('/:id', deleteSkillslist);

module.exports = skilllistRouter;
