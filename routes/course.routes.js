const express = require('express');
const router = express.Router();
const courseControllers = require('../controllers/course.controller.js');

//Thiet lap router
router.get('/', courseControllers.getAllCourses);
router.get('/:id', courseControllers.getCourseById);
router.post('/', courseControllers.createCourse);
router.put('/:id', courseControllers.updateCourse);
router.delete('/:id', courseControllers.deleteCourse);
module.exports = router;