const express = require('express');
const UserService = require('./user-service');
const { requireAuth } = require('../middleware/jwt-auth');

const userRouter = express.Router();
const jsonBodyParser = express.json();

userRouter
  .get('/:id', requireAuth, jsonBodyParser, async (req, res, next) => {
    const id = req.params.id
    
    try{
      
      const getUserWithId = await UserService.getUserById(
        req.app.get('db'),
        id,
      )
      console.log(getUserWithId)
      if(getUserWithId)
        return res.status(200).json(getUserWithId)


    }catch (error){
      next(error)
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

  //Make user send password
  // + check jwt token?
  // Portfolio = show our ability to do either?
  .patch('/:id', requireAuth, jsonBodyParser, async (req, res, next) => {
    try {
      const updatedUser = await UserService.updateUser(
        req.app.get('db'),
        req.params.id,
        req.body.newAddress
      );
      res.status(204).json(updatedUser);
    } catch (error) {
      next(error);
    }
  });

module.exports = userRouter;
