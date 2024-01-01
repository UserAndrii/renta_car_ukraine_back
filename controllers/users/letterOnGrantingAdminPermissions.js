const {
  ctrlWrapper,
  sendEmailAdminPermissionNotification,
  sendEmailAboutAdminPermissions,
} = require('../../helpers');

const letterOnGrantingAdminPermissions = async ({ user }, res) => {
  const { userName, email } = user;

  await sendEmailAboutAdminPermissions(userName, email);
  await sendEmailAdminPermissionNotification(userName, email);

  res.json({ message: 'Email sent' });
};

module.exports = ctrlWrapper(letterOnGrantingAdminPermissions);
