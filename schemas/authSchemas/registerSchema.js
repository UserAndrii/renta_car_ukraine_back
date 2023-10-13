const Joi = require('joi');

const { regexp } = require('../../helpers');

const registerSchema = Joi.object({
  userName: Joi.string().min(3).max(40).messages({
    'any.required': 'Bad request (invalid request body)',
    'string.min':
      'The "userName" field must be at least {#limit} characters long',
  }),
  email: Joi.string().trim().pattern(regexp.emailRegexp).required().messages({
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
module.exports = { registerSchema };
