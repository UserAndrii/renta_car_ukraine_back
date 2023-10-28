const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/users');
const authenticate = require('../middlewares/authenticate');

const { validateBody } = require('../middlewares');
const { registerSchema, loginSchema } = require('../schemas/authSchemas');

router.post('/register', validateBody(registerSchema), ctrl.registerUser);
router.post('/login', validateBody(loginSchema), ctrl.loginUser);
router.get('/current', authenticate, ctrl.getCurrentUser);
router.post('/logout', authenticate, ctrl.logOutUser);

module.exports = router;
