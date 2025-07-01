const db = require('../config/database.js');

// Get all users
exports.getAllUsers = async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
};

// Get user by ID
exports.getUserById = async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

// Delete user by Id
exports.deleteUser = async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows;
};


// Create a new user
exports.createUser = async (data) => {
    const { username, email, password, role, status } = data;
    const [result] = await db.execute('INSERT INTO users (username, email, password, role, status) VALUES (?, ?, ?, ?, ?)', [username, email, password, role, status]);
    return { id: result.insertId };
};

// Update user by ID
exports.updateUser = async (id, data) => {
    const { username, email, password, role, status } = data;
    const [result] = await db.execute('UPDATE users SET username = ?, email = ?, password = ?, role = ?, status = ? WHERE id = ?', [username, email, password, role, status, id]);
    return result.affectedRows;
};