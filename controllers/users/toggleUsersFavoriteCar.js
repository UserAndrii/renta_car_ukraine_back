const { ctrlWrapper, HttpError } = require('../../helpers');
const { User } = require('../../models/users');

const toggleUsersFavoriteCar = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.body;

  const user = await User.findById(_id);
  if (!user) throw HttpError(404, 'User not found');

  let newFavoriteCars = [];

  if (user.favoriteCars.includes(id)) {
    newFavoriteCars = user.favoriteCars.filter(car => car !== id);
  } else {
    newFavoriteCars = [...user.favoriteCars, id];
  }

  await User.findByIdAndUpdate(
    _id,
    { favoriteCars: newFavoriteCars },
    { new: true }
  );

  res.json({ favoriteCars: newFavoriteCars });
};

module.exports = ctrlWrapper(toggleUsersFavoriteCar);
