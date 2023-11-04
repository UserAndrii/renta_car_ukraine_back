const { User } = require('../../models/users');
const { HttpError, ctrlWrapper } = require('../../helpers');

const verifyUserEmail = async (req, res) => {
  const { verificationToken } = req.params;

  console.log(verificationToken);

  const user = await User.findOne({ verificationToken });

  if (!user) throw HttpError(404, 'User not found');

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.json({ message: 'Verification successful' });
};

module.exports = ctrlWrapper(verifyUserEmail);
