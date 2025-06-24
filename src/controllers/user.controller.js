const userModel = require('../models/user.model');

//Lay danh sach tat ca nguoi dung
exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: 'Loi truy van database', error: error.message});
    }
}

//Lay danh sach nguoi dung theo id
exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.getUserById(id);
        //Kiem tra neu user khong ton tai
        if (!user) {
            return res.status(404).json({message: 'User khong ton tai'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: 'Loi truy van database', error: error.message});
    }
}

//Tao user moi
exports.createUser = async (req, res) => {
    const newUser = req.body;
    try {
        const createdUser = await userModel.createUser(newUser);
        res.status(201).json({message: 'Tao user thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Tao user khong thanh cong', error: error.message});
    }
}

//Xoa user theo id
exports.deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userModel.deleteUserById(id);
        //Kiem tra neu user khong ton tai
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'User khong ton tai'});
        }
        res.status(200).json({message: 'User da duoc xoa'});
    } catch (error) {
        res.status(500).json({message: 'Xoa user khong thanh cong', error: error.message});
    }
}

//Update user theo id
exports.updateUserById = async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    try {
        const result = await userModel.updateUserById(id, updatedUser);
        //Kiem tra neu user khong ton tai
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'User khong ton tai'});
        }
        res.status(200).json({message: 'User da duoc cap nhat'});
    } catch (error) {
        res.status(500).json({message: 'Cap nhat user khong thanh cong', error: error.message});
    }
}
