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
const checkPostOwner = require('../controllers/middlewares/checkPostOwner');
const updateBlogPost = require('../controllers/updateBlogPost');
const createCategory = require('../controllers/createCategory');
const removeBlogPost = require('../controllers/removeBlogPost');
const createBlogPosts = require('../controllers/createBlogPost');
const userValidations = require('../controllers/middlewares/userValidations');
const loginValidation = require('../controllers/middlewares/loginValidations');
const getBlogPostsById = require('../controllers/getBlogPostsById');
const checkBlogPostById = require('../controllers/middlewares/checkBlogPostById');
const categoryValidations = require('../controllers/middlewares/categoryValidations');
const blogPostsValidations = require('../controllers/middlewares/blogPostsValidations');
const updatePostValidations = require('../controllers/middlewares/updatePostValidations');

module.exports = {
  updatePostValidations,
  blogPostsValidations,
  categoryValidations,
  checkBlogPostById,
  getBlogPostsById,
  removeBlogPost,
  createBlogPosts,
  loginValidation,
  userValidations,
  checkPostOwner,
  updateBlogPost,
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
