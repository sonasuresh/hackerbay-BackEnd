/* eslint-disable indent */
const jsonpatch = require('json-patch');
const logger = require('../logger');

async function patch(req, res) {
    try {
        if (!!req.body.original && !!req.body.patch) {
            logger.info("JSON patched");
            res.status(200).send(jsonpatch.apply(req.body.original, req.body.patch));
        } else {
            res.status(400).send('Bad request');
        }
    } catch (error) {
        logger.error(error);
        res.status(400).send('error');
    }
}

module.exports = {
    patch
};
