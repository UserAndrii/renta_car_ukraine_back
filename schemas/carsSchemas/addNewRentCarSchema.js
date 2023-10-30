const Joi = require('joi');

const addNewRentCarSchema = Joi.object({
  year: Joi.number()
    .integer()
    .min(1900)
    .max(new Date().getFullYear())
    .required()
    .messages({
      'any.required': 'Enter the car year',
      'number.base': 'The "year" field must be a number',
      'number.integer': 'The "year" field must be an integer',
      'number.min': 'The "year" field must be at least {#limit}',
      'number.max': 'The "year" field must be at most {#limit}',
    }),
  make: Joi.string().required().messages({
    'any.required': 'Enter the car make',
    'string.empty': 'The "make" field must not be empty',
  }),
  model: Joi.string().required().messages({
    'any.required': 'Enter the car model',
    'string.empty': 'The "model" field must not be empty',
  }),
  type: Joi.string()
    .valid(
      'Microcar',
      'Subcompact Car',
      'Compact Car',
      'Mid-size Car',
      'Full-size Car',
      'SUV',
      'Crossover',
      'Convertible',
      'Sports Car',
      'Luxury Car',
      'Electric Car',
      'Hybrid Car'
    )
    .required()
    .messages({
      'any.required': 'Enter the car type',
      'string.empty': 'The "type" field must not be empty',
      'any.only': 'Invalid car type',
    }),
  engineSize: Joi.string().required().messages({
    'any.required': 'Enter the car engine size',
    'string.empty': 'The "engineSize" field must not be empty',
  }),
  rentalPrice: Joi.string().required().messages({
    'any.required': 'Enter the car price',
    'string.empty': 'The "rentalPrice" field must not be empty',
  }),
  rentalCompany: Joi.string().required().messages({
    'any.required': 'Enter the rental company',
    'string.empty': 'The "rentalCompany" field must not be empty',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Enter the rental company address',
    'string.empty': 'The "address" field must not be empty',
  }),
  rentalConditions: Joi.string().required().messages({
    'any.required': 'Enter the rental conditions',
    'string.empty': 'The "rentalConditions" field must not be empty',
  }),
  mileage: Joi.number().integer().min(0).required().messages({
    'any.required': 'Enter the car mileage',
    'number.base': 'The "mileage" field must be a number',
    'number.integer': 'The "mileage" field must be an integer',
    'number.min': 'The "mileage" field must be at least {#limit}',
  }),
});

module.exports = { addNewRentCarSchema };
