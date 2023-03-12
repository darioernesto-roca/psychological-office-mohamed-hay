// Route for us
const express = require('express');
const router = express.Router();

const usController = require('../controllers/us.controller');
console.log(usController);

// Defining routes
router.get('/', usController.index);

// Exportar el módulo
module.exports = router;