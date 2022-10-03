const { Router } = require('express');
const {
  createNewSkillList,
  getAllNewSkillList,
  getNewSkillList,
  deleteSkillList,
  updateSkillListById,
} = require('../controllers/skillList');

const skillListRouter = Router();

skillListRouter.post('/', createNewSkillList);
skillListRouter.get('/', getAllNewSkillList);
skillListRouter.get('/:id', getNewSkillList);
skillListRouter.delete('/:id', deleteSkillList);
skillListRouter.patch('/:id', updateSkillListById);

module.exports = skillListRouter;
