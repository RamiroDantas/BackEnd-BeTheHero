const express = require("express")
const OngController = require('../src/controllers/OngController')
const IncidentsController = require('../src/controllers/IncidentsController')
const SessionController = require('../src/controllers/SessionController')

const routes = express.Router();

routes.post('/login', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.Create);

routes.post('/incidents', IncidentsController.Create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/Profile', IncidentsController.ProfileIndex);

module.exports = routes;