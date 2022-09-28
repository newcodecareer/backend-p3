const express = require('express');
//const { createNewSkilllist } = require('../controllers/skilllist');
const skillController = require('../controllers/skilllist');

const router = express.Router();

//skilllistRouter.post('/skilllist', createNewSkilllist);
//skilllistRouter.post('/', createNewSkilllist);
router.route('/').post(skillController.createNewSkillist).get(skillController.getAllNewSkillist);

router.route('/:id').get(skillController.getOneNewSkillist);

module.exports = router;
