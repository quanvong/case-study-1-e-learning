const Joi = require('joi');

// Dinh nghia Schema de kiem tra du lieu
const courseSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).required(),
    instructor_id: Joi.number().integer().required(),
    category: Joi.string().required(),
    duration: Joi.number().integer().min(1).required(),
    level: Joi.string().valid('Beginner', 'Intermediate', 'Advanced').required()
});

module.exports = courseSchema;