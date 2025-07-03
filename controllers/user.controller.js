const userModel = require('../models/user.model.js');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();

        const userWithoutPassword = users.map(({password, ...user}) => user);
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(500).json({ message: "Lấy danh sách người dùng thất bại", error: error.message });
    }
}

exports.getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        const {password, ...userWithoutPassword} = user;
        res.status(200).json(userWithoutPassword);
    } catch (error) {
        res.status(500).json({ message: "Lấy thông tin người dùng thất bại", error: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await userModel.deleteUser(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        res.status(200).json({ message: "Xóa người dùng thành công" });
    } catch (error) {
        res.status(500).json({ message: "Xóa người dùng thất bại", error: error.message });
    }
}

exports.createUser = async (req, res) => {
    const { username, email, password, role} = req.body;
    try {
        const result = await userModel.createUser({ username, email, password, role});
        if (!result) {
            return res.status(400).json({ message: "Người dùng đã tồn tại" });
        }
        res.status(201).json({ message: "Tạo người dùng thành công", user: result });
    } catch (error) {
        res.status(500).json({ message: "Tạo người dùng thất bại", error: error.message });
    }
}

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { username, email, password, role} = req.body;
    try {
        const result = await userModel.updateUser(id, { username, email, password, role,});
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }
        res.status(200).json({ message: "Cập nhật người dùng thành công", user: { id, username, email, role} });
    } catch (error) {
        res.status(500).json({ message: "Cập nhật người dùng thất bại", error: error.message });
    }
}