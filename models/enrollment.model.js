const db = require('../config/database.js');

//Lay danh sach tat ca dang ky
exports.getAllEnrollments = async () => {
    const [rows] = await db.execute('SELECT * FROM enrollments');
    return rows;
};

//Lay danh sach dang ky theo id
exports.getEnrollmentById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM enrollments WHERE id = ?', [id]);
    return rows[0];
};

//Xoa danh sach dang ky theo id
exports.deleteEnrollment = async (id) => {
    const [result] = await db.execute('DELETE FROM enrollments WHERE id = ?', [id]);
    return result.affectedRows;
};

//Them moi dang ky
exports.createEnrollment = async (data) => {
    const { user_id, course_id, credits, enrolled_at, status } = data;
    const [result] = await db.execute(
        'INSERT INTO enrollments (user_id, course_id, credits, enrolled_at, status) VALUES (?, ?, ?, ?, ?)',
        [user_id, course_id, credits, enrolled_at, status]
    );
    return result.insertId;
};

//Cap nhat dang ky theo id
exports.updateEnrollment = async (id, data) => {
    const { user_id, course_id, credits, enrolled_at, status } = data;
    const [result] = await db.execute(
        'UPDATE enrollments SET user_id = ?, course_id = ?, credits = ?, enrolled_at = ?, status = ? WHERE id = ?',
        [user_id, course_id, credits, enrolled_at, status, id]
    );
    return result.affectedRows;
};