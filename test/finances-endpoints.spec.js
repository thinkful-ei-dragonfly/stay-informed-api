const app = require('../src/app');
const helpers = require('./test-helpers');


describe('Finances Endpoints', function() {
  const testCid = 'N00038767';
  //Increasing the timeout because the three chained api calls take some time.
  this.timeout(7000);
  describe(`POST /api/finances`, () => { 
    it(`responds 400 and with correct error when cid key provided but no value`, () => {
      return supertest(app)
        .post('/api/finances')
        .send({cid:''})
        .expect(400, {error: 'Must include crp id in request body'});
    });
    it(`responds 400 and with correct error when no cid key provided`, () => {
      return supertest(app)
        .post('/api/finances')
        .expect(400, {error: 'Must include crp id in request body'});
    });
    it(`responds 200 and with financial data`, () => {
      return supertest(app)
        .post('/api/finances')
        .send({cid: testCid})
        .expect(200)
        .expect(res =>{
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('topContributors');
          expect(res.body.topContributors).to.have.lengthOf(10);
          expect(res.body).to.have.property('topIndustries');
          expect(res.body.topIndustries).to.have.lengthOf(10);
          expect(res.body).to.have.property('contributionTotals');
          expect(res.body.contributionTotals).to.be.an('object');

        });
    });
  });
});
