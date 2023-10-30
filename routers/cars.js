const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/cars');
const { addNewRentCarSchema } = require('../schemas/carsSchemas');
const {
  authenticate,
  uploadCarPhoto,
  validateBody,
} = require('../middlewares');

router.get('/all', ctrl.getAllCars);

router.post(
  '/',
  authenticate,
  uploadCarPhoto.single('img'),
  validateBody(addNewRentCarSchema),
  ctrl.addNewRentCar
);

module.exports = router;
