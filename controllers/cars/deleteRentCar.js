const { Cars } = require('../../models/cars');
const { ctrlWrapper, HttpError } = require('../../helpers');

const deleteRentCar = async (req, res) => {
  const { id } = req.params;

  const result = await Cars.findByIdAndRemove(id);

  if (!result) throw HttpError(404, 'Not Found');

  res.json({ message: 'Cars deleted' });
};

module.exports = ctrlWrapper(deleteRentCar);
