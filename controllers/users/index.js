const registerUser = require('./registerUser');
const loginUser = require('./loginUser');
const getCurrentUser = require('./getCurrentUser');
const logOutUser = require('./logoutUser');
const addUsersFavoriteCar = require('./addUsersFavoriteCar');
const deleteUsersFavoriteCar = require('./deleteUsersFavoriteCar');

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logOutUser,
  addUsersFavoriteCar,
  deleteUsersFavoriteCar,
};
