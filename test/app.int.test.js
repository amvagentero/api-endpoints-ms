/* eslint-disable global-require */
const request = require('supertest');
const app = require('../src/app');

jest.mock('../src/config', () => require('./mocks/config'));
jest.mock('../src/service/s3.service', () => require('./mocks/s3.service'));

test('should successfully check health status', (done) => {
  request(app)
    .get('/health')
    .expect(200, { data: [{ type: 'health', attributes: { status: 'OK' } }] })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should successfully upload a csv file', (done) => {
  request(app)
    .post('/')
    .attach('file', `${__dirname}/files/test.csv`)
    .field('expert', 'abcd')
    .field('connector', 'testConnectr')
    .expect(200, { data: { type: 'file', attributes: { name: 'test.csv' } } })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should not upload a file with wrong attachment name', (done) => {
  request(app)
    .post('/')
    .attach('errorName', `${__dirname}/files/test.csv`)
    .field('expert', 'abcd')
    .expect(400, {
      errors: [{
        code: '400',
        title: 'File could not be uploaded',
        detail: 'Unexpected field',
      }],
    })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should not upload a file without expert field', (done) => {
  request(app)
    .post('/')
    .attach('file', `${__dirname}/files/test.csv`)
    .expect(400, {
      errors: [{
        code: '400',
        title: 'File could not be uploaded',
        detail: 'necessary fields not found',
      }],
    })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should upload a valid ams360 file', (done) => {
  request(app)
    .post('/')
    .attach('file', `${__dirname}/files/ams360.valid.file.csv`)
    .field('expert', 'abcd')
    .field('connector', 'AMS 360')
    .expect(200, { data: { type: 'file', attributes: { name: 'ams360.valid.file.csv' } } })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should not upload an invalid ams360 file', (done) => {
  request(app)
    .post('/')
    .attach('file', `${__dirname}/files/test.csv`)
    .field('expert', 'abcd')
    .field('connector', 'AMS 360')
    .expect(400, {
      errors: [{
        code: 400,
        title: 'File could not be uploaded',
        detail: 'The file is not valid for the given connector',
      }],
    })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

test('should upload a valid asi file', (done) => {
  request(app)
    .post('/')
    .attach('file', `${__dirname}/files/asi.valid.file.csv`)
    .field('expert', 'abcd')
    .field('connector', 'ASI (American Strategic Insurance)')
    .expect(200, { data: { type: 'file', attributes: { name: 'asi.valid.file.csv' } } })
    .end((err) => {
      if (err) throw done(err);
      done();
    });
});

// test('should not upload an invalid asi file', (done) => {});
