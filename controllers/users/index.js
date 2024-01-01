const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./getCurrentUser');
const logOutUser = require('./logoutUser');
const updateUser = require('./updateUser');

const toggleUsersFavoriteCar = require('../users/toggleUsersFavoriteCar');

const verifyUserEmail = require('./verifyUserEmail');
const resendVerifyUserEmail = require('./resendVerifyUserEmail');
const letterOnGrantingAdminPermissions = require('./letterOnGrantingAdminPermissions');

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,
  updateUser,

  toggleUsersFavoriteCar,

  verifyUserEmail,
  resendVerifyUserEmail,
  letterOnGrantingAdminPermissions,
};
