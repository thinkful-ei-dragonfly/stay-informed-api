const app = require('../src/app');
const helpers = require('./test-helpers');

describe('News Endpoints', function() {

  describe(`POST /api/news`, () => {
    it(`responds 400 and with correct error when no names are provided`, () => {
      return supertest(app)
        .post('/api/news')
        .send({ address: '' })
        .expect(400, { error: 'No representatives recieved to find news' });
    });
   
    it(`responds 200 and with news data`, () => {
      return supertest(app)
        .post('/api/news')
        .send({
          senator1_first: 'David',
          senator1_last: 'Perdue',
          senator2_first: 'Johnny',
          senator2_last: 'Isakson',
          representative1_first: 'Jody',
          representative1_last: 'Hice'
        })
        .expect(201)
        .expect(res => {
          expect(res.body.articles).to.have.lengthOf(20);

          res.body.articles.forEach(art => {
            expect(art).to.have.property('source');
            expect(art).to.have.property('title');
            expect(art).to.have.property('description');
            expect(art).to.have.property('url');
            expect(art).to.have.property('urlToImage');
            expect(art).to.have.property('publishedAt');
          });
        });
    });
  });
});
