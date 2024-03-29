require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { usersRouter, carsRouter } = require('./routers');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerOptions');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOptions));
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
