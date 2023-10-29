const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/users');
const authenticate = require('../middlewares/authenticate');

const { validateBody } = require('../middlewares');
const {
  registerSchema,
  loginSchema,
  favoriteCarSchema,
} = require('../schemas/authSchemas');

router.post('/register', validateBody(registerSchema), ctrl.registerUser);
router.post('/login', validateBody(loginSchema), ctrl.loginUser);
router.get('/current', authenticate, ctrl.getCurrentUser);
router.post('/logout', authenticate, ctrl.logOutUser);

router.patch(
  '/favorite',
  authenticate,
  validateBody(favoriteCarSchema),
  ctrl.addUsersFavoriteCar
);

router.delete(
  '/favorite',
  authenticate,
  validateBody(favoriteCarSchema),
  ctrl.deleteUsersFavoriteCar
);

module.exports = router;
