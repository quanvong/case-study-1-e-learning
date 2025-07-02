const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollment.controller');
const { authToken } = require('../middlewares/auth.middleware.js');
const { authorizeRoles } = require('../middlewares/authorize.middleware.js');

//Thiet lap router
router.get('/', enrollmentController.getAllEnrollments);
router.get('/:id', enrollmentController.getEnrollmentById);
router.post('/',authToken, authToken, authorizeRoles('admin', 'instructor'), enrollmentController.createEnrollment);
router.put('/:id',authToken, authToken, authorizeRoles('admin', 'instructor'), enrollmentController.updateEnrollment);
router.delete('/:id',authToken, authToken, authorizeRoles('admin', 'instructor'), enrollmentController.deleteEnrollment);

module.exports = router;