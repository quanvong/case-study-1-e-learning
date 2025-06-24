const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth.controller');

//Thiet lap endpoint
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;