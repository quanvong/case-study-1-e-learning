const Joi = require('joi');

const quizSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    course_id: Joi.number().integer().required(),
    question_count: Joi.number().integer().min(1).required(),
    duration: Joi.number().integer().min(1).required()
});

module.exports = quizSchema;