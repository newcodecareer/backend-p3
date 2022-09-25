const swaggerJsDoc = require('swagger-jsdoc');

module.exports = swaggerJsDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fun Cool Apis Documentation',
      version: '1.0.0',
      description: 'This is the API documentation for Fun Cool Queuing',
    },
  },
  apis: ['controllers/*.js'],
});
