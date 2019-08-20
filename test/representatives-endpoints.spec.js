const app = require('../src/app');
const helpers = require('./test-helpers');


describe.only('Representative Endpoints', function() {
  const testAddress = '2122 Blazing Star Drive, Tipp City, OH 45371';
  this.timeout(5000);
  describe(`POST /api/representatives`, () => { 
    it(`responds 400 and with correct error when address key provided but no value`, () => {
      return supertest(app)
        .post('/api/representatives')
        .send({address:''})
        .expect(400, {error: 'Must include address in request body'});
    });
    it(`responds 400 and with correct error when no address key provided`, () => {
      return supertest(app)
        .post('/api/representatives')
        .expect(400, {error: 'Must include address in request body'});
    });
    it(`responds 200 and with representative data`, () => {
      return supertest(app)
        .post('/api/representatives')
        .send({address:testAddress})
        .expect(200, helpers.expectedResponse);
    });
  });
});
