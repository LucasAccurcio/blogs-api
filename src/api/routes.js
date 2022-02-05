const createUsers = require('../controllers/createUser');
const userValidation = require('../controllers/middlewares/userValidations');
const error = require('../controllers/middlewares/error');

module.exports = {
  createUsers,
  userValidation,
  error,
};
