const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller.js');

//Thiet lap endpoint
router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUserById);
router.delete('/:id', userControllers.deleteUser);
router.post('/', userControllers.createUser);
router.put('/:id', userControllers.updateUser);

module.exports = router;