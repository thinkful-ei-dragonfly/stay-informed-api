<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./middleware/error-handler');
const authRouter = require('./auth/auth-router');
const userRouter = require('./user/user-router');
=======
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const errorHandler = require('./middleware/error-handler')
const authRouter = require('./auth/auth-router')
const userRouter = require('./user/user-router')
const representativeRouter = require('./representative/representative-router')
>>>>>>> d67c073f0862d27110950b5e2499efc5d18ea373

const propublicaRouter = require('./propublica/propublica-router');
const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common', {
  skip: () => NODE_ENV === 'test',
}));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200).send('Hello, server and boilerplate!');
});

<<<<<<< HEAD
app.use('/', propublicaRouter);
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
=======
app.use('/api/representatives', representativeRouter)
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
>>>>>>> d67c073f0862d27110950b5e2499efc5d18ea373

app.use(errorHandler);

module.exports = app;
