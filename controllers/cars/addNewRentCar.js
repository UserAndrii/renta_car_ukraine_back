const { Cars } = require('../../models/cars');
const { ctrlWrapper } = require('../../helpers');

const addNewRentCar = async (req, res) => {
  let result;
  if (req.file) {
    result = await Cars.create({ ...req.body, img: req.file.path });
  } else {
    result = await Cars.create(req.body);
  }

  res.status(201).json(result);
};

module.exports = ctrlWrapper(addNewRentCar);
