const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructor.controller');
const { authToken } = require('../middlewares/auth.middleware.js');
const { authorizeRoles } = require('../middlewares/authorize.middleware.js');

// Route to get all instructors
router.get('/', instructorController.getAllInstructors);
router.get('/:id', instructorController.getInstructorById);
router.post('/',authToken, authorizeRoles('admin', 'instructor'), instructorController.createInstructor);
router.put('/:id',authToken, authorizeRoles('admin', 'instructor'), instructorController.updateInstructor);
router.delete('/:id',authToken, authorizeRoles('admin', 'instructor'), instructorController.deleteInstructor);

module.exports = router;
