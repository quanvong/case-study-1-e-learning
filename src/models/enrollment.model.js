const db = require('../config/db.config');

exports.createEnrollment = async (userId, courseId) => {
    const [result] = await db.execute(
        'INSERT INTO enrollments (userId, courseId, enrolled_at) VALUES (?, ?, NOW())',
        [userId, courseId]
    );
    return result;
};

exports.getEnrollmentById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM enrollments WHERE id = ?', [id]);
    return rows[0];
};

exports.getAllEnrollments = async () => {
    const [rows] = await db.query('SELECT * FROM enrollments');
    return rows;
};

exports.updateEnrollmentById = async (id, userId, courseId) => {
    const [result] = await db.execute(
        'UPDATE enrollments SET userId = ?, courseId = ? WHERE id = ?',
        [userId, courseId, id]
    );
    return result;
};

exports.deleteEnrollmentById = async (id) => {
    const [result] = await db.execute('DELETE FROM enrollments WHERE id = ?', [id]);
    return result;
};