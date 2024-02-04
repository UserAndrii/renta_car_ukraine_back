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

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations related to user
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successful registration
 *         content:
 *           application/json:
 *             example:
 *               user:
 *                 userName: "exampleUser"
 *                 email: "user@gmail.com"
 *                 verify: false
 *               verificationToken: "65b909e3a48da347ac46dcb2"
 *               token: string
 *       404:
 *         description: Bad request
 */

router.post('/register', validateBody(registerSchema), ctrl.registerUser);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User authorization
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful user authorization
 *         content:
 *           application/json:
 *             example:
 *               user:
 *                 userName: "exampleUser"
 *                 email: "user@gmail.com"
 *                 verify: false
 *               admin: false
 *               token: string
 *               favoriteCars: ["id1", "id2"]
 *       401:
 *         description: Not authorized
 *         content:
 *           application/json:
 *             example:
 *               error: Not authorized
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: User not found
 */

router.post('/login', validateBody(loginSchema), ctrl.loginUser);

/**
 * @swagger
 * /users/current:
 *   get:
 *     summary: Get information about the current user
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful retrieval of user information
 *         content:
 *           application/json:
 *             example:
 *               user:
 *                 userName: "exampleUser"
 *                 email: "user@gmail.com"
 *                 verify: false
 *               admin: false
 *               favoriteCars: ["id1", "id2"]
 *       401:
 *         description: Not authorized
 *         content:
 *           application/json:
 *             example:
 *               error: Not authorized
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: User not found
 */

router.get('/current', authenticate, ctrl.getCurrentUser);

/**
 * @swagger
 * /users/logout:
 *   post:
 *     summary: Logout the current user
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '204':
 *         description: Successful logout
 *       '401':
 *         description: Unauthorized, invalid or expired token
 */

router.post('/logout', authenticate, ctrl.logOutUser);

/**
 * @swagger
 * /users/accessed:
 *   get:
 *     summary: Send emails on granting admin permissions
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Emails sent successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Emails sent"
 *       '401':
 *         description: Unauthorized, invalid or expired token
 */

router.get('/accessed', authenticate, ctrl.letterOnGrantingAdminPermissions);

/**
 * @swagger
 * /users/update:
 *   patch:
 *     summary: Update user information
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User information updated successfully
 *         content:
 *           application/json:
 *             example:
 *               user:
 *                 userName: "exampleUser"
 *                 email: "user@gmail.com"
 *                 verify: false
 *       '401':
 *         description: Unauthorized, invalid or expired token
 */

router.patch(
  '/update',
  authenticate,
  validateBody(updateShema),
  ctrl.updateUser
);

/**
 * @swagger
 * /users/verify/{verificationToken}:
 *   get:
 *     summary: Verify user email
 *     tags:
 *       - User
 *     description: Verify user email using the provided verification token.
 *     parameters:
 *       - in: path
 *         name: verificationToken
 *         required: true
 *         description: The verification token sent to the user's email.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful verification
 *         content:
 *           application/json:
 *             example:
 *               message: Verification successful
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: User not found
 */

router.get('/verify/:verificationToken', ctrl.verifyUserEmail);

/**
 * @swagger
 * /users/verify:
 *   get:
 *     summary: Resend verification email
 *     tags:
 *       - User
 *     description: Resend the verification email to the authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Verification email sent
 *         content:
 *           application/json:
 *             example:
 *               message: Verification email sent
 *       400:
 *         description: Verification already passed
 *         content:
 *           application/json:
 *             example:
 *               error: Verification has already been passed
 */

router.get('/verify', authenticate, ctrl.resendVerifyUserEmail);

/**
 * @swagger
 * /users/favorite:
 *   post:
 *     summary: Toggle user's favorite car
 *     tags:
 *       - User
 *     description: Add or remove a car from the user's list of favorite cars.
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
 *                 description: The ID of the car to be added or removed from favorites.
 *                 example: 60a9a7cf8b9a7867b5e7b9c2
 *     responses:
 *       200:
 *         description: Toggle successful
 *         content:
 *           application/json:
 *             example:
 *               favoriteCars: ["60a9a7cf8b9a7867b5e7b9c2", "60a9a7cf8b9a7867b5e7b9c3"]
 *       401:
 *         description: Not authorized
 *         content:
 *           application/json:
 *             example:
 *               error: Not authorized
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             example:
 *               error: User not found
 */

router.post('/favorite', authenticate, ctrl.toggleUsersFavoriteCar);

module.exports = router;
