const app = require('../src/app');
const helpers = require('./test-helpers');


describe('Finances Endpoints', function() {
  const testCid = 'N00038767';
  //Increasing the timeout because the three chained api calls take some time.
  this.timeout(7000);
  describe(`POST /api/finances`, () => { 
    it(`responds 400 and with correct error when address key provided but no value`, () => {
      return supertest(app)
        .post('/api/finances')
        .send({address:''})
        .expect(400, {error: 'Must include address in request body'});
    });
    it(`responds 400 and with correct error when no address key provided`, () => {
      return supertest(app)
        .post('/api/finances')
        .expect(400, {error: 'Must include address in request body'});
    });
    it.only(`responds 200 and with representative data`, () => {
      return supertest(app)
        .post('/api/finances')
        .send({cid: testCid})
        .expect(200)
        .expect(res =>{
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('topContributors');
          expect(res.body).to.have.property('topIndrustries');
          expect(res.body).to.have.property('contributionTotals');
        });
    });
  });
});
