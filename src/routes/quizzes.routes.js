const express = require('express');
const router = express.Router();
const quizzeController = require('../controllers/quizze.controller');

//Thiet lap endpoint
router.get('/', quizzeController.getAllQuizze);
router.get('/:id', quizzeController.getQuizzeById);
router.post('/', quizzeController.createQuizze);
router.put('/:id', quizzeController.updateQuizzeById);
router.delete('/:id', quizzeController.deleteQuizzeById);

module.exports = router;