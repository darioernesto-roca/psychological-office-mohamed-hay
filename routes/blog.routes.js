const express = require('express');
const router = express.Router();

// Importar el controlador de blog
const blogController = require('../controllers/blog.controller');
console.log(blogController);

// Definir las rutas
router.get('/', blogController.index);

// Exportar el módulo
module.exports = router;
