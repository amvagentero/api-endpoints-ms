/* eslint-disable no-unused-vars */
/*const csvService = require('../service/csv.service');
const s3Service = require('../service/s3.service');
const array = require('lodash/array');
const fs = require('fs');

async function validateConnector(filePath, connectorFields) {
  const records = await csvService.readFile(filePath);
  return records.length > 4 && (array.difference(connectorFields, records[0]).length === 0 ||
    array.difference(connectorFields, records[3]).length === 0);
}

const validateFile = async (filePath, connector) => {
  switch (connector) {
    case 'ams-360':
    case 'vertafore-single-sign-on':
      return validateConnector(filePath, ['Customer ? Last name, First name', 'Account Number', 'Division']);
    case 'asi-american-strategic-insurance':
      return validateConnector(filePath, ['PolicyID']);
    default:
      return true;
  }
};

const csvUploaderService = {
  uploadCsv: async (file, expert, connector) => {
    const isValidFile = await validateFile(file.path, connector);
    if (!isValidFile) {
      const error = { status: 400, message: 'The file is not valid for the given connector' };
      throw error;
    }
    const fileUrl =
      await s3Service.uploadFileToBucket(file.path, file.originalname, expert, connector);
    return { name: file.originalname, location: fileUrl };
  },
};

module.exports = csvUploaderService;*/
