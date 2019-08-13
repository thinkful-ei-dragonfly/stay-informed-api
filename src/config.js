module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DATABASE_URL
    || 'postgresql://USERNAME@localhost/DATABASE',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '180h', /* TODO revisit expiry time */
}
