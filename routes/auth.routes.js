const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');
const validation = require('../middlewares/validate.middleware.js');
const {registerSchema, loginSchema} = require('../validations/auth.validation.js')

//Thiet lap router
router.post('/register',validation(registerSchema), authController.registerUser);
router.post('/login',validation(loginSchema), authController.loginUser);

module.exports = router;