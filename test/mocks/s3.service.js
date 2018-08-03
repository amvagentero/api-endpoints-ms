/* eslint-disable no-unused-vars */
const log = require('../../src/service/logger.service');

const s3Service = {
  uploadFileToBucket: jest.fn(() => Promise.resolve()),
};

module.exports = s3Service;
