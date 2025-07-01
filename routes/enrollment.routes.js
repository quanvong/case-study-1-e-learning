const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollment.controller');

//Thiet lap router
router.get('/', enrollmentController.getAllEnrollments);
router.get('/:id', enrollmentController.getEnrollmentById);
router.post('/', enrollmentController.createEnrollment);
router.put('/:id', enrollmentController.updateEnrollment);
router.delete('/:id', enrollmentController.deleteEnrollment);

module.exports = router;