const db = require('../config/db.config');

//Lay danh sach tat ca giang vien
exports.getAllInstructor = async () => {
    const [rows] = await db.query('SELECT * FROM instructors');
    return rows;
}

//Lay danh sach giang vien theo id
exports.getInstructorById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM instructors WHERE id = ?', [id]);
    return rows[0];
}

//Tao giang vien
exports.createInstructor = async (instructor) => {
    const {name, email, bio, specialty} = instructor;
    const result = await db.execute(
        'INSERT INTO instructors(name, email, bio, specialty) VALUES(?, ?, ?, ?)',
        [name, email, bio, specialty]
    );
    return result;
}

//Cap nhat giang vien theo id
exports.updateInstructorById = async (id, instructor) => {
    const {name, email, bio, specialty} = instructor;
    const result = await db.execute(
        'UPDATE instructors SET name = ?, email = ?, bio = ?, specialty = ? WHERE id = ? ',
        [name, email, bio, specialty, id]
    );
    return result;
}

//Xoa giang vien theo id
exports.deleteInstructorById = async (id) => {
    const result = await db.execute('DELETE FROM instructors WHERE id = ?', [id]);
    return result;
}