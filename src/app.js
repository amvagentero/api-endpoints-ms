const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./service/logger.service');
const apiEndpointsRouter = require('./apiEndpoints/api.endpoint.router');
const healthRouter = require('./health/health.router');

require('./db');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/health', healthRouter);
app.use(morgan('tiny', { stream: logger.stream }));
app.use('/apiEndpoints', apiEndpointsRouter);

module.exports = app;
