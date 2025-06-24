const userModel = require('../models/auth.model');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        //Kiem tra thong tin nguoi dung
        if(!name || !email || !password) {
            return res.status(400).json({message: 'Thieu thong tin dang ky'});
        }
        //Ma hoa mat khau
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await userModel.registerUser({name, email, password: hashedPassword});
        res.status(200).json({message: 'Dang ky thanh cong'})
    } catch (error) {
        res.status(500).json({message: 'Dang ky that bai', error : error.message});
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        //Kiem tra thong tin nguoi dung
        if(!email || !password) {
            return res.status(400).json({message: 'Thieu thong tin dang nhap'});
        }
        //Truy van database de lay thong tin nguoi dung theo email
        const users = await userModel.loginUser(email);
        if(users.length === 0) {
            return res.status(401).json({message: 'Email khong ton tai'});
        }
        //So sanh mat khau 
        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Sai mat khau'});
        }

        res.status(200).json({message: 'Dang nhap thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Dang nhap that bai', error: error.message});
    }
}

