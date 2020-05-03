/* eslint-disable indent */
const download = require('image-downloader');
const fs = require('fs');
const resizeImg = require('resize-img');

async function resize(req, res) {
    try {
        if (!!req.body.url) {
            const options = {
                url: req.body.url,
                dest: './public/photo.png',
            };
            download.image(options);
            const img = await resizeImg(
                fs.readFileSync('./public/resized.png'),
                { width: 50, height: 50 },
            );
            res.status(200).send(img);
        }
        else {
            res.status(400).send("Bad request..!")
        }

    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    resize,
};
