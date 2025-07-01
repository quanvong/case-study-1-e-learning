const db = require('../config/database');

//Lay danh sach tat ca khoa hoc
exports.getAllCourses = async () => {
    const [rows] = await db.execute('SELECT * FROM courses');
    return rows;
}

//Lay danh asch tat ca khoa hoc theo id
exports.getCourseById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM courses WHERE id = ?', [id]);
    return rows[0];
}

//Tao khoa hoc
exports.createCourse = async (data) => {
    const {title, description, instructor_id, category, duration, level} = data;

    const [result] = await db.execute('INSERT INTO courses(title, description, instructor_id, category, duration, level) VALUES(?, ?, ?, ?, ?, ?)',
        [title, description, instructor_id, category, duration, level]
    );
    return result.insertId; 
}

//Cap nhat khoa hoc theo id
exports.updateCourse = async(id, data) => {
    const { title, description, instructor_id, category, duration, level } = data;
    const result = await db.execute('Update courses SET title = ?, description=?, instructor_id=?, category=?, duration=?, level=? WHERE id=?', 
        [title, description, instructor_id, category, duration, level]
    );
    return result.affectedRows;
}

//Xoa khoa hoc theo id
exports.deleteCourse = async(id) => {
    const [result] = await db.execute('DELETE FROM courses WHERE id = ?', [id]);
    return result.affectedRows;
}