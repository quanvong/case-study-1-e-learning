exports.authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // req.user đã được gán ở middleware xác thực JWT
        if(!req.user || !allowedRoles.includes(req.user.role)) {
            return res.status(403).json({message: "Ban khong co quyen truy cap vao he thong"});
        }
        next();
    }
}