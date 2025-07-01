const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizz.controller');

//Thiet lap router
router.get('/', quizzController.getAllQuizzes);
router.get('/:id', quizzController.getQuizById);
router.post('/', quizzController.createQuiz);
router.put('/:id',quizzController.updateQuiz);
router.delete('/:id', quizzController.deleteQuiz);

module.exports = router;