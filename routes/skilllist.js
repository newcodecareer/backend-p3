const { Router } = require('express');
const { createNewSkilllist } = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/', createNewSkilllist);

module.exports = skilllistRouter;