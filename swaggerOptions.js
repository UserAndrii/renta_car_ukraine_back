const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'RENTACAR API',
      version: '1.0.0',
      description: 'API documentation for RentaCar App',
    },
    servers: [
      {
        url: 'https://renta-car-ukraine-api.onrender.com',
      },
    ],
  },
  apis: ['./routers/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
