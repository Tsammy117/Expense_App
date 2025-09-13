const express= require('express');
const { loginController, registerController } = require('../controllers/userController');

//router object 
const router= express.Router();

//POST||login
router.post('/login', loginController);

//POST||RegisterUser
router.post('/register', registerController)

module.exports = router;