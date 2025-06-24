const db = require('../config/db.config');

//Truy van database de dang ky nguoi dung
exports.registerUser = async(userData) => {
    const {name, email, password} = userData;
    const [result] = await db.execute('INSERT INTO users(name, email, password) VALUES(?, ?, ?)', [name, email, password]);
    return result.insertId;
}

//Truy van database de dang nhap nguoi dung
exports.loginUser = async(email) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows;
}