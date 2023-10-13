const { Cars } = require('../../models/cars');
const ctrlWrapper = require('../../helpers/ctrlWrapper');

const getAllCars = async (req, res) => {
  const { page = 1, limit = 20, favorite = false } = req.query;
  const skip = (page - 1) * limit;

  const cars = await Cars.find({}, '-createdAt -updatedAt', { skip, limit });
  res.json(cars);
};

module.exports = ctrlWrapper(getAllCars);
