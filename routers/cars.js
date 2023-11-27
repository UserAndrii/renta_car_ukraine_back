const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/cars');
const {
  rentalCarSchema,
  updateRentalCarSchema,
} = require('../schemas/carsSchemas');

const {
  authenticate,
  uploadCarPhoto,
  validateBody,
  isValidId,
} = require('../middlewares');

router.get('/all', ctrl.getAllCars);

router.post(
  '/',
  authenticate,
  uploadCarPhoto.single('img'),
  validateBody(rentalCarSchema),
  ctrl.addNewRentCar
);

router.patch(
  '/:id',
  isValidId,
  authenticate,
  uploadCarPhoto.single('img'),
  validateBody(updateRentalCarSchema),
  ctrl.updateRentCar
);

router.delete('/:id', authenticate, isValidId, ctrl.deleteRentCar);

module.exports = router;
