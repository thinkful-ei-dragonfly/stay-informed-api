process.env.TZ = 'UCT'
process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'test-jwt-secret'
process.env.JWT_EXPIRY = '3m' /* TODO affirm expiry time */

require('dotenv').config()

process.env.TEST_DB_URL = process.env.TEST_DB_URL
  || "postgresql://USERNAME@localhost/TESTDATABASE"

const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest
