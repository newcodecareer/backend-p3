const { Router } = require('express');
const { signup } = require('../controllers/auth');

const authRouter = Router();

authRouter.post('/signup/', signup);

module.exports = authRouter;
