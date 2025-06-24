const quizzeModel = require('../models/quizze.model');

exports.getAllQuizze = async (req, res) => {
    try {
        const quizzes = await quizzeModel.getAllQuizze();
        res.status(200).json(quizzes);
    } catch(error) {
        res.status(500).json({message: 'Truy van that bai', error: error.message});
    }
};

exports.getQuizzeById = async (req, res) => {
    const { id } = req.params;
    try {
        const quizze = await quizzeModel.getQuizzeById(id);
        if (!quizze) {
            return res.status(404).json({message: 'Quizze khong ton tai'});
        }
        res.status(200).json(quizze);
    } catch (error) {
        res.status(500).json({message: 'Loi truy van database', error: error.message});
    }
};

exports.createQuizze = async (req, res) => {
    const newQuizze = req.body;
    try {
        const createdQuizze = await quizzeModel.createQuizze(newQuizze);
        res.status(201).json({message: 'Tao quizze thanh cong', insertId: createdQuizze.insertId});
    } catch (error) {
        res.status(500).json({message: 'Tao quizze that bai', error: error.message});
    }
};

exports.updateQuizzeById = async (req, res) => {
    const { id } = req.params;
    const updatedQuizze = req.body;
    try {
        const result = await quizzeModel.updateQuizzeById(id, updatedQuizze);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Quizze khong ton tai'});
        }
        res.status(200).json({message: 'Cap nhat quizze thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Cap nhat quizze that bai', error: error.message});
    }
};

exports.deleteQuizzeById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await quizzeModel.deleteQuizzeById(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Quizze khong ton tai'});
        }
        res.status(200).json({message: 'Xoa quizze thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Xoa quizze that bai', error: error.message});
    }
};


