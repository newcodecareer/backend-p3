const { Router } = require('express');
const {
  createNewSkilllist,
  getALLNewskills,
  getNewskills,
  deleteSkillslist,
} = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/', createNewSkilllist);
skilllistRouter.get('/', getALLNewskills);
skilllistRouter.get('/:id', getNewskills);
skilllistRouter.delete('/:id', deleteSkillslist);

module.exports = skilllistRouter;
