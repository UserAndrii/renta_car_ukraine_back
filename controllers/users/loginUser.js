require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const { User } = require('../../models/users');
const { HttpError, ctrlWrapper, isAdmin } = require('../../helpers');

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, 'Email or password is wrong');

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpError(401, 'Email or password is wrong');

  const token = jwt.sign({ id: user._id }, SECRET_KEY, {
    expiresIn: user.verify ? '23h' : '1h',
  });

  const admin = isAdmin(email, user.verify);

  await User.findByIdAndUpdate(user._id, { token, admin });

  res.json({
    user: {
      userName: user.userName,
      email,
      verify: user.verify,
    },
    admin,
    token,
    favoriteCars: user.favoriteCars,
  });
};

module.exports = ctrlWrapper(loginUser);
