const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructor.controller');

// Route to get all instructors
router.get('/', instructorController.getAllInstructors);
router.get('/:id', instructorController.getInstructorById);
router.post('/', instructorController.createInstructor);
router.put('/:id', instructorController.updateInstructor);
router.delete('/:id', instructorController.deleteInstructor);

module.exports = router;
