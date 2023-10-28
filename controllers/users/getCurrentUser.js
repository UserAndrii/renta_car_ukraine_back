const { ctrlWrapper } = require('../../helpers');

const getCurrentUser = async (req, res) => {
  const { userName, email } = req.user;
  res.json({ userName, email });
};

module.exports = ctrlWrapper(getCurrentUser);
