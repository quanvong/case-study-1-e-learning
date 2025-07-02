const bcrypt = require('bcrypt');
const db = require('../config/database.js');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    // Nhan du lieu tu client
    const {username, email, password, role} = req.body;

    // Kiem tra du lieu dau vao 
    if(!username || !email || !password || !role) {
        return res.status(400).json({message: "Thieu truong du lieu vui long nhap lai"});
    }

    try {
        // Kiem tra xem username hoac email da ton tai hay chua
        const [users] = await db.execute('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);
        if(users.length > 0) {
            return res.status(400).json({message: "Username or email da ton tai"});
        }

        // Ma hoa mat khau
        const hashedPassword = await bcrypt.hash(password, 10);

        // Luu user moi vao database
        await db.execute(
            'INSERT INTO users(username, email, password, role, status) VALUES(?,?,?,?, ?)',
            [username, email, hashedPassword, role, 'active']
        );
        res.status(201).json({message: 'Dang ky thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Dang ky that bai', error: error.message});
    }
}

exports.loginUser = async (req, res) => {
    //Nhan du lieu tu client
    const {username, password} = req. body;

    //Kiem tra du lieu dau vao
    if (!username || !password) {
        return res.status(400).json({ message: 'Thiếu username hoặc password' });
    }

    try {
        //Kiem tra user theo email trong database
        const [users] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
        if (users.length === 0) {
            return res.status(400).json({message: 'username khong ton tai'});
        }

        //So sanh mat khau
        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Sai mat khau'});
        }

        //Tao JWT token
        const token = jwt.sign(
            {userId: user.id, role: user.role},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );
    
    //Tra ve token cho client
        res.status(200).json({
            message: 'Dang nhap nhanh cong',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({message: 'Dang nhap that bai', error: error.message});
    }
}