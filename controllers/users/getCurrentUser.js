const { ctrlWrapper } = require('../../helpers');

const getCurrentUser = async (req, res) => {
  const { userName, email, admin, favoriteCars, verify } = req.user;
  res.json({ user: { userName, email, verify }, admin, favoriteCars });
};

module.exports = ctrlWrapper(getCurrentUser);
