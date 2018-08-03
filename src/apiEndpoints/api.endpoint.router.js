const express = require('express');
const apiEndpointController = require('./api.endpoint.controller');

const apiEndpointRouter = express.Router();

apiEndpointRouter.post('/', apiEndpointController.createApiEndpoint);
apiEndpointRouter.get('/', apiEndpointController.list);
//apiEndpointRouter.put('/:id', apiEndpointController.updateApiEnpoint);
//get one, get all, delete

module.exports = apiEndpointRouter;
