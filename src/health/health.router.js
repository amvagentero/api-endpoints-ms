const express = require('express');

const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
  res.status(200).send({ data: [{ type: 'health', attributes: { status: 'OK' } }] });
});

module.exports = healthRouter;

