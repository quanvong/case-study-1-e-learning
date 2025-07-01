const db = require('../config/database');

//Lay danh sach tat ca giang vien
exports.getAllInstructor = async () => {
    const [rows] = await db.execute('SELECT * FROM instructors');
    return rows;
}

//Lay danh sach giang vien theo id
exports.getInstructorById = async(id) => {
    const [rows] = await db.execute('SELECT * FROM instructors WHERE id = ?', [id]);
    return rows[0];
}

//Xoa giang vien theo id
exports.deleteInstructor = async(id) => {
    const [result] = await db.execute('DELETE FROM instructors WHERE id = ?', [id]);
    return result.affectedRows;
}

//Tao giang vien moi
exports.createInstructor = async (data) => {
    const { name, email, degree, major } = data;
    const [result] = await db.execute('INSERT INTO instructors (name, email, degree, major) VALUES (?, ?, ?, ?)', [name, email, degree, major]);
    return result.insertId;
}

//Cap nhat thong tin giang vien
exports.updateInstructor = async(id, data) => {
    const { name, email, degree, major } = data;
    const [result] = await db.execute('UPDATE instructors SET name = ?, email = ?, degree = ?, major = ? WHERE id = ?', [name, email, degree, major, id]);
    return result.affectedRows;
}