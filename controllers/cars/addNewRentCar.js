const { Cars } = require('../../models/cars');
const { ctrlWrapper } = require('../../helpers');

const addNewRentCar = async (req, res) => {
  const result = await Cars.create({ ...req.body, img: req.file.path });

  res.status(201).json(result);
};

module.exports = ctrlWrapper(addNewRentCar);
