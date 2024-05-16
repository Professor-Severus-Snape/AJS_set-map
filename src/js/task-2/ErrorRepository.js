export default class ErrorRepository {
  constructor() {
    this.error = new Map([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [402, 'Payment Required'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [405, 'Method Not Allowed'],
      [500, 'Internal Error'],
      [502, 'Bad Gateway'],
      [503, 'Service Unavailable'],
    ]);
  }

  translate(code) {
    return this.error.has(code) ? this.error.get(code) : 'Unknown error';
  }
}
