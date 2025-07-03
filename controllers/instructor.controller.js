const instructorModel = require('../models/instructor.model.js');

exports.getAllInstructors = async (req, res) => {
  try {
    const instructors = await instructorModel.getAllInstructor();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ message: 'Lay danh sach that bai', error: error.message });
  }
}

exports.getInstructorById = async (req, res) => {
  const id = req.params.id;
  try {
    const instructor = await instructorModel.getInstructorById(id);
    if(!instructor) {
        return res.status(404).json({message: 'Giang vien khong ton tai'});
    }
    res.status(200).json(instructor);
  } catch (error) {
    res.status(500).json({ message: 'Lay thong tin giang vien that bai', error: error.message });
  }
}

exports.deleteInstructor = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await instructorModel.deleteInstructor(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Giang vien khong ton tai' });
        }
        res.status(200).json({ message: 'Xoa giang vien thanh cong' });
    } catch (error) {
        res.status(500).json({ message: 'Xoa giang vien that bai', error: error.message });
    }
}

exports.createInstructor = async (req, res) => {
    const { name, email, degree, major } = req.body;
    try {
        const result = await instructorModel.createInstructor({ name, email, degree, major });
        if(!result) {
            return res.status(400).json({message: 'Giang vien da ton tai'});
        }
        res.status(201).json({ message: 'Tao giang vien thanh cong', instructor: result });
    } catch (error) {
        res.status(500).json({ message: 'Tao giang vien that bai', error: error.message });
    }
}

exports.updateInstructor = async (req, res) => {
    const id = req.params.id;
    const { name, email, degree, major } = req.body;
    try {
        const result = await instructorModel.updateInstructor(id, { name, email, degree, major });
        if(result.affectedRows === 0) {
            return res.status(404).json({ message: 'Giang vien khong ton tai' });
        }
        res.status(200).json({ message: 'Cap nhat giang vien thanh cong', instructor: { id, name, email, degree, major } });
    } catch (error) {
        res.status(500).json({ message: 'Cap nhat giang vien that bai', error: error.message });
    }
}