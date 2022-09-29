const { Router } = require('express');

const { 
    createNewSkilllist,
    updateSkilllistById,
} = require('../controllers/skilllist');

const skilllistRouter = Router();

skilllistRouter.post('/', createNewSkilllist);
skilllistRouter.patch('/:id', updateSkilllistById);

module.exports = skilllistRouter;