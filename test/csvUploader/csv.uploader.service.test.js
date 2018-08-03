/* eslint-disable global-require */
const csvUploaderService = require('../../src/csvUploader/csv.uploader.service');
const csvService = require('../../src/service/csv.service');
const s3ServiceMock = require('../mocks/s3.service');

jest.mock('../../src/config', () => require('../mocks/config'));
jest.mock('../../src/service/s3.service', () => require('../mocks/s3.service'));

test('Should potato', async () => {
  csvService.readFile = jest.fn(() => Promise.resolve([['PolicyID'], [], [], [], []]));

  await csvUploaderService.uploadCsv({
    path: 'testPath',
    originalname: 'testFileName',
  }, 'testExpert', 'asi-american-strategic-insurance');

  const expectedCall = ['testPath', 'testFileName', 'testExpert', 'asi-american-strategic-insurance'];
  expect(csvService.readFile.mock.calls).toHaveLength(1);
  expect(csvService.readFile.mock.calls[0][0]).toBe('testPath');
  expect(s3ServiceMock.uploadFileToBucket.mock.calls).toHaveLength(1);
  expect(s3ServiceMock.uploadFileToBucket.mock.calls[0]).toEqual(expectedCall);
});
