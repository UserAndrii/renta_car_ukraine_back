const { ctrlWrapper } = require('../../helpers');
const { User } = require('../../models/users');

const updateUser = async (req, res) => {
  const { userName: newUserName, email: newEmail } = req.body;
  const { _id, email } = req.user;

  const updatedFields = {};

  if (email !== newEmail) {
    updatedFields.email = newEmail;
    updatedFields.verify = false;
  }
  if (newUserName) updatedFields.userName = newUserName;

  await User.findByIdAndUpdate(_id, { $set: updatedFields });

  res.json({
    user: {
      userName: newUserName,
      email: newEmail,
      verify: email === newEmail,
    },
  });
};

module.exports = ctrlWrapper(updateUser);
