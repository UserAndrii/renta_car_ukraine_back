const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/cars');

router.get('/all', ctrl.getAllCars);

module.exports = router;
