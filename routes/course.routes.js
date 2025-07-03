const express = require('express');
const router = express.Router();
const courseControllers = require('../controllers/course.controller.js');
const { authToken } = require('../middlewares/auth.middleware.js');
const { authorizeRoles } = require('../middlewares/authorize.middleware.js');
const courseSchema = require('../validations/course.validation.js');
const validation = require('../middlewares/validate.middleware.js');
const sanitize = require('../middlewares/sanitize.middleware.js');


//Thiet lap router
router.get('/', courseControllers.getAllCourses);
router.get('/:id', courseControllers.getCourseById);
router.post('/',sanitize(['title', 'description', 'category']) , validation(courseSchema), authToken, authorizeRoles('admin', 'instructor'), courseControllers.createCourse);
router.put('/:id',sanitize(['title', 'description', 'category']), validation(courseSchema), authToken, authorizeRoles('admin', 'instructor'), courseControllers.updateCourse);
router.delete('/:id', authToken, authorizeRoles('admin', 'instructor'),courseControllers.deleteCourse);

module.exports = router;