const db = require('../config/db.config');

// Lấy danh sách tất cả các khóa học
exports.getAllCourses = async () => {
    const [rows] = await db.query('SELECT * FROM courses');
    return rows;
};

// Lấy khóa học theo id
exports.getCourseById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM courses WHERE id = ?', [id]);
    return rows[0];
};

// Tạo khóa học mới
exports.createCourse = async (course) => {
    const {name, description, duration, instructorId, level} = course;
    const [result] = await db.execute(
        'INSERT INTO courses(name, description, duration, instructorId, level) VALUES(?, ?, ?, ?, ?)',
        [name, description, duration, instructorId, level]
    );
    return result;
};

// Cập nhật khóa học theo id
exports.updateCourseById = async (id, course) => {
    const {name, description, duration, instructorId, level} = course;
    const [result] = await db.execute(
        'UPDATE courses SET name = ?, description = ?, duration = ?, instructorId = ?, level = ? WHERE id = ?',
        [name, description, duration, instructorId, level, id]
    );
    return result;
};

// Xóa khóa học theo id
exports.deleteCourseById = async (id) => {
    const [result] = await db.execute('DELETE FROM courses WHERE id = ?', [id]);
    return result;
};