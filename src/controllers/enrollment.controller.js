const enrollmentModel = require('../models/enrollment.model');

exports.createEnrollment = async (req, res) => {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
        return res.status(400).json({message: 'Thieu thong tin dang ky'});
    }
    try {
        const enrollments = await enrollmentModel.createEnrollment(userId, courseId);
        res.status(200).json({message: 'Dang ky thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Loi dang ky', error: error.message});
    }
}

exports.getEnrollmentById = async (req, res) => {
    const id = req.params.id;
    try {
        const enrollment = await enrollmentModel.getEnrollmentById(id);
        if (!enrollment) {
            return res.status(404).json({message: 'Id khong ton tai'});
        }
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({message: 'Loi truy van dang ky', error: error.message});
    }
};

exports.getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await enrollmentModel.getAllEnrollments();
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({message: 'Loi truy van danh sach dang ky', error: error.message});
    }
};

exports.updateEnrollmentById = async (req, res) => {
    const id = req.params.id;
    const { userId, courseId } = req.body;
    try {
        const result = await enrollmentModel.updateEnrollmentById(id, userId, courseId);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Dang ky khong ton tai'});
        }
        res.status(200).json({message: 'Cap nhat dang ky thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Loi cap nhat dang ky', error: error.message});
    }
};

exports.deleteEnrollmentById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await enrollmentModel.deleteEnrollmentById(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Dang ky khong ton tai'});
        }
        res.status(200).json({message: 'Xoa dang ky thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Loi xoa dang ky', error: error.message});
    }
};
