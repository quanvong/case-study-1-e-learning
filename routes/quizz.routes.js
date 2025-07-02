const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizz.controller');
const { authToken } = require('../middlewares/auth.middleware.js');
const { authorizeRoles } = require('../middlewares/authorize.middleware.js');

//Thiet lap router
router.get('/', quizzController.getAllQuizzes);
router.get('/:id', quizzController.getQuizById);
router.post('/',authToken,authorizeRoles('admin', 'instructor'), quizzController.createQuiz);
router.put('/:id',authToken,authorizeRoles('admin', 'instructor'), quizzController.updateQuiz);
router.delete('/:id',authToken,authorizeRoles('admin', 'instructor'), quizzController.deleteQuiz);

module.exports = router;