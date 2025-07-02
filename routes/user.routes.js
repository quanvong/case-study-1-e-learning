const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller.js');
const { authToken } = require('../middlewares/auth.middleware.js');
const { authorizeRoles } = require('../middlewares/authorize.middleware.js');

//Thiet lap endpoint
router.get('/', userControllers.getAllUsers);
router.get('/:id', userControllers.getUserById);
router.delete('/:id',authToken, authorizeRoles('admin', 'instructor'), userControllers.deleteUser);
router.post('/',authToken, authorizeRoles('admin', 'instructor'), userControllers.createUser);
router.put('/:id',authToken, authorizeRoles('admin', 'instructor'), userControllers.updateUser);

module.exports = router;