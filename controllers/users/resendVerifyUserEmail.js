const { HttpError, ctrlWrapper, sendEmail } = require('../../helpers');

const resendVerifyUserEmail = async ({ user }, res) => {
  if (user.verify) throw HttpError(400, 'Verification has already been passed');

  await sendEmail(user.email, user.verificationToken);

  res.json({ message: 'Verification email sent' });
};

module.exports = ctrlWrapper(resendVerifyUserEmail);
