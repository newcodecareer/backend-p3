const { Router } = require('express');
const {
  createNewSkillList,
  getAllSkillLists,
  getSkillListById,
  deleteSkillListById,
  updateSkillListById,
} = require('../controllers/skillList');

const skillListRouter = Router();

skillListRouter.post('/', createNewSkillList);
skillListRouter.get('/', getAllSkillLists);
skillListRouter.get('/:id', getSkillListById);
skillListRouter.delete('/:id', deleteSkillListById);
skillListRouter.put('/:id', updateSkillListById);

module.exports = skillListRouter;
