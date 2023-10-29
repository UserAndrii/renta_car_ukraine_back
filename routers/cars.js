const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/cars');
const { authenticate } = require('../middlewares');

router.get('/all', ctrl.getAllCars);

module.exports = router;
