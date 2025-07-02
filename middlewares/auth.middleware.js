const jwt = require('jsonwebtoken');

exports.authToken = async (req, res, next) => {
    //Lay token tu header Authorization: Bearer <token>
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    //Kiem tra token
    if(!token) {
        return res.status(401).json({message: "Khong co token, truy cap bi tu choi"});
    }

    //Xac thuc token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({message: 'Token khong hop le'});
        }
    req.user = user;
    next();
    }) ;
}