const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/api/routes.js');

/* Aqui, importamos nossa função que valida se o usuário está ou não autenticado */
// const validateJWT = require('./src/api/auth/validateJWT');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// const apiRoutes = express.Router();

// app.get('/api/posts', validateJWT, routes.getPosts);
app.post('/users', routes.userValidation, routes.createUsers);
// app.get('/api/users', routes.getUsers);
// app.post('/api/login', routes.login);
app.use(routes.error);
// app.use(apiRoutes);

app.listen(PORT, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
