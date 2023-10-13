const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/users');
const { validateBody } = require('../middlewares');
const { registerSchema } = require('../schemas/authSchemas');

router.post('/register', validateBody(registerSchema), ctrl.registerUser);

module.exports = router;
