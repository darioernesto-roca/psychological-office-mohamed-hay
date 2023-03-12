// Route for services
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/services.controller');
console.log(serviceController);

// Defining routes
router.get('/', serviceController.index);

// Exportar el módulo
module.exports = router;