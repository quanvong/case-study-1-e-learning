const instructorModel = require('../models/instructor.model');

exports.getAllInstructor = async (req, res) => {
    try {
        const instructors = await instructorModel.getAllInstructor();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({message: 'Truy van that bai', error: error.message});
    }
};

exports.getInstructorById = async (req, res) => {
    const {id} = req.params;
    try {
        const instructor = await instructorModel.getInstructorById(id);
        if(!instructor) {
            return res.status(404).json({message: "Id cua instructor khong ton tai"});
        }
        res.status(200).json(instructor);
    } catch (error) {
        res.status(500).json({message: 'Loi truy van database', error: error.message});
    }
}

exports.createInstructor = async (req, res) => {
    const newInstructor = req.body;
    try {
        const result = await instructorModel.createInstructor(newInstructor);
        res.status(201).json({message: "Tao instructor thanh cong", insertId: result.insertId});
    } catch (error) {
        res.status(500).json({message: 'Tao instructor that bai', error: error.message});
    }
};

exports.updateInstructorById = async (req, res) => {
    const {id} = req.params;
    const updatedInstructor = req.body;

    try {
        const result = await instructorModel.updateInstructorById(id, updatedInstructor);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Instructor khong ton tai'});
        }
        res.status(200).json({message: 'Cap nhat instructor thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Cap nhat instructor that bai', error: error.message});
    }
}

exports.deleteInstructorById = async (req, res) => {
    const {id} = req.params;
    
    try {
        const result = await instructorModel.deleteInstructorById(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Instructor khong ton tai'});
        }
        res.status(200).json({message: 'Xoa instructor thanh cong'});
    } catch (error) {
        res.status(500).json({message: 'Xoa instructor that bai', error: error.message});
    }
}