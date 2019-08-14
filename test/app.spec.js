const app = require('../src/app');

describe('App', () => {
  it('GET / responds with 200 containing "Hello, server and boilerplate!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, server and boilerplate!');
  });
});