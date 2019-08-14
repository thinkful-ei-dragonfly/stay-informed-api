require('dotenv').config()
module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL
    || 'postgresql://dunder-mifflin@localhost/stay-informed',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '180h', /* TODO revisit expiry time */
  CIVIC_API_KEY: process.env.CIVIC_API_KEY,
  CIVIC_API_URL: process.env.CIVIC_API_URL || 'https://www.googleapis.com/civicinfo/v2/representatives',
}
