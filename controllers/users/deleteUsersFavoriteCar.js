const { ctrlWrapper, HttpError } = require('../../helpers');
const { User } = require('../../models/users');

const deleteUsersFavoriteCar = async (req, res) => {
  const { _id } = req.user;
  const { id: carId } = req.body;

  const user = await User.findById(_id);
  if (!user) throw HttpError(404, 'User not found');

  if (!user.favoriteCars.includes(carId))
    throw HttpError(400, 'Car not found in favorites');

  const index = user.favoriteCars.indexOf(carId);
  user.favoriteCars.splice(index, 1);

  await user.save();

  res.json({ message: 'The car has been successfully removed from favorites' });
};

module.exports = ctrlWrapper(deleteUsersFavoriteCar);
