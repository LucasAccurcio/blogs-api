const login = require('../controllers/login');
const createUsers = require('../controllers/createUser');
const getUsers = require('../controllers/getUsers');
const getUserById = require('../controllers/getUserById');
const removeUser = require('../controllers/removeUser');
const userValidations = require('../controllers/middlewares/userValidations');
const loginValidation = require('../controllers/middlewares/loginValidations');
const error = require('../controllers/middlewares/error');
const joiError = require('../controllers/middlewares/joiErrors');
const validateJWT = require('./auth/validateJWT');

module.exports = {
  login,
  createUsers,
  getUsers,
  getUserById,
  removeUser,
  userValidations,
  loginValidation,
  validateJWT,
  joiError,
  error,
};
