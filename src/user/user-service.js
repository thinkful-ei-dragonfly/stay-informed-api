const bcrypt = require('bcryptjs');
const xss = require('xss');
const RepresentativeService = require('../representative/representative-service');

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

const UserService = {
  getUserAddressById(db, user_id) {
    return db('user')
      .select('address')
      .where({ id: user_id });
  },

  hasUserWithUserId(db, user_id) {
    return db('user')
      .where({ user_id })
      .first()
      .then(user_id => !!user_id);
  },
  hasUserWithUserName(db, username) {
    return db('user')
      .where({ username })
      .first()
      .then(user => !!user);
  },
  insertUser(db, newUser) {
    return db
      .insert(newUser)
      .into('user')
      .returning('*')
      .then(([user]) => user);
  },
  updateUser(db, user_id, newAddress) {
    return db('user')
      .where({ id: user_id })
      .update({ address: newAddress })
      .returning('*');
  },

  validateAddress(address) {
    return RepresentativeService.getDistrict(address).then(districtObj => {
      console.log('districtObj', districtObj);
      if (!districtObj || !districtObj.state || !districtObj.district) {
        return 'We couldn\'t find your district, check your address and try again';
      }
      return null;
    });
  },

  validatePassword(password) {
    if (password.length < 8) {
      return 'Password be longer than 8 characters';
    }
    if (password.length > 72) {
      return 'Password be less than 72 characters';
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
      return 'Password must not start or end with empty spaces';
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return 'Password must contain one upper case, lower case, number and special character';
    }
    return null;
  },
  hashPassword(password) {
    return bcrypt.hash(password, 12);
  },
  serializeUser(user) {
    return {
      id: user.id,
      name: xss(user.name),
      username: xss(user.username),
      address: xss(user.address)
    };
  }
};

module.exports = UserService;
