const bcrypt = require('bcryptjs');
const app = require('../src/app');
const helpers = require('./test-helpers');

describe('User Endpoints', function() {
  let db;

  const testUsers = helpers.makeUsersArray();
  const testUser = testUsers[0];

  before('make knex instance', () => {
    db = helpers.makeKnexInstance();
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('cleanup', () => helpers.cleanTables(db));

  afterEach('cleanup', () => helpers.cleanTables(db));

  /**
   * @description Register a user and populate their fields
   **/
  describe(`POST /api/user`, () => {
    beforeEach('insert users', () => helpers.seedUsers(db, testUsers));

    const requiredFields = ['username', 'password', 'name'];

    requiredFields.forEach(field => {
      const registerAttemptBody = {
        username: 'test username',
        password: 'test password',
        name: 'test name',
        address: '2122 Blazing Star Drive Tipp City OH 45371'
      };

      it(`responds with 400 required error when '${field}' is missing`, () => {
        delete registerAttemptBody[field];

        return supertest(app)
          .post('/api/user')
          .send(registerAttemptBody)
          .expect(400, {
            error: `Missing '${field}' in request body`
          });
      });
    });

    it(`responds 400 'Password be longer than 8 characters' when empty password`, () => {
      const userShortPassword = {
        username: 'test username',
        password: '1234567',
        name: 'test name',
        address: '2122 Blazing Star Drive Tipp City OH 45371'
      };
      return supertest(app)
        .post('/api/user')
        .send(userShortPassword)
        .expect(400, { error: `Password be longer than 8 characters` });
    });

    it(`responds 400 'Password be less than 72 characters' when long password`, () => {
      const userLongPassword = {
        username: 'test username',
        password: '*'.repeat(73),
        name: 'test name',
        address: '2122 Blazing Star Drive Tipp City OH 45371'
      };
      return supertest(app)
        .post('/api/user')
        .send(userLongPassword)
        .expect(400, { error: `Password be less than 72 characters` });
    });

    it(`responds 400 error when password starts with spaces`, () => {
      const userPasswordStartsSpaces = {
        username: 'test username',
        password: ' 1Aa!2Bb@',
        name: 'test name',
        address: '2122 Blazing Star Drive Tipp City OH 45371'
      };
      return supertest(app)
        .post('/api/user')
        .send(userPasswordStartsSpaces)
        .expect(400, {
          error: `Password must not start or end with empty spaces`
        });
    });

    it(`responds 400 error when password ends with spaces`, () => {
      const userPasswordEndsSpaces = {
        username: 'test username',
        password: '1Aa!2Bb@ ',
        name: 'test name',
        address: '2122 Blazing Star Drive Tipp City OH 45371'
      };
      return supertest(app)
        .post('/api/user')
        .send(userPasswordEndsSpaces)
        .expect(400, {
          error: `Password must not start or end with empty spaces`
        });
    });

    it(`responds 400 error when password isn't complex enough`, () => {
      const userPasswordNotComplex = {
        username: 'test username',
        password: '11AAaabb',
        name: 'test name',
        address: '2122 Blazing Star Drive Tipp City OH 45371'
      };
      return supertest(app)
        .post('/api/user')
        .send(userPasswordNotComplex)
        .expect(400, {
          error: `Password must contain one upper case, lower case, number and special character`
        });
    });

    it(`responds 400 'User name already taken' when username isn't unique`, () => {
      const duplicateUser = {
        username: testUser.username,
        password: '11AAaa!!',
        name: 'test name',
        address: '2122 Blazing Star Drive Tipp City OH 45371'
      };
      return supertest(app)
        .post('/api/user')
        .send(duplicateUser)
        .expect(400, { error: `Username already taken` });
    });

    it(`responds 400 'We can't find your district' when bad address is sent`, () => {
      const badAddressUser = {
        username: 'TestUserName1234',
        password: '11AAaa!!',
        name: 'test name',
        address: '2122 Blazing Star Drive Pluto MW 99999'
      };
      return supertest(app)
        .post('/api/user')
        .send(badAddressUser)
        .expect(400, { error: `We couldn't find your district, check your address and try again` });
    });

    describe(`Given a valid user`, () => {
      this.timeout(5000);
      it(`responds 201, serialized user with no password`, () => {
        const newUser = {
          username: 'test username',
          password: '11AAaa!!',
          name: 'test name',
          address: '2122 Blazing Star Drive Tipp City OH 45371'
        };
        return supertest(app)
          .post('/api/user')
          .send(newUser)
          .expect(201)
          .expect(res => {
            expect(res.body).to.have.property('id');
            expect(res.body.username).to.eql(newUser.username);
            expect(res.body.name).to.eql(newUser.name);
            expect(res.body).to.not.have.property('password');
          });
      });

      it(`stores the new user in db with bcryped password`, () => {
        const newUser = {
          username: 'test username',
          password: '11AAaa!!',
          name: 'test name',
          address: '2122 Blazing Star Drive Tipp City OH 45371'
        };
        return supertest(app)
          .post('/api/user')
          .send(newUser)
          .expect(res =>
            db
              .from('user')
              .select('*')
              .where({ id: res.body.id })
              .first()
              .then(row => {
                expect(row.username).to.eql(newUser.username);
                expect(row.name).to.eql(newUser.name);

                return bcrypt.compare(newUser.password, row.password);
              })
              .then(compareMatch => {
                expect(compareMatch).to.be.true;
              })
          );
      });
    });
  });
  describe(`PATCH /api/user/:id`, () => {
    beforeEach('insert users', () => helpers.seedUsers(db, testUsers));

    it(`responds 400 'We can't find your district' when bad address is sent`, () => {
      const newAddress = '2122 Blazing Star Drive Pluto MW 99999'

      return supertest(app)
        .patch('/api/user/1')
        .set('Authorization', helpers.makeAuthHeader(testUser))
        .send({...testUser, newAddress})
        .expect(400, { error: `We couldn't find your district, check your address and try again` });
    });
    describe(`Given a valid new address`, () => {
      it(`responds 201 and with the update user`, () => {
        const newAddress = '22601 s 110th street hickman ne 68372'
  
        return supertest(app)
          .patch('/api/user/1')
          .set('Authorization', helpers.makeAuthHeader(testUser))
          .send({...testUser, newAddress})
          .expect(201).then(res =>{
            expect(res.body[0].username).to.eql(testUser.username);
            expect(res.body[0].user_id).to.eql(testUser.user_id);
            expect(res.body[0].address).to.eql(newAddress);
          })
      });
    });
  });
});
