const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

//Thiet lap endpoint
router.get('/',userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;