const courseModel = require('../models/course.model');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.getAllCourses();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({message: "Loi truy van database", error: error.message});
    }
};

exports.getCourseById = async (req, res) => {
    const {id} = req.params;
    try {
        const course = await courseModel.getCourseById(id);
        if (!course) {
            return res.status(404).json({message: "Khoa hoc khong ton tai"});
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({message: "Loi truy van database", error: error.message});
    }
};

exports.createCourse = async (req, res) => {
    try {
        const result = await courseModel.createCourse(req.body);
        res.status(201).json({message: "Khoa hoc da duoc tao", courseId: result.insertId});
    } catch (error) {
        res.status(500).json({message: "Tao khoa hoc that bai", error: error.message});
    }
};

exports.updateCourseById = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await courseModel.updateCourseById(id, req.body);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: "Khoa hoc khong ton tai"});
        }
        res.status(200).json({message: "Khoa hoc da duoc cap nhat"});
    } catch (error) {
        res.status(500).json({message: "Cap nhat khoa hoc that bai", error: error.message});
    }
};

exports.deleteCourseById = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await courseModel.deleteCourseById(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: "Khoa hoc khong ton tai"});
        }
        res.status(200).json({message: "Khoa hoc da duoc xoa"});
    } catch (error) {
        res.status(500).json({message: "Loi truy van database", error: error.message});
    }
};