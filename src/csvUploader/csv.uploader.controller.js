/* eslint-disable no-unused-vars,no-console */
/*const csvUploaderService = require('./csv.uploader.service');
const log = require('../service/logger.service');
const fs = require('fs');
const JSONAPIError = require('jsonapi-serializer').Error;
const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const jsonapiOpts = {
  attributes: ['name', 'location'],
  pluralizeType: false,
};

const dashWord = word => word.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '-').toLowerCase();

const csvUploaderController = async (req, res) => {
  try {
    if (!req.file || !req.body.expert || !req.body.connector) {
      res.status(400).send(new JSONAPIError([{
        code: '400',
        title: 'File could not be uploaded',
        detail: 'necessary fields not found',
      }]));
    } else {
      const resultFile = await csvUploaderService.uploadCsv(
        req.file, req.body.expert,
        dashWord(req.body.connector),
      );
      const resultData = new JSONAPISerializer('file', jsonapiOpts).serialize(resultFile);
      res.status(200).send(resultData);
    }
  } catch (err) {
    log.error('CSV Uploader Controller error: ', err);
    res.status(err.status ? err.status : 500).send(new JSONAPIError([{
      code: err.status ? err.status : '500',
      title: 'File could not be uploaded',
      detail: err.message ? err.message : 'Unknown reason',
    }]));
  } finally {
    if (req.file && req.file.path) { fs.unlinkSync(req.file.path); } // remove temp file
  }
};

module.exports = csvUploaderController;
*/