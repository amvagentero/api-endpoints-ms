/*const express = require('express');
const multer = require('multer');
const csvUploaderController = require('./csv.uploader.controller');
const errorService = require('./csv.uploader.error.service');

const csvRouter = express.Router();
const upload = multer({ dest: 'uploads/' });

csvRouter.post('/', upload.single('file'), csvUploaderController);
csvRouter.use(errorService);

module.exports = csvRouter;*/

