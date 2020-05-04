const router = require('express').Router();

const userController = require('../controller/userController');
/**
 * @swagger
 * /users/signin:
 *   post:
 *     tags:
 *      - Auth
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Token Generated!
 */


router.get('/signin', userController.signin);

module.exports = router;
