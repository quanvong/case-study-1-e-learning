const enrollmentModel = require('../models/enrollment.model');

exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await enrollmentModel.getAllEnrollments();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Loi tao danh sach dang ky', error: error.message });
  }
}

exports.getEnrollmentById = async (req, res) => {
  const id = req.params.id;
  try {
    const enrollment = await enrollmentModel.getEnrollmentById(id);
    if (!enrollment) {
      return res.status(404).json({ message: 'Dang ky khong ton tai' });
    }
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: 'Loi lay thong tin dang ky', error: error.message });
  }
}

exports.deleteEnrollment = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await enrollmentModel.deleteEnrollment(id);
        if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Dang ky khong ton tai' });
        }
        res.status(200).json({ message: 'Xoa dang ky thanh cong' });
    } catch (error) {
        res.status(500).json({ message: 'Loi xoa dang ky', error: error.message });
    }
}

exports.createEnrollment = async (req, res) => {
  const { user_id, course_id, credits, enrolled_at, status } = req.body;
  try {
    const result = await enrollmentModel.createEnrollment({user_id, course_id, credits, enrolled_at, status});
    res.status(201).json({ message: 'Dang ky thanh cong', enrollmentId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Loi tao dang ky', error: error.message });
  }
}

exports.updateEnrollment = async (req, res) => {
  const id = req.params.id;
  const { user_id, course_id, credits, enrolled_at, status } = req.body;
  try {
    const result = await enrollmentModel.updateEnrollment(id, {user_id, course_id, credits, enrolled_at, status});
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Dang ky khong ton tai' });
    }
    res.status(200).json({ message: 'Cap nhat dang ky thanh cong' });
  } catch (error) {
    res.status(500).json({ message: 'Loi cap nhat dang ky', error: error.message });
  }
}