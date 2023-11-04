const validateBody = require('./validateBody');
const authenticate = require('./authenticate');
const isValidId = require('./isValidId');

const uploadCarPhoto = require('./uploadCarPhoto');

module.exports = {
  validateBody,
  authenticate,
  isValidId,

  uploadCarPhoto,
};
