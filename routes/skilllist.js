const { Router } = require('express');
const { createNewSkilllist, getALLNewskills, getNewskills } = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/', createNewSkilllist);
skilllistRouter.get('/', getALLNewskills);
skilllistRouter.get('/:id', getNewskills);

module.exports = skilllistRouter;
