const Joi = require('joi');

const instructorSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    degree: Joi.string().valid('Cử nhân', 'Thạc sĩ', 'Tiến sĩ').required(),
    major: Joi.string().min(3).max(100).required()
});

module.exports = instructorSchema;