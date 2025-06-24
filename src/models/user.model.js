const db = require('../config/db.config');

//Truy van database de tao User
exports.createUser = async(user) => {
    const {name, email, password} = user;
    const [result] = await db.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
    );
    return result.insertId;
}

//Truy van database de lay danh sach users
exports.getAllUsers = async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
}

//Truy van database de lay users theo id
exports.getUserById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
}

//Truy van database de cap nhat user theo id
exports.updateUserById = async (id, user) => {
    const {name, email, password} = user;
    const [result] = await db.execute(
        'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
        [name, email, password, id]
    );
    return result;
}

//Truy van database de xoa user theo id
exports.deleteUserById = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result;
}
