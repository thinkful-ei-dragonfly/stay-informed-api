const express = require('express');
const UserService = require('./user-service');
const { requireAuth } = require('../middleware/jwt-auth');
const jwt = require('jsonwebtoken');

const userRouter = express.Router();
const jsonBodyParser = express.json();

userRouter
  .get('/:id', requireAuth, jsonBodyParser, async (req, res, next) => {
    const id = req.params.id;

    try {
      const authToken = req.get('Authorization') || '';
      let bearerToken;
      if (!authToken.toLowerCase().startsWith('bearer ')) {
        return res.status(401).json({ error: 'Missing bearer token' });
      } else {
        bearerToken = authToken.slice(7, authToken.length);
      }
      const getUserWithId = await UserService.getUserAddressById(
        req.app.get('db'),
        id
      );
      const userId = jwt.decode(bearerToken).user_id;
      if (getUserWithId && userId == id)
        return res.status(200).json(getUserWithId);
      return res.status(400).json({ error: 'you are not authorized' });
    } catch (error) {
      next(error);
    }
  })

  .post('/', jsonBodyParser, async (req, res, next) => {
    const { password, username, name, address } = req.body;

    for (const field of ['name', 'username', 'password', 'address'])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        });

    try {
      const passwordError = UserService.validatePassword(password);

      if (passwordError) return res.status(400).json({ error: passwordError });
      const hasUserWithUserName = await UserService.hasUserWithUserName(
        req.app.get('db'),
        username
      );
      if (hasUserWithUserName)
        return res.status(400).json({ error: `Username already taken` });
      const hashedPassword = await UserService.hashPassword(password);
      const newUser = {
        username,
        password: hashedPassword,
        name,
        address
      };
      const districtError = await UserService.validateAddress(address)

      if(districtError) return res.status(400).json({ error: districtError });

      const user = await UserService.insertUser(req.app.get('db'), newUser);
      res
        .status(201)
        // Temporarily commenting this out. I don't think we'll have a /users/1 endpoint in the frontend anyway
        // .location(path.posix.join(req.originalUrl, `/${user.id}`))j
        // Also for below, do we need to send a user back?
        .json(UserService.serializeUser(user));
    } catch (error) {
      next(error);
    }
  })

  .patch('/:id', requireAuth, jsonBodyParser, async (req, res, next) => {
    const id = req.params.id;
    try {
      const authToken = req.get('Authorization') || '';
      let bearerToken;
      if (!authToken.toLowerCase().startsWith('bearer ')) {
        return res.status(401).json({ error: 'Missing bearer token' });
      } else {
        bearerToken = authToken.slice(7, authToken.length);
      }

      console.log('newaddress', req.body.newAddress);

      const districtError = await UserService.validateAddress(req.body.newAddress)
      
      console.log(districtError);
      if(districtError) {
        return res.status(400).json({ error: districtError });
      }

      const getUserWithId = await UserService.getUserAddressById(
        req.app.get('db'),
        id
      );
      const userId = jwt.decode(bearerToken).user_id;
      if (getUserWithId && userId == id) {
        const updatedUser = await UserService.updateUser(
          req.app.get('db'),
          req.params.id,
          req.body.newAddress
        );
        return res.status(201).json(updatedUser);
      } else {
        return res.status(400).json({ error: 'you are not authorized' });
      }
    } catch (error) {
      next(error);
    }
  });

module.exports = userRouter;
