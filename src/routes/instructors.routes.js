const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructor.controller.js');

//Thiet lap router
router.get('/', instructorController.getAllInstructor);
router.get('/:id', instructorController.getInstructorById);
router.post('/', instructorController.createInstructor);
router.put('/:id', instructorController.updateInstructorById);
router.delete('/:id', instructorController.deleteInstructorById);

module.exports = router;