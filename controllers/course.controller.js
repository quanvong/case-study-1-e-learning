const courseModel = require('../models/course.model.js');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.getAllCourses();
        res.status(200).json(courses);
    } catch(error) {
        res.status(500).json({message: "Lay danh sach that bai", error: error.message});
    }
}

exports.getCourseById = async(req, res) => {
    const id = req.params.id;
    try {
        const course = await courseModel.getCourseById(id);
        if(!course) {
            return res.status(404).json({ message: "Không tìm thấy khóa học" });
        }
        res.status(200).json(course);
    } catch(error) {
        res.status(500).json({message: "Lay danh sach that bai", error: error.message});
    }
}

exports.createCourse = async(req, res) => {
    const {title, description, instructor_id, category, duration, level} = req.body;

    try {
        const courseId = await courseModel.createCourse({title, description, instructor_id, category, duration, level});
        if(!courseId) {
            return res.status(400).json({message: 'Khoa hoc da ton tai'});
        }
        res.status(201).json({message: "Khoa hoc da tao thanh cong", id: courseId});
    } catch (error) {
        res.status(500).json({message: "Tao khoa hoc that bai", error: error.message});
    }
}

exports.updateCourse = async(req, res) => {
    const id = req.params.id;
    const {title, description, instructor_id, category, duration, level} = req.body;

    try {
        const affectedRows = await courseModel.updateCourse(id ,
            {title, description, instructor_id, category, duration, level}
        );
        if (affectedRows === 0) {
            return res.status(404).json({message: 'Khoa hoc chua ton tai'});
        }
        res.status(200).json({message: "Khoa hoc da update thanh cong"});
    } catch (error) {
        res.status(500).json({message: "Update khoa hoc that bai", error: error.message});
    }
}

exports.deleteCourse = async(req, res) => {
    const id = req.params.id;

    try {
        const affectedRows = await courseModel.deleteCourse(id);
        if(affectedRows === 0) {
            return res.status(404).json({message: 'Khoa hoc chua ton tai'});
        }
        res.status(200).json({message: "Khoa hoc da delete thanh cong"});
    } catch (error) {
        res.status(500).json({message: "Delete khoa hoc that bai", error: error.message});
    }
}