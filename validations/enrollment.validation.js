const Joi = require('joi');

const enrollSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    course_id: Joi.number().integer().required(),
    credits: Joi.number().integer().min(1).required(),
    status: Joi.string().valid('active', 'completed', 'canceled')
});

module.exports = enrollSchema;