const { Router } = require('express');
const { createNewSkilllist, getAllNewskills, getNewskills } = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/', createNewSkilllist);
skilllistRouter.get('/', getAllNewskills);
skilllistRouter.get('/:id', getNewskills);

module.exports = skilllistRouter;
