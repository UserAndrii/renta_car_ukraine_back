const { ctrlWrapper, sendEmail } = require('../../helpers');
const { User } = require('../../models/users');
const { v4: uuidv4 } = require('uuid');

const updateUser = async (req, res) => {
  const { userName: newUserName, email: newEmail } = req.body;
  const { _id, email, verify } = req.user;

  const verificationToken = uuidv4();

  const updatedFields = {};

  if (email !== newEmail) {
    updatedFields.email = newEmail;
    updatedFields.verify = false;
    updatedFields.verificationToken = verificationToken;

    await sendEmail(newEmail, verificationToken);
  }
  if (newUserName) updatedFields.userName = newUserName;

  await User.findByIdAndUpdate(_id, { $set: updatedFields });

  console.log(email === newEmail && verify);

  res.json({
    user: {
      userName: newUserName,
      email: newEmail,
      verify: email === newEmail && verify,
    },
  });
};

module.exports = ctrlWrapper(updateUser);
