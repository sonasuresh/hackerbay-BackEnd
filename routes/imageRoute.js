const router = require('express').Router();


const imageController = require('../controller/imageController');
const verifyTokenController = require('../controller/verifyTokenController');

/**
 * @swagger
 * /image/resize:
 *   post:
 *     tags:
 *      - Image
 *     security:
 *      - Bearer Auth: []
 *     description: Creates a image thumbnail of 50x50 pixels!
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: URL
 *         description: url object
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Image Thumbnail generated!
 */
router.post('/resize', verifyTokenController.verifyToken, imageController.resize);

module.exports = router;
