import ErrorRepository from '../../js/task-2/ErrorRepository';

test.each([
  [1, 'Unknown error'],
  ['400', 'Unknown error'],
  [400, 'Bad Request'],
  [401, 'Unauthorized'],
  [402, 'Payment Required'],
  [403, 'Forbidden'],
  [404, 'Not Found'],
  [405, 'Method Not Allowed'],
  [500, 'Internal Error'],
  [502, 'Bad Gateway'],
  [503, 'Service Unavailable'],
])('testing .translate() method for code: %d and textError: %s', (code, expected) => {
  const err = new ErrorRepository();
  expect(err.translate(code)).toBe(expected);
});
