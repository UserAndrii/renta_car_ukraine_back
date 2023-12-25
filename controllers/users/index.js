const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./getCurrentUser');
const logOutUser = require('./logoutUser');

const verifyUserEmail = require('./verifyUserEmail');
const resendVerifyUserEmail = require('./resendVerifyUserEmail');

const toggleUsersFavoriteCar = require('../users/toggleUsersFavoriteCar');

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,

  verifyUserEmail,
  resendVerifyUserEmail,
  toggleUsersFavoriteCar,
};
