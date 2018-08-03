const serverListen = require('../../src/service/server.listen.service');

test('Should call log with api-endpoints-ms...', () => {
  const PORT = 3000;
  const log = jest.fn();
  serverListen(log, PORT);
  expect(log.mock.calls).toHaveLength(1);
  expect(log.mock.calls[0][0]).toBe(`api-endpoints-ms is listening on port ${PORT.toString()}!`);
});
