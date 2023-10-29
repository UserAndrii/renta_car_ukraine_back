const { ctrlWrapper, HttpError } = require('../../helpers');
const { User } = require('../../models/users');

const addUsersFavoriteCar = async (req, res) => {
  const { _id } = req.user;
  const { id: carId } = req.body;

  const user = await User.findById(_id);
  if (!user) throw HttpError(404, 'User not found');

  if (user.favoriteCars.includes(carId))
    throw HttpError(400, 'Car already in favorites');

  user.favoriteCars.push(carId);
  await user.save();

  res.json({ message: 'Car added to favorites' });
};

module.exports = ctrlWrapper(addUsersFavoriteCar);
