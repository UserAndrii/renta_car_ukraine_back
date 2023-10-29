const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const { regexp } = require('../helpers');

/**
 *  Mongoose Schema
 */

const usersSchema = new Schema({
  userName: { type: String, required: [true, 'UserName is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [regexp.emailRegexp, 'Invalid email format'],
  },
  password: {
    type: String,
    required: [true, 'Set password for user'],
    minlenght: [6, 'The password field must be at least 6 characters long'],
  },
  token: { type: String, default: '' },
  verify: { type: Boolean, default: false },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  favoriteCars: [String],
});

usersSchema.post('save', handleMongooseError);

const User = model('user', usersSchema);
module.exports = { User };
