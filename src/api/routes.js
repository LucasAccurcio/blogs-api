const error = require('../controllers/middlewares/error');
const login = require('../controllers/login');
const joiError = require('../controllers/middlewares/joiErrors');
const getUsers = require('../controllers/getUsers');
const removeUser = require('../controllers/removeUser');
const createUsers = require('../controllers/createUser');
const getUserById = require('../controllers/getUserById');
const validateJWT = require('./auth/validateJWT');
const getBlogPosts = require('../controllers/getBlogPosts');
const getCategories = require('../controllers/getCategories');
const createCategory = require('../controllers/createCategory');
const createBlogPosts = require('../controllers/createBlogPost');
const userValidations = require('../controllers/middlewares/userValidations');
const loginValidation = require('../controllers/middlewares/loginValidations');
const getBlogPostsById = require('../controllers/getBlogPostsById');
const categoryValidations = require('../controllers/middlewares/categoryValidations');
const blogPostsValidations = require('../controllers/middlewares/blogPostsValidations');

module.exports = {
  blogPostsValidations,
  categoryValidations,
  getBlogPostsById,
  createBlogPosts,
  loginValidation,
  userValidations,
  createCategory,
  getCategories,
  getBlogPosts,
  createUsers,
  getUserById,
  validateJWT,
  removeUser,
  getUsers,
  joiError,
  login,
  error,
};
