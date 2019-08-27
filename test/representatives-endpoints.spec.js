const app = require('../src/app');
const helpers = require('./test-helpers');


describe('Representative Endpoints', function() {
  const testAddress = '2122 Blazing Star Drive, Tipp City, OH 45371';
  //Increasing the timeout because the three chained api calls take some time.
  this.timeout(3000);
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
        .expect(200)
        .expect(res =>{
          expect(res.body.representatives).to.have.lengthOf(3);
          expect(res.body.state).to.eql(helpers.expectedResponse.state);
          expect(res.body.district).to.eql(helpers.expectedResponse.district);
          
          res.body.representatives.forEach((rep,idx) =>{
            expect(rep.member_id).to.eql(helpers.expectedResponse.representatives[idx].member_id);
            expect(rep.last_name).to.eql(helpers.expectedResponse.representatives[idx].last_name);
            expect(rep.first_name).to.eql(helpers.expectedResponse.representatives[idx].first_name);
            expect(rep.photoUrl).to.eql(helpers.expectedResponse.representatives[idx].photoUrl);
            expect(rep.smallPhotoUrl).to.eql(helpers.expectedResponse.representatives[idx].smallPhotoUrl);
            //expect(rep.topContributors).to.eql(helpers.expectedResponse.representatives[idx].topContributors);
            //expect(rep.topIndrustries).to.eql(helpers.expectedResponse.representatives[idx].topIndrustries);
            //expect(rep.contributionTotals).to.eql(helpers.expectedResponse.representatives[idx].contributionTotals);
          });

        })
    });
  });
});
