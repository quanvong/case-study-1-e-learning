const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollment.controller');
const { authToken } = require('../middlewares/auth.middleware.js');
const { authorizeRoles } = require('../middlewares/authorize.middleware.js');
const enrollSchema = require('../validations/enrollment.validation.js');
const validation = require('../middlewares/validate.middleware.js');

//Thiet lap router
router.get('/', enrollmentController.getAllEnrollments);
router.get('/:id', enrollmentController.getEnrollmentById);
router.post('/',validation(enrollSchema) ,authToken, authToken, authorizeRoles('admin', 'instructor'), enrollmentController.createEnrollment);
router.put('/:id',validation(enrollSchema), authToken, authToken, authorizeRoles('admin', 'instructor'), enrollmentController.updateEnrollment);
router.delete('/:id',authToken, authToken, authorizeRoles('admin', 'instructor'), enrollmentController.deleteEnrollment);

module.exports = router;