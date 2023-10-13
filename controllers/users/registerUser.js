require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const { User } = require('../../models/users');
const { HttpError, sendEmail, ctrlWrapper } = require('../../helpers');

const { SECRET_KEY } = process.env;

const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) throw HttpError(409, 'Email in use');

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = uuidv4();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    verificationToken,
  });

  const token = jwt.sign({ id: newUser._id }, SECRET_KEY, { expiresIn: '1h' });

  const update = await User.findByIdAndUpdate(newUser._id, { token });

  console.log(update);

  await sendEmail(email, verificationToken);

  res.status(201).json({ user: { userName, email }, token });
};

module.exports = ctrlWrapper(registerUser);
