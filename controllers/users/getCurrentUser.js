const { ctrlWrapper } = require('../../helpers');

const getCurrentUser = async (req, res) => {
  const { userName, email, admin, favoriteCars } = req.user;
  res.json({ user: { userName, email }, admin, favoriteCars });
};

module.exports = ctrlWrapper(getCurrentUser);
