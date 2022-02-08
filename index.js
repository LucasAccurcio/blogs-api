require('dotenv').config();
// Será que é necessário chamar aqui?
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/api/routes.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post('/user', routes.userValidations, routes.createUsers);

app.post('/login', routes.loginValidation, routes.login);

app.get('/user', routes.validateJWT, routes.getUsers);

app.get('/user/:id', routes.validateJWT, routes.getUserById);

app.delete('/user/me', routes.validateJWT, routes.removeUser);

app.post('/categories', routes.validateJWT, routes.categoryValidations, routes.createCategory);

app.get('/categories', routes.validateJWT, routes.getCategories);

app.post('/post', routes.validateJWT, routes.blogPostsValidations, routes.createBlogPosts);

// app.get('/post/search/', routes.validateJWT, routes.searchBlogPosts);

app.get('/post', routes.validateJWT, routes.getBlogPosts);

// app.get('/post/:id', routes.validateJWT, routes.getBlogPostsById); 

// app.put('/post/:id', routes.validateJWT, routes.updateBlogPost);

// app.delete('/post/:id', routes.validateJWT, routes.removerBlogPost);

app.use(routes.joiError);

app.use(routes.error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('ouvindo porta 3000!'));
