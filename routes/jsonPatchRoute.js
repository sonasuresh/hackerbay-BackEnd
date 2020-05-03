const router = require('express').Router();

const jsonPatchController = require('../controller/jsonPatchController');
const verifyTokenController = require('../controller/verifyTokenController');
/**
 * @swagger
 * /json/patch:
 *   post:
 *     tags:
 *      - JSON Patch
 *     security:
 *      - Bearer Auth: []
 *     description: Creates a patched json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: JSON
 *         description: JSON object
 *         in: body
 *         required: true
 *     responses:
 *       200:
 *         description: Json patched
 */

router.post('/patch', verifyTokenController.verifyToken, jsonPatchController.patch);

module.exports = router;