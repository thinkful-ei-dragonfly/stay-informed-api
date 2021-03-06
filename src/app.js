require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./middleware/error-handler');
const authRouter = require('./auth/auth-router');
const userRouter = require('./user/user-router');
const newsRouter = require('./news/news-router')
const representativeRouter = require('./representative/representative-router');
const financeRouter = require('../src/finances/finances-router');


const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test',
}));
app.use(cors());
app.use(helmet());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/representatives', representativeRouter);
app.use('/api/news', newsRouter);
app.use('/api/finances', financeRouter);





app.use(errorHandler);

module.exports = app;
