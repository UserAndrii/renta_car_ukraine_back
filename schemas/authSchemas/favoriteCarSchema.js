const Joi = require('joi');

const favoriteCarSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Missing required id field',
    'string.empty': 'The "id" field must not be empty',
  }),
});

module.exports = { favoriteCarSchema };
