const quizzModel = require('../models/quizz.model.js');

exports.getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await quizzModel.getAllQuizzes();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Lấy danh sách quiz thất bại', error: error.message });
    }
};

exports.getQuizById = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await quizzModel.getQuizById(id);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz không tồn tại' });
        }
        res.status(200).json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Lấy thông tin quiz thất bại', error: error.message });
    }
};

exports.createQuiz = async (req, res) => {
    const { title, course_id, question_count, duration } = req.body;
    try {
        const insertId = await quizzModel.createQuiz({ title, course_id, question_count, duration });
        if (!insertId) {
            return res.status(400).json({ message: 'Quiz đã tồn tại hoặc tạo thất bại' });
        }
        res.status(201).json({ message: 'Tạo quiz thành công', id: insertId });
    } catch (error) {
        res.status(500).json({ message: 'Tạo quiz thất bại', error: error.message });
    }
};

exports.updateQuiz = async (req, res) => {
    const id = req.params.id;
    const { title, course_id, question_count, duration } = req.body;
    try {
        const affectedRows = await quizzModel.updateQuiz(id, { title, course_id, question_count, duration });
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Quiz không tồn tại' });
        }
        res.status(200).json({ message: 'Cập nhật quiz thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Cập nhật quiz thất bại', error: error.message });
    }
};

exports.deleteQuiz = async (req, res) => {
    const id = req.params.id;
    try {
        const affectedRows = await quizzModel.deleteQuiz(id);
        if (affectedRows === 0) {
            return res.status(404).json({ message: 'Quiz không tồn tại' });
        }
        res.status(200).json({ message: 'Xóa quiz thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Xóa quiz thất bại', error: error.message });
    }
};