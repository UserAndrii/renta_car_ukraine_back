const { ctrlWrapper } = require('../../helpers');

const getCurrentUser = async (req, res) => {
  const { userName, email, admin } = req.user;
  res.json({ user: { userName, email }, admin });
};

module.exports = ctrlWrapper(getCurrentUser);
