const Joi = require('joi');

const { emailRegexp } = require('../../helpers');

const loginSchema = Joi.object({
  email: Joi.string().trim().pattern(emailRegexp).required().messages({
    'any.required': 'Missing required email field',
    'string.empty': 'The "email" field must not be empty',
    'string.pattern.base': 'Invalid email format',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'Missing required password field',
    'string.empty': 'The "password" field must not be empty',
    'string.min':
      'The "password" field must be at least {#limit} characters long',
  }),
});
module.exports = { loginSchema };
