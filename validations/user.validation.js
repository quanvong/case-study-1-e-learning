const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
        .min(6)
        .max(100)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).+$'))
        .messages({
            'string.pattern.base': 'Password phải có chữ hoa, chữ thường, số và ký tự đặc biệt'
        })
        .required(),
    role: Joi.string().valid('admin', 'instructor', 'student')
});

module.exports = userSchema;