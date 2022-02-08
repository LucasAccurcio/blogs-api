const error = require('../controllers/middlewares/error');
const login = require('../controllers/login');
const joiError = require('../controllers/middlewares/joiErrors');
const getUsers = require('../controllers/getUsers');
const removeUser = require('../controllers/removeUser');
const createUsers = require('../controllers/createUser');
const getUserById = require('../controllers/getUserById');
const validateJWT = require('./auth/validateJWT');
const getCategories = require('../controllers/getCategories');
const createCategory = require('../controllers/createCategory');
const createBlogPosts = require('../controllers/createBlogPost');
const userValidations = require('../controllers/middlewares/userValidations');
const loginValidation = require('../controllers/middlewares/loginValidations');
const categoryValidations = require('../controllers/middlewares/categoryValidations');
const blogPostsValidations = require('../controllers/middlewares/blogPostsValidations');

module.exports = {
  blogPostsValidations,
  categoryValidations,
  createBlogPosts,
  loginValidation,
  userValidations,
  createCategory,
  getCategories,
  createUsers,
  getUserById,
  validateJWT,
  removeUser,
  getUsers,
  joiError,
  login,
  error,
};
