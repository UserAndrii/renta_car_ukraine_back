const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./getCurrentUser');
const logOutUser = require('./logoutUser');
const updateUser = require('./updateUser');

const verifyUserEmail = require('./verifyUserEmail');
const resendVerifyUserEmail = require('./resendVerifyUserEmail');

const toggleUsersFavoriteCar = require('../users/toggleUsersFavoriteCar');

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,
  updateUser,

  verifyUserEmail,
  resendVerifyUserEmail,
  toggleUsersFavoriteCar,
};
