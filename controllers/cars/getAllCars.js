const { Cars } = require('../../models/cars');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const getAllCars = async (req, res) => {
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;

  const cars = await Cars.find({}, '-createdAt -updatedAt', {
    skip,
    limit,
  }).sort({ createdAt: -1 });

  res.json(cars);
};

module.exports = ctrlWrapper(getAllCars);
