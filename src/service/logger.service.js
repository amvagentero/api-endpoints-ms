const winston = require('winston');
const config = require('../config');

const level = config.logLevel;

const loggerService = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level,
      colorize: true,
      timestamp() {
        return (new Date()).toISOString();
      },
    }),
  ],
});

loggerService.stream = {
  write(message) {
    loggerService.info(message.trim());
  },
};

module.exports = loggerService;
