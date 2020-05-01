const express = require('express');

const UsuariosController = require('./controllers/UsuariosControllers');
const CorrespondenciasController = require('./controllers/CorrespondenciasController');

const routes = express.Router();

routes.post('/usuarios', UsuariosController.create);
routes.get('/usuarios', UsuariosController.index);
routes.delete('/usuarios/:id', UsuariosController.delete);
routes.put('/usuarios/:id', UsuariosController.update);

routes.post('/correspondencias', CorrespondenciasController.create);
routes.get('/correspondencias', CorrespondenciasController.index);
routes.get('/correspondencias/:id', CorrespondenciasController.single_index);
routes.delete('/correspondencias/:id', CorrespondenciasController.delete);

module.exports = routes;