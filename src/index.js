require('dotenv').config();
const app = require('./app');
const handleListen = require('./service/server.listen.service');
const logger = require('./service/logger.service');
const config = require('./config');

app.listen(config.port, handleListen(logger.info, config.port));
