const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/users');
const { validateBody } = require('../middlewares');
const { registerSchema, loginSchema } = require('../schemas/authSchemas');

router.post('/register', validateBody(registerSchema), ctrl.registerUser);
router.post('/login', validateBody(loginSchema), ctrl.loginUser);

module.exports = router;
