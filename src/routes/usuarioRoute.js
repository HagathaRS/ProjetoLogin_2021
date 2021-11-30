const express = require('express');
const routes = express.Router();
const usuarioController = require('../controller/usuarioController')

//CREATE
//abre add
routes.get('/add', usuarioController.abreadd  );
//add
routes.post('/add', usuarioController.add  );

//READ
//list
routes.get('/', usuarioController.list );
// list com filtro
routes.post('/', usuarioController.filtro  );

//UPDATE
//abre edit
routes.get('/edt', usuarioController.abreedit  );
//edit
routes.post('/edt',usuarioController.edit  );


//deleta
routes.get('/del',usuarioController.del  );

module.exports = routes;