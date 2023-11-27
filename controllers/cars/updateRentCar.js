const { Cars } = require('../../models/cars');
const { ctrlWrapper, HttpError } = require('../../helpers');

const updateRentCar = async (req, res) => {
  const { id } = req.params;

  const result = await Cars.findByIdAndUpdate(
    id,
    { $set: req.file ? { ...req.body, img: req.file.path } : req.body },
    { new: true }
  );

  if (!result) throw HttpError(404, 'Not Found');

  res.json(result);
};

module.exports = ctrlWrapper(updateRentCar);
