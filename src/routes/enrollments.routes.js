const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollment.controller');

//Thiet lap end point
router.post('/', enrollmentController.createEnrollment);
router.get('/', enrollmentController.getAllEnrollments);
router.get('/:id', enrollmentController.getEnrollmentById);
router.put('/:id', enrollmentController.updateEnrollmentById);
router.delete('/:id', enrollmentController.deleteEnrollmentById);

module.exports = router;