const Joi = require('joi');

const { emailRegexp } = require('../../helpers');

const updateShema = Joi.object({
  userName: Joi.string().min(3).max(40).messages({
    'any.required': 'Bad request (invalid request body)',
    'string.min':
      'The "userName" field must be at least {#limit} characters long',
  }),
  email: Joi.string().trim().pattern(emailRegexp).required().messages({
    'any.required': 'Missing required email field',
    'string.empty': 'The "email" field must not be empty',
    'string.pattern.base': 'Invalid email format',
  }),
});
module.exports = { updateShema };
