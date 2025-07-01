const db = require('../config/database.js');

exports.getAllQuizzes = async () => {
    const [rows] = await db.query('SELECT * FROM quizzes');
    return rows;
}

exports.getQuizById = async (id) => {
    const [rows] = await db.query('SELECT * FROM quizzes WHERE id = ?', [id]);
    return rows[0];
}

exports.createQuiz = async (data) => {
    const { title, course_id, question_count, duration } = data;
    const [result] = await db.query('INSERT INTO quizzes (title, course_id, question_count, duration) VALUES (?, ?, ?, ?)', [title, course_id, question_count, duration]);
    return result.insertId;
}

exports.updateQuiz = async (id, data) => {
    const { title, course_id, question_count, duration } = data;
    await db.query('UPDATE quizzes SET title = ?, course_id = ?, question_count = ?, duration = ? WHERE id = ?', [title, course_id, question_count, duration, id]);
    return result.affectedRows;
}

exports.deleteQuiz = async (id) => {
    const [result] = await db.query('DELETE FROM quizzes WHERE id = ?', [id]);
    return result.affectedRows;
}