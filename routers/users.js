const express = require('express');

const router = express.Router();

const ctrl = require('../controllers/users');
const authenticate = require('../middlewares/authenticate');

const { validateBody } = require('../middlewares');
const {
  registerSchema,
  loginSchema,
  updateShema,
} = require('../schemas/authSchemas');

router.post('/register', validateBody(registerSchema), ctrl.registerUser);
router.post('/login', validateBody(loginSchema), ctrl.loginUser);
router.get('/current', authenticate, ctrl.getCurrentUser);
router.post('/logout', authenticate, ctrl.logOutUser);
router.get('/accessed', authenticate, ctrl.letterOnGrantingAdminPermissions);
router.patch(
  '/update',
  authenticate,
  validateBody(updateShema),
  ctrl.updateUser
);

router.get('/verify/:verificationToken', ctrl.verifyUserEmail);
router.get('/verify', authenticate, ctrl.resendVerifyUserEmail);

router.post('/favorite', authenticate, ctrl.toggleUsersFavoriteCar);

module.exports = router;
