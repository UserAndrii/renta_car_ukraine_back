const handleMongooseError = require('./handleMongooseError');
const HttpError = require('./HttpError');
const sendEmail = require('./sendEmail');
const ctrlWrapper = require('./ctrlWrapper');
const isAdmin = require('./isAdmin');
const transformStringFields = require('./transformStringFields');
const sendEmailAboutAdminPermissions = require('./sendEmailAboutAdminPermissions');
const sendEmailAdminPermissionNotification = require('./sendEmailAdminPermissionNotification');

const { emailRegexp } = require('./regexp');

module.exports = {
  emailRegexp,
  isAdmin,
  sendEmail,
  HttpError,
  ctrlWrapper,
  handleMongooseError,
  transformStringFields,
  sendEmailAboutAdminPermissions,
  sendEmailAdminPermissionNotification,
};
