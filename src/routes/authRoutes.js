const express = require('express');
const authRouter = express.Router();
const { loginUser, logoutUser, generateNewAccessToken } = require('../controllers/authController');
const requireSignIn = require('../middleware/requireSignIn');
const { validateLogin } = require('../middleware/dataValidator');



authRouter.post('/login', validateLogin(), loginUser); 
authRouter.post('/logout', requireSignIn, logoutUser); 
authRouter.get('/token', generateNewAccessToken); 





module.exports = authRouter;

