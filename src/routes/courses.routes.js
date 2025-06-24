const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller.js');

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);
router.put('/:id', courseController.updateCourseById);
router.delete('/:id', courseController.deleteCourseById);

module.exports = router;