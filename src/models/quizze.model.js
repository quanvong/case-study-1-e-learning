const db = require('../config/db.config');

exports.getAllQuizze = async () => {
    const [rows] = await db.query('SELECT * FROM quizzes');
    return rows;
};

exports.getQuizzeById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM quizzes WHERE id = ?', [id]);
    return rows[0];
};

exports.createQuizze = async (quizze) => {
    const { title, courseId, total_questions, duration } = quizze;
    const [result] = await db.execute(
        'INSERT INTO quizzes (title, courseId, total_questions, duration, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())',
        [title, courseId, total_questions, duration]
    );
    return result;
};

exports.updateQuizzeById = async (id, quizze) => {
    const { title, courseId, total_questions, duration } = quizze;
    const [result] = await db.execute(
        'UPDATE quizzes SET title = ?, courseId = ?, total_questions = ?, duration = ?, updated_at = NOW() WHERE id = ?',
        [title, courseId, total_questions, duration, id]
    );
    return result;
};

exports.deleteQuizzeById = async (id) => {
    const [result] = await db.execute('DELETE FROM quizzes WHERE id = ?', [id]);
    return result;
};