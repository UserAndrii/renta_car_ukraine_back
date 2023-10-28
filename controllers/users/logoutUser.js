const { User } = require('../../models/users');
const { ctrlWrapper } = require('../../helpers');

const logOutUser = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: '' });

  res.sendStatus(204);
};

module.exports = ctrlWrapper(logOutUser);
