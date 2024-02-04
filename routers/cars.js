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

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Operations related to cars
 */

/**
 * @swagger
 * /cars/all:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - _id: "65b909e3a48da347ac46dcb2"
 *                 year: 2023
 *                 make: "PEUGEOT"
 *                 model: "E-3008"
 *                 type: "Electric Car"
 *                 img: "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png"
 *                 description: "Meet the New PEUGEOT E-3008, which opens a new level of development and a new level of emotions..."
 *                 fuelConsumption: "Dual Motor 326 л.с., 509 Нм"
 *                 engineSize: "Electric"
 *                 accessories:
 *                   - "PEUGEOT Panoramic i-Cockpit"
 *                   - "Block of touch buttons i-Toggles"
 *                   - "Leather/Alcantara combination for the seats"
 *                   - "PEUGEOT VisioPark 360"
 *                   - "Advanced Traction Control"
 *                 functionalities:
 *                   - "21-inch HD panel"
 *                   - "i-Cockpit®"
 *                   - "Focal® Premium Hi-Fi system"
 *                   - "Drive Assist Plus"
 *                   - "ACC adaptive cruise control with Stop&Go function"
 *                   - "STLA Medium from Stellantis Concern"
 *                 rentalPrice: "$100"
 *                 rentalCompany: "Peugeot Service"
 *                 address: "400 Horodozka str, Lviv, Ukraine"
 *                 rentalConditions: "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required"
 *                 mileage: 100
 */

router.get('/all', ctrl.getAllCars);

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Add a new rental car
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               year:
 *                 type: number
 *               make:
 *                 type: string
 *               model:
 *                 type: string
 *               type:
 *                 type: string
 *               img:
 *                 type: string
 *               description:
 *                 type: string
 *               fuelConsumption:
 *                 type: string
 *               engineSize:
 *                 type: string
 *               accessories:
 *                 type: array
 *                 items:
 *                   type: string
 *               functionalities:
 *                 type: array
 *                 items:
 *                   type: string
 *               rentalPrice:
 *                 type: string
 *               rentalCompany:
 *                 type: string
 *               address:
 *                 type: string
 *               rentalConditions:
 *                 type: string
 *               mileage:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               _id: "65b909e3a48da347ac46dcb2"
 *               year: 2023
 *               make: "PEUGEOT"
 *               model: "E-3008"
 *               type: "Electric Car"
 *               img: "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png"
 *               description: "Meet the New PEUGEOT E-3008, which opens a new level of development and a new level of emotions..."
 *               fuelConsumption: "Dual Motor 326 л.с., 509 Нм"
 *               engineSize: "Electric"
 *               accessories:
 *                 - "PEUGEOT Panoramic i-Cockpit"
 *                 - "Block of touch buttons i-Toggles"
 *                 - "Leather/Alcantara combination for the seats"
 *                 - "PEUGEOT VisioPark 360"
 *                 - "Advanced Traction Control"
 *               functionalities:
 *                 - "21-inch HD panel"
 *                 - "i-Cockpit®"
 *                 - "Focal® Premium Hi-Fi system"
 *                 - "Drive Assist Plus"
 *                 - "ACC adaptive cruise control with Stop&Go function"
 *                 - "STLA Medium from Stellantis Concern"
 *               rentalPrice: "$100"
 *               rentalCompany: "Peugeot Service"
 *               address: "400 Horodozka str, Lviv, Ukraine"
 *               rentalConditions: "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required"
 *               mileage: 100
 */

router.post(
  '/',
  authenticate,
  uploadCarPhoto.single('img'),
  validateBody(rentalCarSchema),
  ctrl.addNewRentCar
);

/**
 * @swagger
 * /cars/{id}:
 *   patch:
 *     summary: Update a rental car
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the rental car to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               year:
 *                 type: number
 *               make:
 *                 type: string
 *               model:
 *                 type: string
 *               type:
 *                 type: string
 *               img:
 *                 type: string
 *               description:
 *                 type: string
 *               fuelConsumption:
 *                 type: string
 *               engineSize:
 *                 type: string
 *               accessories:
 *                 type: string
 *               functionalities:
 *                 type: string
 *               rentalPrice:
 *                 type: string
 *               rentalCompany:
 *                 type: string
 *               address:
 *                 type: string
 *               rentalConditions:
 *                 type: string
 *               mileage:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - _id: "65b909e3a48da347ac46dcb2"
 *                 year: 2023
 *                 make: "PEUGEOT"
 *                 model: "E-3008"
 *                 type: "Electric Car"
 *                 img: "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png"
 *                 description: "Meet the New PEUGEOT E-3008, which opens a new level of development and a new level of emotions..."
 *                 fuelConsumption: "Dual Motor 326 л.с., 509 Нм"
 *                 engineSize: "Electric"
 *                 accessories:
 *                   - "PEUGEOT Panoramic i-Cockpit"
 *                   - "Block of touch buttons i-Toggles"
 *                   - "Leather/Alcantara combination for the seats"
 *                   - "PEUGEOT VisioPark 360"
 *                   - "Advanced Traction Control"
 *                 functionalities:
 *                   - "21-inch HD panel"
 *                   - "i-Cockpit®"
 *                   - "Focal® Premium Hi-Fi system"
 *                   - "Drive Assist Plus"
 *                   - "ACC adaptive cruise control with Stop&Go function"
 *                   - "STLA Medium from Stellantis Concern"
 *                 rentalPrice: "$100"
 *                 rentalCompany: "Peugeot Service"
 *                 address: "400 Horodozka str, Lviv, Ukraine"
 *                 rentalConditions: "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required"
 *                 mileage: 500
 */

router.patch(
  '/:id',
  isValidId,
  authenticate,
  uploadCarPhoto.single('img'),
  validateBody(updateRentalCarSchema),
  ctrl.updateRentCar
);

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Delete a rental car
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the rental car to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Cars deleted
 */

router.delete('/:id', authenticate, isValidId, ctrl.deleteRentCar);

module.exports = router;
