const { Router } = require('express');
const { createNewSkilllist } = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/skilllist', createNewSkilllist);

module.exports = skilllistRouter;