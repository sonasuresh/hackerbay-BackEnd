const express = require('express');

var app = express();
const bodyParser = require('body-parser');

app.listen(3000, () => {
    console.log('Server is listening on :3000');
});


app.use(bodyParser.json());

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {

    swaggerDefinition: {

        info: {
            title: 'API Documentation',
            description: 'API server that provides service for json patching and image thumbnail generation',
            contact: {
                name: 'developer'
            },
            servers: ["http://localhost:3000"]
        },
        "securityDefinitions": {
            "Bearer Auth": {
                "type": "apiKey",
                "name": "Authorization",
                "in": "header"
            },
        },

        "tags": [{
            "name": 'Auth',
            "description": "Authentication related operations exposed by this service",
        },
        {
            "name": 'JSON Patch',
            "description": "Json Patching related operations exposed by this service",
        },
        {
            "name": 'Image',
            "description": "Image Thumbnail related operations exposed by this service",
        },

        ]
    },
    apis: ["./routes/*"],
    // apis: ["app.js"]
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))



const userRoute = require('./routes/userRoute');
const jsonPatchRoute = require('./routes/jsonPatchRoute');
const imageRoute = require('./routes/imageRoute.js');


app.use('/users', userRoute);
app.use('/json', jsonPatchRoute);
app.use('/image', imageRoute);

// export default app;
module.exports = app;